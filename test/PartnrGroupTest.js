const PartnrGroup = artifacts.require('PartnrGroup');

require('chai').should();
const truffleAssert = require('truffle-assertions');

contract('TestPartnrGroup', accounts => {
    const ballotOfficialName = "name";
    const proposal = "proposal";

    beforeEach(async() => {
        this.ballot = await PartnrGroup.new(ballotOfficialName, proposal);
    });

    describe('Ballot attributes', () => {
        it('Should have correct initialization', async() => {
            const name = await this.ballot.ballotOfficialName();
            const prop = await this.ballot.proposal();
            name.should.equal(ballotOfficialName);
            prop.should.equal(proposal);
        });

        it('Should update the total amount of voters', async() => {
            const addressToAdd = accounts[1];
            const voterName = "John";

            const voterAddedTx = await this.ballot.addVoter(addressToAdd, voterName);
            const totalVoters = await this.ballot.totalVoter();

            // truffleAssert.eventEmitted(voterAddedTx, 'voterAdded', (ev) => {
            //     return ev._voterAddress === addressToAdd;
            // });

            totalVoters.toNumber().should.equal(1);

        })

        it('Only creator can add voter', async() => {

        });

        it('Only creator can start vote', async() => {

        });


    });
});