pragma solidity >=0.4.22 <0.6.0;

contract Escrow {
    // Parameters of the total savings.
    // absolute unix timestamps (seconds since 1970-01-01)
    // or time periods in seconds.
    address payable public beneficiary;
    uint public paymentTime;

    // Final savings goal.
    uint public totalRequestedSavings;


    // Set to true at the end, disallows any change.
    // By default initialized to `false`.
    bool ended;


    //Events that will be emitted on changes
    event paymentDispatched(address beneficiary, uint amount);
    event totalRequestedSavingsIncreased(uint amount);
    event totalRequestedSavingsDecreased(uint amount);
    event paymentTimeIncreased(uint time);
    event paymentTimeDecreased(uint time);

    /// Create a simple auction with `_paymentTime`
    /// days, months or weeks  time on behalf of the
    /// beneficiary address `_beneficiary`.
    constructor(
        uint _paymentTime,
        address payable _beneficiary
    ) public {
        beneficiary = _beneficiary;
        paymentTime = now + _paymentTime;
    }

    function proposeSavingTarget(uint amount) public {

    }

    function setSavingsGoal(uint amount) internal {
        totalRequestedSavings = amount;
    }
}