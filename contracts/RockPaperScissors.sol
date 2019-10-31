pragma solidity >=0.5.0 <0.6.0;
contract RockPaperScissors {
    uint256 public RPSResult = 5;
    uint256 public hand = 0;

    function RPStart(uint RPS) public {

        require(0 < RPS && RPS < 4);
        require(RPSResult == 5);
        
        uint i = 0;
        uint256 randNum = uint256(keccak256(abi.encodePacked(now, msg.sender, i))) % 3;
        hand = randNum + 1;
        i++;

        if(RPS == 1) {
            if(hand == 1 || hand == 2) RPSResult = 0;
            else RPSResult = 1;
        }

        else if(RPS == 2) {
            if(hand == 2 || hand == 3) RPSResult = 0;
            else RPSResult = 1;
        }

        else if(RPS == 3) {
            if(hand == 3 || hand == 1) RPSResult = 0;
            else RPSResult = 1;
        }

    }
}