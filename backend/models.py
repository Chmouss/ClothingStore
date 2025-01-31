from app import db

class Clothing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    size = db.Column(db.String(100), nullable=False)
    img_url = db.Column(db.String(200), nullable=True)
    price = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(100), nullable=False)


    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "size": self.size,
            "imgUrl": self.img_url,
            "price": self.price,
            "gender": self.gender
        }

