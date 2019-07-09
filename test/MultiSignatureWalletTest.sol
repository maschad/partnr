pragma solidity >=0.4.21 < 0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MultiSignatureWallet.sol";

contract TestMultiSignatureWallet {

    function testInitialOwners() private {
        MultiSigWallet wallet = MultiSigWallet(DeployedAddresses.MultiSigWallet());

        address[] owners;

        Assert.equal(wallet.ownerExists(msg.sender), owners, "Initialized with multiple owners");
    }
}