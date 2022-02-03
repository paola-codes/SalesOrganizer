/*
For flux.js
    store:
        To filter deals:
            wonDeals: [],
            lostDeals: [],
            dealsbyContact: [],
            dealsbyDealOwner: [],
        To filter contacts:
            contactByName: [],
            contactByEmail: [],
    actions:
        For Deals:
            //Get All Won Deals
            getWonDeals: () => {
                fetch(`${getStore().backEndUrl}/api/deal/won`)
                .then((response) => response.json())
                .then((data) => setStore({ wonDeals: data }))
                .catch((err) => console.error("Error:", err));
            },
            //Get All Lost Deals
            getLostDeals: () => {
                fetch(`${getStore().backEndUrl}/api/deal/lost`)
                .then((response) => response.json())
                .then((data) => setStore({ lostDeals: data }))
                .catch((err) => console.error("Error:", err));
            },
            //Get Deals by Contact
            getDealsbyContact: (contact_id) => {
                fetch(`${getStore().backEndUrl}/api/deal/contact_id/${contact_id}`)
                .then((response) => response.json())
                .then((data) => setStore({ dealsbyContact: data }))
                .catch((err) => console.error("Error:", err));
            },
            //Get Deals by Deal Owner
            getDealsbyDealOwner: (deal_owner) => {
                fetch(`${getStore().backEndUrl}/api/deal/deal_owner/${deal_owner}`)
                .then((response) => response.json())
                .then((data) => setStore({ dealsbyDealOwner: data }))
                .catch((err) => console.error("Error:", err));
            },
        For Contacts:
            //Get Contact by Name
            getContactByName: (full_name) => {
                fetch(`${getStore().backEndUrl}/api/contact/name/${full_name}`)
                .then((response) => response.json())
                .then((data) => setStore({ contactByName: data }))
                .catch((err) => console.error("Error:", err));
            },
            //Get Contact by Email
            getContactByEmail: (email) => {
                fetch(`${getStore().backEndUrl}/api/contact/email/${email}`)
                .then((response) => response.json())
                .then((data) => setStore({ contactByEmail: data }))
                .catch((err) => console.error("Error:", err));
            },

For routes.py
    For deals:
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
        
        #Get Won Deals
        @api.route('/deal/won', methods=['GET'])
        def get_won_deals():
            
            deals_query = Deal.query.filter_by(status="Won")
            won_deals = list(map(lambda x: x.serialize(), deals_query))

            return jsonify(
                won_deals
            ), 200

        #Get Lost Deals
        @api.route('/deal/lost', methods=['GET'])
        def get_lost_deals():
            
            deals_query = Deal.query.filter_by(status="Lost")
            lost_deals = list(map(lambda x: x.serialize(), deals_query))

            return jsonify(
                lost_deals
            ), 200

    For contacts:
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

*/