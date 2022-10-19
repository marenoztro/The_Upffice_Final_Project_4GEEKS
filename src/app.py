"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os

#OJO AQUÍ IMPORTÉ LOS ARCHIVOS DE LA DOCUMENTACIÓN DE CLOUDINARY... ESTO LUEGO DE HACER EL pip install cloudinary
import cloudinary
import cloudinary.uploader
import cloudinary.api


from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

from flask_jwt_extended import JWTManager




############################################################################
# OJO AQUÍ IMPORTÉ LOS ELEMENTOS DE LA DOCUMENTACIÓN DE FIREBASE
# IMPORTO EL administrador de firebase Y LAS credenciales de firebase
############################################################################
import firebase_admin
from firebase_admin import credentials





#OJO AQUÍ PEGUÉ LA CONFIGURACIÓN QUE BRINDA CLOUDINARY 
cloudinary.config( 
  cloud_name = "marenoztro", 
  api_key = "289591917132747", 
  api_secret = "FLse2qJ_6AP1v7FU7qviLmCK6hI" 
)


#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

app.config["JWT_SECRET_KEY"] = "palabra-secreta-para-configuracion"  # Change this!
jwt = JWTManager(app)



# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response



############################################################################
# OJO AQUÍ CREO LAS CREDECIALES E INICIALIZO LA APLICACIÓN DE firebase
# SE CREA EL CERTIFICADO DE CREDENCIALES Y LE PASAMOS EL ARCHIVO fb_credentials.json
# QUE SE DESCARGÓ DE FB->Configuración del Proyecto->Cuentas de Servicio->Generar nueva clave privada
# LUEGO SIMPLEMENTE 
############################################################################

cred=credentials.Certificate("fb_credentials.json")
firebase_admin.initialize_app(cred)

#--------------------------IMPORTANTE----------------------------------
# A PARTIR DE AQUÍ TODOS LOS SERVICIOS DE fire base ESTÁN INSTALADOS EN MI PROYECTO




# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)