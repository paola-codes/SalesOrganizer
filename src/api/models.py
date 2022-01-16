from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=True)
    phone = db.Column(db.String(120), unique=False, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "phone": self.phone,
            # do not serialize the password, its a security breach
        }

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #Contact Body Data
    full_name = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=False, nullable=True)
    phone = db.Column(db.String(120), unique=False, nullable=True)
    #Relationships
    deal = db.relationship('Deal', backref='contact')
    
    def __repr__(self):
        return '<Contact %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "phone": self.phone,
            "deal": [deal.serialize() for deal in self.deal],
            # do not serialize the password, its a security breach
        }

class Deal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #Deal Body Data
    deal_title = db.Column(db.String(80), unique=False, nullable=True)
    description = db.Column(db.String(80), unique=False, nullable=True)
    deal_owner = db.Column(db.String(80), unique=False, nullable=True)
    deal_value = db.Column(db.String(80), unique=False, nullable=True)
    client_name = db.Column(db.String(80), unique=False, nullable=True)
    expected_product = db.Column(db.String(80), unique=False, nullable=True)
    status = db.Column(db.String(80), unique=False, nullable=True)
    loss_reasons = db.Column(db.String(80), unique=False, nullable=True)
    win_reasons = db.Column(db.String(80), unique=False, nullable=True)
    notes = db.Column(db.String(80), unique=False, nullable=True)
    estimated_close_date = db.Column(db.String(80), unique=False, nullable=True)
    #Foreign Keys
    contact_id = db.Column(db.Integer, db.ForeignKey('contact.id'), unique=False, nullable=True)

    def __repr__(self):
        return '<Deal %r>' % self.client_name # add more representations

    def serialize(self):
        return {
            "id": self.id,
            "deal_title": self.deal_title,
            "description": self.description,
            "deal_owner": self.deal_owner,
            "deal_value": self.deal_value,
            "client_name": self.client_name,
            "expected_product": self.expected_product,
            "status": self.status,
            "loss_reasons": self.loss_reasons,
            "win_reasons": self.win_reasons,
            "notes": self.notes,
            "estimated_close_date": self.estimated_close_date,
        }

