pragma solidity >=0.4.22 < 0.6.0;
import "./Factory.sol";
import "./MultiSignatureWallet.sol";


/// @title Multisignature wallet factory - Allows creation of multisig wallet.
/// @author Stefan George - <stefan.george@consensys.net>
contract MultiSigWalletFactory is Factory {

    /*
     * Public functions
     */
    /// @dev Allows verified creation of multisignature wallet.
    /// @param _owners List of initial owners.
    /// @param _required Number of required confirmations.
    /// @return Returns wallet address.
    function create(address[] memory _owners, uint _required) public returns (address wallet) {
        wallet = new MultiSigWallet( _owners, _required);
        register(wallet);
    }
}
