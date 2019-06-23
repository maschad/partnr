pragma solidity ^0.5.8;

contract MyStringStore {
    string public myString = "Hello World";

    function set(string memory x) public {
        myString = x;
    }
}
