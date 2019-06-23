const user = artifacts.require('User')

module.exports = function (deployer) {
    deployer.deploy(user)
}