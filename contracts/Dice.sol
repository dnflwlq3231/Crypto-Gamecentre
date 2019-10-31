pragma solidity >=0.5.0 <0.6.0;

contract Dice {
    uint public DiceResult = 5;
    uint public DiceComNum1 = 0;
    uint public DiceMyNum2 = 0;

    function DiceGameStart(uint number) public {
        require(DiceResult == 5);

        uint i = 0;
        uint randNum = uint(keccak256(abi.encodePacked(now, msg.sender, i))) % 6;
        randNum = randNum + 1;
        DiceComNum1 = randNum;
        DiceMyNum2 = number;
    
        if (DiceComNum1 == DiceMyNum2) {
            if (DiceMyNum2 == 6) DiceResult = 2;
            else DiceResult = 1;
        }
        else DiceResult = 0;
    }
}