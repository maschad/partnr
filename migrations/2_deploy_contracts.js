const PartnrGroup = artifacts.require('PartnrGroup')

module.exports = function (deployer) {
    deployer.deploy(PartnrGroup,"ballot", "proposal")
}
