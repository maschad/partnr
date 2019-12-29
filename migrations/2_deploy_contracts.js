const PartnrGroup = artifacts.require('PartnrGroup')

module.exports = function (deployer) {
    const ballotOfficialName = "Add new wallet";
    const proposal = "proposal";

    deployer.deploy(PartnrGroup, ballotOfficialName, proposal);
}
