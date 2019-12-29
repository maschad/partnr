const partnrGroup = require('../contracts/PartnrGroup.sol');

contract('TestPartnrGroup', () => {

    it("Should initialize the group", async () => {
        ballotOfficialName = "Vote for new member";
        proposal = "Add new member";
        let group = await partnrGroup.new(ballotOfficialName, proposal);
        
        assert.equal(group.proposal, proposal);
        assert.equal(group.ballotOfficialName, ballotOfficialName);
    })

});
