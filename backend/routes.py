from app import app, db
from flask import request, jsonify
from models import Clothing

#(READ) GetAll clothes
@app.route("/api/clothing", methods=["GET"])
def get_clothing():
    clothes = Clothing.query.all()
    result = [cloth.to_json() for cloth in clothes]
    return jsonify(result)

#CREATE a cloth
@app.route("/api/clothing", methods=["POST"])
def create_cloth():
    try:
        data = request.json

        required_fields = ["name", "description", "size", "price"]
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error":f'missing required field: {field}'}), 400

        name = data.get("name")
        description = data.get("description")
        size = data.get("size")
        price = data.get("price")
        gender = "male"
        
        #placeholder here, find clothing image
        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
        else:
            img_url = None
        
        new_cloth = Clothing(name=name, description=description, size=size, price=price, gender=gender, img_url=img_url)

        db.session.add(new_cloth)
        db.session.commit()

        return jsonify(new_cloth.to_json()), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
    
#DELETE a clothing based on its ID
@app.route("/api/clothing/<int:id>", methods=["DELETE"])
def delete_clothing(id):
    try:
        clothing = Clothing.query.get(id)
        if clothing is None:
            return jsonify({"error":"clothing not found"}), 404
        
        db.session.delete(clothing)
        db.session.commit()
        return jsonify({"msg":"clothing deleted successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
    
#UPDATE a clothing
@app.route("/api/clothing/<int:id>", methods=["PATCH"])
def update_clothing(id):
    try:
        clothing = Clothing.query.get(id)
        if clothing is None:
            return jsonify({"error":"clothing not found"}), 404
        
        data = request.json

        #update the clothing with the new value if provided or actual value if not provided
        clothing.name = data.get("name", clothing.name)
        clothing.description = data.get("description", clothing.description)
        clothing.size = data.get("size", clothing.size)
        clothing.price = data.get("price", clothing.price)
        clothing.gender = data.get("gender", clothing.gender)

        db.session.commit()
        return jsonify(clothing.to_json()), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500