"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Spaces, Reviews, Myspaces
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

@api.route('/detail/<int:spaces_id>', methods=['GET'])
def get_one_space(spaces_id):
    space = Spaces.query.filter_by(id=spaces_id).first()
    reviews_query = Reviews.query.filter_by(space_id=spaces_id)
    reviews = list(map(lambda item: item.serialize(), reviews_query))

    # results = list(map(lambda item: item.serialize(),spaces))
    print(space.serialize())
    response_body = {
        "results": space.serialize(),
        "reviews": reviews,
    }

    return jsonify(response_body), 200
        # return jsonify("ok"), 200


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
    location = request.json.get("location", None) 
    space_type = request.json.get("space_type", None) 
    description = request.json.get("description", None) 
    amenities = request.json.get("amenities", None) 
    price = request.json.get("price", None) 
    image = request.json.get("image", None) 
    user_id = request.json.get("user_id", None)
    print (
        name,
        location,
        space_type,
        description,
        amenities,
        price,
        image,
        user_id) 


 ## ESTAS 3 LÍNEAS DE CODIGO SON RECOMENDADAS POR FLASK ALCHEMY PARA AGREGAR DATOS NUEVOS
    post = Spaces(name=name, location=location, space_type=space_type, description=description, amenities=amenities, price=price, images=image, user_id=user_id)
    db.session.add(post)
    db.session.commit()

    response_body = {

        "message": "Has posteado tu Space :D!"
    }

    return jsonify(response_body), 200




# #///////////////////////////////////////////////////////////////////////////////////////
# # AQUÍ VIENE EL Endpoint PARA POSTEAR UN REVIEW
# #///////////////////////////////////////////////////////////////////////////////////////


@api.route('/postreview', methods=['POST'])
@jwt_required()
def postingreview():
    message = request.json.get("message", None) 
    user_id = request.json.get("user_id", None) 
    space_id = request.json.get("space_id", None) 
    # user_id = get_jwt_identity()
   

    print(message, user_id, space_id)

    post = Reviews(message=message,user_id=user_id,space_id=space_id)
    db.session.add(post)
    db.session.commit()

    response_body = {

        "message": "Has posteado tu Review :D!"
    }

    return jsonify(response_body), 200




# @swag_from('./docs/auth/register.yaml')
# #///////////////////////////////////////////////////////////////////////////////////////
# # AQUÍ VIENE EL Endpoint PARA REGISTRARSE
# #///////////////////////////////////////////////////////////////////////////////////////
@api.route('/register', methods=['POST'])
def register():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']

    if len(password) < 6:
        return jsonify({'error': "Password is too short"}), HTTP_400_BAD_REQUEST

    if len(username) < 3:
        return jsonify({'error': "User is too short"}), HTTP_400_BAD_REQUEST

    if not username.isalnum() or " " in username:
        return jsonify({'error': "Username should be alphanumeric, also no spaces"}), HTTP_400_BAD_REQUEST

    if not validators.email(email):
        return jsonify({'error': "Email is not valid"}), HTTP_400_BAD_REQUEST

    if User.query.filter_by(email=email).first() is not None:
        return jsonify({'error': "Email is taken"}), HTTP_409_CONFLICT

    if User.query.filter_by(username=username).first() is not None:
        return jsonify({'error': "username is taken"}), HTTP_409_CONFLICT

    pwd_hash = generate_password_hash(password)

    user = User(username=username, password=pwd_hash, email=email)
    db.session.add(user)
    db.session.commit()

    return jsonify({
        'message': "User created",
        'user': {
            'username': username, "email": email
        }

    }), HTTP_201_CREATED







# #///////////////////////////////////////////////////////////////////////////////////////
# # AQUÍ VIENE EL Endpoint PARA MY PROFILE
# # #///////////////////////////////////////////////////////////////////////////////////////

@api.route("/myprofile", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()

    if current_user != user.email:
        return jsonify({"msg":"No existes en la app"}), 401
   
    return jsonify(user.serialize()), 200


# #///////////////////////////////////////////////////////////////////////////////////////
# # AQUÍ VIENE EL Endpoint PARA MYSPACES DENTRO DE MYPROFILE LOS SPACES DE UN USUARIO EN ESPECÍFICO
# #///////////////////////////////////////////////////////////////////////////////////////
@api.route('/myprofile/myspaces/<int:user_id>', methods=['GET'])
def get_myspaces(user_id):
    myspaces = User.query.filter_by(id=user_id).first()
    myspaces2 = Myspaces.query.filter_by(user_id=user_id).all()
    
    results= list(map(lambda item: item.serialize2(),myspaces2))
    # print(myspaces)
    print(results)
    # print(myspaces.serialize())
   
    response_body = {
    #    'message': 'OK'
        "results": results,
    }
   

    return jsonify(response_body), 200


@api.route('/myprofile/myspaces', methods=['POST'])
@jwt_required()
def post_my_spaces():
    user_id = request.json.get("user_id", None) 
    space_id = request.json.get("space_id", None) 

    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()

    if current_user != user.email:
        return jsonify({"msg":"Debes iniciar sesión"}), 401
  
    new_space = Myspaces(user_id=user_id, space_id=space_id)
    db.session.add(new_space)
    db.session.commit()
   
    response_body = {
       'message': 'Espacio guardado con exito'
    }
   

    return jsonify(response_body), 200



  # return jsonify('SI FUNCIONA MYSPACES DENTRO DE MY PROFILE :D'), 200

# #///////////////////////////////////////////////////////////////////////////////////////
# # AQUÍ VIENE EL Endpoint PARA MYREVIEWS DENTRO DE MYPROFILE DE UN USUARIO EN ESPECÍFICO
# #//////////////////////////////////////////////////////////////////////////////////////
    
@api.route('/myprofile/myreviews/<int:user_id>', methods=['GET'])
def get_myreviews(user_id):
    myreviews = User.query.filter_by(id=user_id).first()
    myreviews2 = Reviews.query.filter_by(user_id=user_id).all()
    
    results= list(map(lambda item: item.serialize2(),myreviews2))
    # print(myreviews)
    print(results)
    # print(myspaces.serialize())
   
    response_body = {
    #    'message': 'OK'
        "results": results,
    }
    return jsonify(response_body), 200






@api.route("/reviews/all/<int:user_id>", methods=['GET'])
def get_all_user_review(user_id):
    reviews = Reviews.query.filter_by(user_id=user_id).all()

    results = list(map(lambda item: item.serialize(),reviews))
    print(results)
    response_body = {

        "user_id": results[0]["user_id"],
        "reviews": results,
    }

    return jsonify(response_body), 200
    # return jsonify("ok"), 200




@api.route("/valid-token", methods=["GET"])
@jwt_required()
def valid_token():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    # Same as login, if the query brings nothing then it doesn't exist
    if user is None:
        return jsonify({"status":False}), 404
    # If user is correct then it shows the user's info
    response_body = {
        "status": True,
        "user": user.serialize()
        
    }
    return jsonify(response_body), 200