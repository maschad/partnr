pragma solidity ^0.4.0;

import "../contracts/User.sol";
import "truffle/Assert.sol";

contract UserTest {
    function testInitialUser() {
        User user = new User();

        Assert.equal(user.getSkills(), expected, "User skill ");
    }
}
