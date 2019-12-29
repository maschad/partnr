const PartnrGroup = artifacts.require('PartnrGroup');

require('chai').should();

contract('TestPartnrGroup', accounts => {
    const ballotOfficialName = "name";
    const proposal = "proposal";

    beforeEach(async () => {
        this.ballot = await PartnrGroup.new(ballotOfficialName, proposal);
    });

    describe('Ballot attributes', () => {
        it('Should have correct initialization', async () => {
            const name = await this.ballot.ballotOfficialName();
            const prop = await this.ballot.proposal();
            name.should.equal(ballotOfficialName);
            prop.should.equal(proposal);
        });
    });
});
