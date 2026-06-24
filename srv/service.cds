using { partner.name as db } from '../db/schema';

service PartnerService {
    entity Partners as projection on db.Partner;
}
