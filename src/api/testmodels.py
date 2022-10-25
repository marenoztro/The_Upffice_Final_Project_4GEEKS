from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


#////////////////////////////////////////////////////////////////////////////// UNO A MUCHOS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




#/////////////////////////////////////////////
#             MODEL USER
#/////////////////////////////////////////////

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    reviews = db.relationship('Reviews', backref='user', lazy=True) 
    myspaces = db.relationship('Myspaces', backref='user', lazy=True) 

    def __repr__(self):
        return '<User %r>' % self.id
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
   




#/////////////////////////////////////////////
#             MODEL SPACES
#/////////////////////////////////////////////
class Spaces(db.Model):                                                                                                                                                                 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    location = db.Column(db.String(120), unique=False, nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=False)
    amenities = db.Column(db.String(200), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    images = db.Column(db.String (400), unique=False, nullable=True)

    user_id = db/Column(db.Integer, db.ForeignKey('user.id'))

    reviews = db.relationship('Reviews', backref='spaces', lazy=True) 
    myspaces = db.relationship('Myspaces', backref='spaces', lazy=True) 


    def __repr__(self):
        return '<Spaces %r>' % self.id
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "location": self.location,
            "category": self.category,
            "description": self.description,
            "amenities": self.amenities,
            "price": self.price,
            "images": self.images,
    





#/////////////////////////////////////////////
#             MODEL REVIEWS
#/////////////////////////////////////////////
class Reviews(db.Model):                                                                                                                                                                            
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(1000), unique=True, nullable=False)
    
    user_id = db/Column(db.Integer, db.ForeignKey('user.id'))
    space_id = db/Column(db.Integer, db.ForeignKey('space.id'))
    

    def __repr__(self):
        return '<User %r>' % self.id
    def serialize(self):
        return {
            "id": self.id,
            "message": self.message,






#/////////////////////////////////////////////
#             MODEL MY SPACES
#/////////////////////////////////////////////
class Reviews(db.Model):                                                                                                            
    id = db.Column(db.Integer, primary_key=True)
    
    user_id = db/Column(db.Integer, db.ForeignKey('user.id'))
    space_id = db/Column(db.Integer, db.ForeignKey('space.id'))
    

    def __repr__(self):
        return '<User %r>' % self.id
    def serialize(self):
        return {
            "user_id": self.user_id,
            "space_id": self.space_id,














































#/////////////////////////////////////////////////////////////  MUCHOS A MUCHOS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(1000), unique=True, nullable=False)
    favorites=db.relationship('Favorites' backref='user',lazy=True)


    def __repr__(self):
        return '<User %r>' % self.id
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach






#/////////////////////////////////////////////
#             TABLA DE RELACIÓN
#/////////////////////////////////////////////

user_spaces_reviews_table = db.Table(
    "user_spaces_reviews",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey("user.id"), primary_key=True),
    db.Column("spaces_id", db.Integer, db.ForeignKey("spaces.id"), primary_key=True)
)



#/////////////////////////////////////////////
#             MODEL USER
#/////////////////////////////////////////////

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
    user = db.relationship("User", secondary=user_spaces_reviews_table, back_populates='spaces')




#/////////////////////////////////////////////
#             MODEL SPACES
#/////////////////////////////////////////////
class Spaces(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    location = db.Column(db.String(120), unique=False, nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=False)
    amenities = db.Column(db.String(200), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    images = db.Column(db.String (400), unique=False, nullable=True)
    
    def __repr__(self):
        return '<Spaces %r>' % self.id
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "location": self.location,
            "category": self.category,
            "description": self.description,
            "amenities": self.amenities,
            "price": self.price,
            "images": self.images,
    spaces = db.relationship("Spaces", secondary=user_spaces_reviews_table, back_populates='user')



