"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Spaces
from api.utils import generate_sitemap, APIException







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





# #///////////////////////////////////////////////////////////////////////////////////////
# # AQUÍ VENDRÍA EL Endpoint PARA SUBIR LA FOTO DE LOS ESPACIOS EN RENTA - REV. ROSSINI
# #///////////////////////////////////////////////////////////////////////////////////////

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

        "message": "Has posteado tu Space :D!"
    }

    return jsonify(response_body), 200




# #///////////////////////////////////////////////////////////////////////////////////////
# # AQUÍ VIENE EL Endpoint PARA POSTEAR UN REVIEW
# #///////////////////////////////////////////////////////////////////////////////////////


@api.route('/review', methods=['POST'])
def postingreview():
    message = request.json.get("message", None) 
    user_id = request.json.get("user_id", None) 
    space_id = request.json.get("space_id", None) 
    
    print(message, user_id, space_id)

    # post = Review(message=message,user_id=user_id,space_id=space_id)
    # db.session.add(post)
    # db.session.commit()

    response_body = {

        "message": "Has posteado tu Review :D!"
    }

    return jsonify(response_body), 200
