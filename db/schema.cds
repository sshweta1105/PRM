
using { managed, cuid } from '@sap/cds/common';

namespace partner;

entity PartnerStatus {
    Key code: String(10);
    Value: String(100);
}

entity vendorMaster{
    Key Partner_id: String(20);
    vendor : String(20);
}

entity complianceMaster{
    Key Partner_id: String(20);
    dueDiligence_valid : String(5);
    dueDiligence_inprogress : String(5);
    suspended : String(5);
    discontinued : String(5);
    blocklisted : String(5);
}
entity addressMaster{
    Key Partner_id: String(20);
    Key addressType : String(20);
    street : String(100);
    city : String(50);
    state : String(50);
    country : String(50);
    postal_code : String(20);
}

entity pga{
    Key Partner_id: String(20);
    pgi : String(10);
    proposedPgi : String(10);
    country : String(10);
    GPASigned : String(5);

}

entity Partner : managed, cuid {
    Partner_id : String(20);
    name: String(100);
    prm_id : String(10);
    crm_id : String(10);
    vendor : Association to vendorMaster on vendor.Partner_id = $self.Partner_id;
    partner_region : String(20);
    sap_region : String(20);
    territory : String(20);
    program : String(20);
    level : String(20);
    program_info : String(100);
    pgi : String(10);
    proposedPgi : String(10);
    email: String(100);
    phone: String(20);
    status : Association to PartnerStatus;
}

entity Contact : managed, cuid {
    name: String(100);
    email: String(100);
    phone: String(20);
    partner: Association to Partner;
}

entity SAPContact : managed, cuid {
    name: String(100);
    email: String(100);
    phone: String(20);
    partner: Association to Partner;
    contact: Association to Contact;
}