const MultisigWalletFactory = artifacts.require('MultiSigWalletWithDailyLimitFactory.sol')

module.exports = function (deployer) {
    deployer.deploy(MultisigWalletFactory)
}
