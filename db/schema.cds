
using { managed, cuid } from '@sap/cds/common';

namespace partner.name;

entity Partner : managed, cuid {
    name: String(100);
    email: String(100);
    phone: String(20);
}