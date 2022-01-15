"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Contact, Deal
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


#Initial GET method
@api.route('/user', methods=['GET'])
def get_users():

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))

    return jsonify(
        all_users
    ), 200

#SignUp and Login Methods ---------------------------------------------------

#Sign Up (Adding a new user)
@api.route('/user', methods=['POST'])
def add_new_user():

    body = request.get_json()

    new_user = User(
        full_name=body["full_name"], 
        email=body["email"], 
        password=body["password"], 
        phone=body["phone"],
    )

    db.session.add(new_user)
    db.session.commit()

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))
    return jsonify(all_users), 200

#Login (Validating Existing User)
@api.route('/login', methods=['POST'])
def user_login():

    body = request.get_json()

    user = User.query.filter_by(email = body["email"], password = body["password"]).first()

    if user == None:
        return "email or password is incorrect", 400
    return jsonify(
        user.serialize()
    ), 200

#User Methods ---------------------------------------------------------------

#Get User by Email
@api.route('/user/<id>', methods=['GET'])
def get_specific_user(id):

    user_query = User.query.get(id)

    return jsonify(
        user_query.serialize()
    ), 200

#Update User Profile
@api.route('/user/<id>', methods=['PUT'])
def change_client_profile(id):
    
    my_profile = User.query.get(id)

    body = request.get_json()

    my_profile.full_name = body["full_name"]
    my_profile.email = body["email"]
    my_profile.phone = body["phone"]

    db.session.commit()

    profile_query = User.query.get(id)

    if profile_query.full_name == body["full_name"]:
        return jsonify(profile_query.serialize()), 200
    raise APIException("Update Failed")

#Deal Methods ------------------------------------------------------------

#Get All Deals from Specific Contact
@api.route('/deal/contact_id/<contact_id>', methods=['GET'])
def get_deals_by_contact(contact_id):

    deals_query = Deal.query.filter_by(contact_id=contact_id)
    deals_by_contact = list(map(lambda x: x.serialize(), deals_query))

    return jsonify(
        deals_by_contact
    ), 200

#Get All Deals from Specific Deal Owner
@api.route('/deal/deal_owner/<deal_owner>', methods=['GET'])
def get_deals_by_deal_owner(deal_owner):

    deals_query = Deal.query.filter_by(deal_owner=deal_owner)
    deals_by_deal_owner = list(map(lambda x: x.serialize(), deals_query))

    return jsonify(
        deals_by_deal_owner
    ), 200

#Get All Deals
@api.route('/deal', methods=['GET'])
def get_all_deals():
    
    deals_query = Deal.query.all()
    all_deals = list(map(lambda x: x.serialize(), deals_query))

    return jsonify(
        all_deals
    ), 200

#Post New Deal
@api.route('/deal', methods=['POST'])
def new_deal():

    body = request.get_json()

    new_deal = Deal(
        deal_owner=body["deal_owner"], 
        deal_value=body["deal_value"], 
        client_name=body["client_name"], 
        expected_product=body["expected_product"], 
        loss_reasons=body["loss_reasons"],
        win_reasons=body["win_reasons"],
        notes=body["notes"],
        estimated_close_date=body["estimated_close_date"],
        contact_id=body["contact_id"]
    )

    db.session.add(new_deal)
    db.session.commit()

    deals_query = Deal.query.all()
    all_deals = list(map(lambda x: x.serialize(), deals_query))
    return jsonify(all_deals), 200

#Delete Vehicle
@api.route('/vehicle/<id>', methods=['DELETE'])
def delete_vehicle(id):

    body = request.get_json()
    
    vehicle =  Vehicle.query.get(id)

    db.session.delete(vehicle)
    db.session.commit()

    vehicles_query = Vehicle.query.all()
    all_vehicles = list(map(lambda x: x.serialize(), vehicles_query))
    return jsonify(all_vehicles), 200
    
#Request Methods ------------------------------------------------------------

#Get All Requests (Happens in TruckerRequestsList.js)
@api.route('/request', methods=['GET'])
def get_requests():
    
    requests_query = Request.query.all()
    all_requests = list(map(lambda x: x.serialize(), requests_query))

    return jsonify(
        all_requests
    ), 200

#Get Requests of Specific User
@api.route('/request/user/client/<user_id>', methods=['GET'])
def get_user_requests(user_id):
    
    requests_query = Request.query.filter_by(user_id=user_id)
    user_requests = list(map(lambda x: x.serialize(), requests_query))

    return jsonify(
        user_requests
    ), 200

#Get Trucker Accepted Requests (Happens in TruckerRequestsList.js)
@api.route('/request/user/trucker/<user_id>', methods=['GET'])
def get_trucker_requests(user_id):
    
    requests_query = Request.query.filter_by(user_id=user_id)
    accepted_request = list(map(lambda x: x.serialize(), requests_query))

    return jsonify(
        accepted_request
    ), 200

#Post New Request
@api.route('/request', methods=['POST'])
def add_request():

    body = request.get_json()

    new_request = Request(
        zip_code=body["zip_code"], 
        service=body["service"], 
        vehicle=body["vehicle"],
        completed="",
        finished="",
        trucker_id="",
        trucker_name="",
        trucker_phone="",
        trucker_rating="",
        user_id=body["user_id"],
        client_name=body["client_name"],
        client_phone=body["client_phone"],
    )

    db.session.add(new_request)
    db.session.commit()

    requests_query = Request.query.all()
    all_requests = list(map(lambda x: x.serialize(), requests_query))
    return jsonify(all_requests), 200

#Delete Request
@api.route('/request/<id>', methods=['DELETE'])
def delete_request(id):
    
    my_request =  Request.query.get(id)

    body = request.get_json()

    db.session.delete(my_request)
    db.session.commit()

    requests_query = Request.query.all()
    all_requests = list(map(lambda x: x.serialize(), requests_query))
    return jsonify(all_requests), 200

#Trucker Service Management Methods -----------------------------------------

#Update Request as Accepted (Happens in TruckerRequestsList.js)
@api.route('/request/accepted/<id>', methods=['PUT'])
def accept_request(id):
    
    my_request = Request.query.get(id)

    body = request.get_json()

    my_request.trucker_id = body["trucker_id"]
    my_request.trucker_name = body["trucker_name"]
    my_request.trucker_phone = body["trucker_phone"]

    db.session.commit()

    request_query = Request.query.get(id)

    if request_query.trucker_id == body["trucker_id"]:
        return jsonify(request_query.serialize()), 200
    raise APIException("Update Failed")

#Update Request as Completed (Happens in TruckerServiceManagement.js)
@api.route('/request/completed/<id>', methods=['PUT'])
def complete_request(id):

    my_request = Request.query.get(id)

    body = request.get_json()

    my_request.completed = body["completed"]

    db.session.commit()

    request_query = Request.query.get(id)

    if request_query.completed == body["completed"]:
        return jsonify(request_query.serialize()), 200
    raise APIException("Update Failed")

#Update Request as Finished
@api.route('/request/finished/<id>', methods=['PUT'])
def finish_request(id):

    my_request = Request.query.get(id)

    body = request.get_json()

    my_request.finished = body["finished"]

    db.session.commit()

    request_query = Request.query.get(id)

    if request_query.finished == body["finished"]:
        return jsonify(request_query.serialize()), 200
    raise APIException("Update Failed")