"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Spaces
from api.utils import generate_sitemap, APIException

# AQUÍ IMPORTO storage Y tempfile DE firebase PARA EL ARCHIVO TEMPORAL 
# QUE SE GENERA EN LA RUTA DE SUBIR FOTO
# ESTE STORAGE ESTÁ CONECTADO LOS BUCKETS DE firebase DONDE SE GUARDAN LAS FOTOS
from firebase_admin import storage
import tempfile






from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
# from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/catalogo', methods=['GET'])
def get_spaces():
    spaces= Spaces.query.all()

    results = list(map(lambda item: item.serialize(),spaces))

    response_body = {
        "msg":"Todo creado con exito",
        "results": results
    }

    return jsonify(results), 200

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None) #//// ACÁ DEFINIMOS LOS DATOS QUE RECIBIREMOS DESDE EL FRONT, EN ESTA LINEA email. 
    password = request.json.get("password", None)  #//// ACÁ DEFINIMOS LOS DATOS QUE RECIBIREMOS DESDE EL FRONT, EN ESTA LINEA password. 

    user = User.query.filter_by(email=email).first()  #//// ACÁ HAGO UNA CONSULTA ESPECÍFICA (query) PARA OBTENER LA INFORMACIÓN DE UN USUARIO EN PARTICULAR A TRAVÉS DE SU email (que es un campo dentro del modelo-tabla User), QUE SE GUARDO EN LA BASE DE DATOS (INFORMACIÓN QUE SE GENERÓ DESDE EL FRONT CUANDO EL USUARIO AGREGÓ LOS DATOS)
    print(user.email)


    if email != user.email or password != user.password: #//// OJO AQUÍ ACTIVAS LA CONDICIÓN DONDE SI EL CORREO O EL PASSWORD NO SON LOS REGISTRADOS EN LA BASE DE DATOS... (previamente al inicio indicábamos que email debe ser "test" y password debe ser "test")
        return jsonify({"msg": "Bad email or password"}), 401 #//// ... ENTONCES SE MUESTRA UN MENSAJE DE ALERTA POR ERROR EN EL email O PASSWORD

    access_token = create_access_token(identity=email) #//// ... SI AMBOS ESTÁN CORRECTOS ENTONCES ACTIVA LA FUNCIÓN create_access_token QUE GENERA EL TOKEN DE ACCESO. **** OJO **** LO HACE A TRAVÉS DE LA PROPIEDAD identity Y ASOCIA CON EL VALOR DE email QUE VIENE DESDE EL FRONT.... ENTONCES LE ASIGNA UN TOKEN...
    return jsonify(access_token=access_token)  #//// ... Y EL access_token ES JUSTO LO QUE SE MANDA COMO RESPUESTA.


# #///////////////////////////////////////////////////
# # OJO: AHORA PUEDO CREAR UN USUARIO DESDE ACÁ EN EL simple browser CON SU email Y password. 
# # ENTONCES PUEDO IRME A POSTMAN Y PROBAR MI LOGIN CON EL MÉTODO POST
# # AL HACER EL POST DEBO COLOCAR UN body json EN POSTMAN CON LOS DOS DATOS QUE INDIQUÉ PARA ESTA RUTA email Y password TAL Y COMO LOS PUSE EN EL simple browser de acá
# # SI EL email Y EL password COINCIDEN CON LOS REGISTRADOS ENTONCES TE GENERA EL TOKEN DE INGRESO. 
# #///////////////////////////////////////////////////

@api.route('/postspace', methods=['POST'])
def postspace():
    name = request.json.get("name", None) 
    description = request.json.get("description", None) 
    image = request.json.get("image", None) 
    # print(name, description, image)


 ## ESTAS 3 LÍNEAS DE CODIGO SON RECOMENDADAS POR FLASK ALCHEMY PARA AGREGAR DATOS NUEVOS
    post = Spaces(name=name, description=description, images=image)
    db.session.add(post)
    db.session.commit()

    response_body = {

        "message": "Has posteado tu Space :D"
    }


@api.route('/postspace', methods=['POST'])
def postspace():
    name = request.json.get("name", None) 
    description = request.json.get("description", None) 
    image = request.json.get("image", None) 
    # print(name, description, image)


# #* • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * •

# # A ESTE PUNTO YO TENGO COMPLETAMENTE INTEGRADO JWT CON MI CODIGO 
# # JWT YA ESTÁ DENTRO DE MI APLICACIÓN
# # REALIZA CONSULTAS A MI BASE DE DATOS PARA VERIFICAR SI EL USARIO DE TURNO ESTÁ DEBIDAMENTE REGISTRADO EN MI APLICACIÓN
# # SI ESTÁ REGISTRADO DEVUELVE UN TOKEN
# # SI NO... LE DA UN MENSAJE DE ADVERTENCIA

# #* • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * •

    return jsonify(response_body), 200



# # >>>>>>>> AHORA PODEMOS CREAR CONTENIDO EXCLUSIVO <<<<<
# # >>>>>>>>>>>>>>>>> RUTAS PROTEGIDAS <<<<<<<<<<<<<<<<<<<


@api.route('/uploadPhotoSpace', methods=['POST'])
@jwt_required() #REQUERIMOS EL id DE jwt PARA IDENTIFICAR QUIEN SUBE LA FOTO
def uploadPhotoSpace():
    #N.1 - Se recibe un archivo en la peticion
    file=request.files['spacePic']
    
    #N.2 - Extraemos la extension del archivo
    #ESTA EXTENSIÓN ES NECESARIA PORQUE EN firebase SE TRUNCA Y HAY QUE ESPECIFICARLA
    extension=file.filename.split(".")[1]

# #* • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • 
# # AHORA PUEDO PROCEDER A INGRESASR A UNA RUTA PROTEGIDA (PORQUE DEBÉS AUTENTICARTE) COMO profile
# # PARA ACCEDER A ESA RUTA PROTEGIDA DEBO USAR EL MÉTODO GET. 
# # PERO OJO: TENGO QUE AUTENTICARME Y PARA ESO TENGO QUE IRME EN POSTMAN A Authorization 
# # AHÍ SELECCIONAR bearer token Y COLOCAR EL token QUE SE TE GENERÓ (ARRIBA) CON EL LOGIN 
# # UNA VEZ QUE INGRESO EL TOKEN, ENTONCES 
# #* • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • 


    #N.3 - AQUÍ DEFINO EN QUÉ RUTA VOY A UBICAR EL ARCHIVO Y EL NOMBRE QUE SE GENERARÁ USANDO LA AYUDA DEL id de jwt
    # DEFINO EL ESPACIO DENTRO DE MI BUCKET EN DONDE VOY A GUARDAR LA IMAGEN
    # Se genera el nombre de archivo con el id de la imagen y la extension
    filename="spaces/" + str(get_jwt_identity()) + "." + extension
    #Por ejemplo: si subo una foto .png para el usuario 2 será: spaces/02.png



    #N.4 - AQUÍ CREO UN ARCHIVO TEMPORAL Y GUARDO LO QUE ME ENVÍE MI PETICIÓN EN ESE TEMPORAL
    # ESE ARCHIVO ES LO QUE VOY A SUBIR DESPUÉS 
    # Guardar el archivo recibido en un archivo temporal
    temp = tempfile.NamedTemporaryFile(delete=False)
    file.save(temp.name)
    
    #-------------------------------------------------
    ## A PARTIR DE AQUÍ REALIZO LA CARGA A MI firebase
    #-------------------------------------------------
    
    #N.5 -  Subir el archivo a firebase
    ## SE LLAMA AL bucket DE firebase DONDE SE GUARDAN LAS FOTOS
    bucket=storage.bucket(name="theupffice.appspot.com")
    #OJO: Llamo a mi bucket con el objeto storage (importado arriba) que tiene acceso a mi Proyecto configurado en firebase  


    #N.6 -  Se hace referencia al espacio dentro del bucket
    blob = bucket.blob(filename)
    #blod es el nombre del espacio que voy a crear dentro de mi bucket y el nombre será el que creo en el Paso 3
    
    #N.7 -  Se sube el archivo temporal al espacio designado en el bucket
    # Se debe especificar el tipo de contenido en base a la extension
    blob.upload_from_filename(temp.name,content_type="image/"+extension)
    

    #N.8 - Buscamos el usuario en la BD partiendo del id del token
    user = User.query.get(get_jwt_identity())
    if user is None:
        return "Usuario no encontrado", 403
    
    
    #N.9 -  Actualizar el campo de la foto del espacio
    spaces.picture=filename
    
    #N.10 - Se crea el registro en la base de datos 
    db.session.add(space)
    db.session.commit()
    

#* • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * • * •
