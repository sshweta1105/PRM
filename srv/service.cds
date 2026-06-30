using { partner as partner_db } from '../db/schema';

@protocol: ['odata-v4']

service PartnerService @(path : '/PRM') {
    entity Partner as projection on partner_db.Partner;
    entity Contact as projection on partner_db.Contact;
    entity SAPContact as projection on partner_db.SAPContact;

    function getPartnerData(ID : UUID) returns array of Partner;
}

