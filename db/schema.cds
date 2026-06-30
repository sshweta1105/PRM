
using { managed, cuid } from '@sap/cds/common';

namespace partner;

entity Partner : managed, cuid {
    name: String(100);
    email: String(100);
    phone: String(20);
    status : String(20) default 'prospective';
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