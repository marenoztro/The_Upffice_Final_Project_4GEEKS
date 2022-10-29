from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

#/////////////////////////////////////////////
#             MODEL USER
#/////////////////////////////////////////////

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    spaces = db.relationship('Spaces', backref='user', lazy=True) 
    reviews = db.relationship('Reviews', backref='user', lazy=True) 
    myspaces = db.relationship('Myspaces', backref='user', lazy=True) 

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "myspaces": list(map(lambda item: item.serialize2(), self.myspaces))
            # do not serialize the password, its a security breach
        }




#/////////////////////////////////////////////
#             MODEL SPACES
#/////////////////////////////////////////////
class Spaces(db.Model):                                                                                                                                                                 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    location = db.Column(db.String(120), unique=False, nullable=False)
    space_type = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(200), unique=False, nullable=True)
    amenities = db.Column(db.String(200), unique=False, nullable=True)
    price = db.Column(db.Integer, unique=False, nullable=False)
    images = db.Column(db.String (400), unique=False, nullable=True)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    reviews = db.relationship('Reviews', backref='spaces', lazy=True) 
    myspaces = db.relationship('Myspaces', backref='spaces', lazy=True) 


    def __repr__(self):
        return '<Spaces %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "location": self.location,
            "space_type": self.space_type,
            "description": self.description,
            "amenities": self.amenities,
            "price": self.price,
            "images": self.images,
}


#/////////////////////////////////////////////
#             MODEL REVIEWS
# #/////////////////////////////////////////////
class Reviews(db.Model):                                                                                                                                                                            
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(1000), unique=True, nullable=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    space_id = db.Column(db.Integer, db.ForeignKey('spaces.id'))
    

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "message": self.message
             }




#/////////////////////////////////////////////
#             MODEL MY SPACES
#/////////////////////////////////////////////
class Myspaces(db.Model):                                                                                                            
    id = db.Column(db.Integer, primary_key=True)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    space_id = db.Column(db.Integer, db.ForeignKey('spaces.id'))
    

    

    def __repr__(self):
        return '<Myspaces %r>' % self.id

    def serialize(self):
        return {
            "user_id": self.user_id,
            "space_id": self.space_id,
            # "myspaces": list(map(lambda item: item.serialize(), self.myspaces))
             }

    def serialize2(self):
       spacex = Spaces.query.filter_by(id=self.space_id).first()

       return {
            "space": spacex.serialize(),
             }






























#/////////////////////////////////////////////
#             MODEL SPACES
#/////////////////////////////////////////////
# class Spaces(db.Model):                                                                                                                                                                 
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), unique=False, nullable=False)
#     location = db.Column(db.String(120), unique=False, nullable=False)
#     category = db.Column(db.String(120), unique=False, nullable=False)
#     description = db.Column(db.String(200), unique=False, nullable=False)
#     amenities = db.Column(db.String(200), unique=False, nullable=False)
#     price = db.Column(db.Integer, unique=False, nullable=False)
#     images = db.Column(db.String (400), unique=False, nullable=True)

#     user_id = db/Column(db.Integer, db.ForeignKey('user.id'))

#     reviews = db.relationship('Reviews', backref='spaces', lazy=True) 
#     myspaces = db.relationship('Myspaces', backref='spaces', lazy=True) 


#     def __repr__(self):
#         return '<Spaces %r>' % self.id
#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "location": self.location,
#             "category": self.category,
#             "description": self.description,
#             "amenities": self.amenities,
#             "price": self.price,
#             "images": self.images,
    


# # Spaces con sólo 3 campos para probar que funcione
# class Spaces(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), unique=False, nullable=False)
#     description = db.Column(db.String(200), unique=False, nullable=False)
#     images = db.Column(db.String (400), unique=False, nullable=True)


#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

#     reviews = db.relationship('Reviews', backref='spaces', lazy=True) 
#     myspaces = db.relationship('Myspaces', backref='spaces', lazy=True) 
    
    
#     def __repr__(self):
#         return '<Spaces %r>' % self.id
        
#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "description": self.description,
#             "images": self.images,
#              }