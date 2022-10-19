from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


# Spaces con sólo 3 campos para probar que funcione
class Spaces(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=False)
    images = db.Column(db.String (400), unique=False, nullable=True)  
   
    def __repr__(self):
        return '<Spaces %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "images": self.images,
             }

   



# Spaces con todos los campos para el formulario

# class Spaces(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), unique=True, nullable=False)
#     # location = db.Column(db.String(120), unique=True, nullable=False)
#     # category = db.Column(db.String(120), unique=True, nullable=False)
#     description = db.Column(db.String(200), unique=False, nullable=False)
#     # amenities = db.Column(db.String(200), unique=False, nullable=False)
#     images = db.Column(db.String (400), unique=False, nullable=True)  
   
#     def __repr__(self):
#         return '<Spaces %r>' % self.id

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             # "location": self.location,
#             # "category": self.category,
#             "description": self.description,
#             # "amenities": self.amenities,
#             "images": self.images,
#              }







   
   
    # images= models.FileField(upload_to='images/', null=True, verbose_name="")

    # def __str__(self):
    #     return self.name + ": " + str(self.imagefile)


    # def __repr__(self):
    #     return '<Spaces %r>' % self.id

    # def serialize(self):
    #     return {
    #         "id": self.id,
    #         "name": self.name,
    #         "location": self.location,
    #         "category": self.category,
    #         "description": self.description,
    #         "amenities": self.amenities,
    #         "images": self.images,
    #     }








    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            # do not serialize the password, its a security breach
        }
