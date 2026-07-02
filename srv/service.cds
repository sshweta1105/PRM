using { partner as partner_db } from '../db/schema';

@protocol: ['odata-v4']

service PartnerService {
    entity Partner as projection on partner_db.Partner;
    entity Contact as projection on partner_db.Contact;
    entity SAPContact as projection on partner_db.SAPContact;
    entity PartnerStatus as projection on partner_db.PartnerStatus;

    function getPartnerData(ID : UUID) returns array of Partner;
}

