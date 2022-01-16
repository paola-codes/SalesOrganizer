"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, deal, jsonify, url_for, Blueprint
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

#Get User by ID
@api.route('/user/<id>', methods=['GET'])
def get_user_by_id(id):

    user_query = User.query.get(id)

    return jsonify(
        user_query.serialize()
    ), 200

#Update User Profile
@api.route('/user/<id>', methods=['PUT'])
def update_user_profile(id):
    
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

#Get All Deals By Contact
@api.route('/deal/contact_id/<contact_id>', methods=['GET'])
def get_deals_by_contact(contact_id):

    deals_query = Deal.query.filter_by(contact_id=contact_id)
    deals_by_contact = list(map(lambda x: x.serialize(), deals_query))

    return jsonify(
        deals_by_contact
    ), 200

#Get All Deals By Deal Owner
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

#Get Deal by ID
@api.route('/deal/<id>', methods=['GET'])
def get_deal_by_id(id):
    
    deals_query = Deal.query.filter_by(id=id)
    deal_by_id = list(map(lambda x: x.serialize(), deal_by_id))

    return jsonify(
        deal_by_id
    ), 200

#Post New Deal
@api.route('/deal', methods=['POST'])
def add_new_deal():

    body = request.get_json()

    new_deal = Deal(
        deal_owner=body["deal_owner"], 
        deal_value=body["deal_value"], 
        client_name=body["client_name"], 
        expected_product=body["expected_product"], 
        loss_reasons=""
        win_reasons=""
        notes=""
        estimated_close_date=body["estimated_close_date"],
        contact_id=body["contact_id"]
    )

    db.session.add(new_deal)
    db.session.commit()

    deals_query = Deal.query.all()
    all_deals = list(map(lambda x: x.serialize(), deals_query))
    return jsonify(all_deals), 200

#Update Deal Details
@api.route('/deal/details/<id>', methods=['PUT'])
def update_deal_details(id):

    my_deal = Deal.query.get(id)

    body = request.get_json()

    my_deal.deal_title = body["deal_title"]
    my_deal.description = body["description"]
    my_deal.deal_owner = body["deal_owner"]
    my_deal.deal_value = body["deal_value"]
    my_deal.client_name = body["client_name"]
    my_deal.expected_product = body["expected_product"]
    my_deal.status = body["status"]
    my_deal.loss_reasons = body["loss_reasons"]
    my_deal.win_reasons = body["win_reasons"]
    my_deal.notes = body["notes"]
    my_deal.estimated_close_date = body["estimated_close_date"]

    db.session.commit()

    deals_query = Deal.query.get(id)

    if deals_query.status == body["status"]:
        return jsonify(deals_query.serialize()), 200
    raise APIException("Update Failed")

#Update Deal as Won
@api.route('/deal/won/<id>', methods=['PUT'])
def won_deal(id):
    
    my_deal = Deal.query.get(id)

    body = request.get_json()

    my_deal.status = body["status"]

    db.session.commit()

    deals_query = Deal.query.get(id)

    if deals_query.status == body["status"]:
        return jsonify(deals_query.serialize()), 200
    raise APIException("Update Failed")

#Update Deal as Lost
@api.route('/deal/lost/<id>', methods=['PUT'])
def lost_deal(id):
    
    my_deal = Deal.query.get(id)

    body = request.get_json()

    my_deal.status = body["status"]

    db.session.commit()

    deals_query = Deal.query.get(id)

    if deals_query.status == body["status"]:
        return jsonify(deals_query.serialize()), 200
    raise APIException("Update Failed")

#Get Won Deals
@api.route('/deal/won', methods=['GET'])
def get_won_deals():
    
    deals_query = Deal.query.filter_by(status="won")
    won_deals = list(map(lambda x: x.serialize(), deals_query))

    return jsonify(
        won_deals
    ), 200

#Get Lost Deals
@api.route('/deal/lost', methods=['GET'])
def get_lost_deals():
    
    deals_query = Deal.query.filter_by(status="lost")
    lost_deals = list(map(lambda x: x.serialize(), deals_query))

    return jsonify(
        lost_deals
    ), 200

#Delete Deal
@api.route('/deal/<id>', methods=['DELETE'])
def delete_deal(id):

    body = request.get_json()
    
    deal = Deal.query.get(id)

    db.session.delete(deal)
    db.session.commit()

    deals_query = Deal.query.all()
    all_deals = list(map(lambda x: x.serialize(), deals_query))
    return jsonify(all_deals), 200
    
#Contact Methods ------------------------------------------------------------

#Get All Contacts
@api.route('/contact', methods=['GET'])
def get_all_contacts():
    
    contacts_query = Contact.query.all()
    all_contacts = list(map(lambda x: x.serialize(), contacts_query))

    return jsonify(
        all_contacts
    ), 200

#Get Contact by ID
@api.route('/contact/<id>', methods=['GET'])
def get_contact_by_id(id):
    
    contacts_query = Contact.query.filter_by(id=id)
    contact_by_id = list(map(lambda x: x.serialize(), contact_by_id))

    return jsonify(
        contact_by_id
    ), 200

#Get Contact by Email
@api.route('/contact/email/<email>', methods=['GET'])
def get_contact_by_email(email):
    
    contacts_query = Contact.query.filter_by(email=email)
    contact_by_email = list(map(lambda x: x.serialize(), contact_by_id))

    return jsonify(
        contact_by_email
    ), 200

#Get Contact by Name
@api.route('/contact/name/<full_name>', methods=['GET'])
def get_contact_by_name(full_name):
    
    contacts_query = Contact.query.filter_by(full_name=full_name)
    contact_by_name = list(map(lambda x: x.serialize(), contact_by_name))

    return jsonify(
        contact_by_name
    ), 200

#Post New Contact
@api.route('/contact', methods=['POST'])
def add_new_contact():

    body = request.get_json()

    new_contact = Contact(
        full_name=body["full_name"],
        email=body["email"],
        phone=body["phone"]
    )

    db.session.add(new_contact)
    db.session.commit()

    contacts_query = Contact.query.all()
    all_contacts = list(map(lambda x: x.serialize(), contacts_query))
    return jsonify(all_contacts), 200

#Update Contact Details
@api.route('/contact/details/<id>', methods=['PUT'])
def update_contact_details(id):

    my_contact = Contact.query.get(id)

    body = request.get_json()

    my_contact.full_name = body["full_name"]
    my_contact.email = body["email"]
    my_contact.phone = body["phone"]

    db.session.commit()

    contacts_query = Contact.query.get(id)

    if contacts_query.full_name == body["full_name"]:
        return jsonify(contacts_query.serialize()), 200
    raise APIException("Update Failed")

#Delete Contact
@api.route('/contact/<id>', methods=['DELETE'])
def delete_contact(id):
    
    my_contact =  Contact.query.get(id)

    body = request.get_json()

    db.session.delete(my_contact)
    db.session.commit()

    contacts_query = Contact.query.all()
    all_contacts = list(map(lambda x: x.serialize(), contacts_query))
    return jsonify(all_contacts), 200
