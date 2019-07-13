pragma solidity ^0.5.1;

contract Escrow {
    // Parameters of the total savings.
    // or time periods in seconds.
    address payable public beneficiary;

    // absolute unix timestamps (seconds since 1970-01-01)
    uint256 public paymentTime;

    // Final savings goal.
    uint public totalRequestedSavings;


    // Set to true at the end, disallows any change.
    // By default initialized to `false`.
    bool ended;


    //Events that will be emitted on changes
    event paymentDispatched(address beneficiary, uint amount);
    event totalRequestedSavingsIncreased(uint amount);
    event totalRequestedSavingsDecreased(uint amount);

    /// Create a simple auction with `_paymentTime`
    /// days, months or weeks  time on behalf of the
    /// beneficiary address `_beneficiary`.
    constructor(
        uint _paymentTime,
        address payable _beneficiary,
        uint _totalRequestedSavings
    ) public {
        require(_paymentTime > now , "Cannot accept past date");
        beneficiary = _beneficiary;
        paymentTime = _paymentTime;
        totalRequestedSavings = _totalRequestedSavings;
    }

    function release() public {
        require(now >= paymentTime, "Funds are not ready to be released");
        address(beneficiary).transfer(totalRequestedSavings);
        emit paymentDispatched(beneficiary, totalRequestedSavings);
    }
}