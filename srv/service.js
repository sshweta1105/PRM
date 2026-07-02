const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { Partner, Contact, SAPContact } = this.entities;

    this.before('CREATE', 'Partner', async (req) => {
        const tx = cds.transaction(req);
        const result = await tx.run(SELECT.one`max(Partner_id) as Partner_id`.from(Partner));
        const result1 = await tx.run(SELECT.one`max(prm_id) as prm_id`.from(Partner));
        const result2 = await tx.run(SELECT.one`max(crm_id) as crm_id`.from(Partner));
        req.data.Partner_id = String(Number(result?.Partner_id || 1000000000) + 1);
        req.data.prm_id = String(Number(result1?.prm_id || 3000000000) + 1);
        req.data.crm_id = String(Number(result2?.crm_id || 4000000000) + 1);
        req.data.status_code = 'ACT';

        if (req.data.Partner_id) {
            const pgiResult = await tx.run(SELECT.one .from(Partner).where({ Partner_id: req.data.Partner_id }));
            req.data.pgi = pgiResult ? pgiResult.pgi : null;
            req.data.proposedPgi = pgiResult ? pgiResult.proposedPgi : null;
        }
        
      
    });

})