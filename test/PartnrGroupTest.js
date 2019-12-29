const PartnrGroup = artifacts.require('PartnrGroup');

require('chai').should();

contract('TestPartnrGroup', accounts => {
    const ballotOfficialName = "name";
    const proposal = "proposal";

    beforeEach(async () => {
        this.ballot = await PartnrGroup.new(ballotOfficialName, proposal);
    });

    describe('Ballot attributes', () => {
        it('Should have correct name', async () => {
            const name = await this.ballot.ballotOfficialName();
            name.should.equal(ballotOfficialName);
        });
    });
});
