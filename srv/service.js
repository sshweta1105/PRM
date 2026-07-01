const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { Partner, Contact, SAPContact } = this.entities;

    this.before('CREATE', 'Partner', async (req) => {
        const tx = cds.transaction(req);
        const result = await tx.run(SELECT.one `max(Partner_id) as Partner_id`.from(Partner));
        req.data.Partner_id = Number(result?.Partner_id || 1000000000) + 1;
    });

})