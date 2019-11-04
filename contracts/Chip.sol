pragma solidity >=0.5.0 <0.6.0;

import './SafeMath.sol';

contract Chip {
  using SafeMath for uint256;

  string public name = 'Gamble Chip Token';
  string public symbol = 'CHIP';

  uint256 public totalSupply = 1000000000000;

  address public gameContract = 0x0000000000000000000000000000000000000000;

  

  mapping (address => uint256) balances;
  mapping (address => mapping (address => uint256)) internal allowed;

  mapping (address => uint) dicenum;
  mapping (address => uint) diceres;

  function Token() external {
    require(balances[msg.sender] == 0);

    balances[msg.sender] = totalSupply;
  }
  
  function SetContAddr(address _gameContract) external {
    gameContract = _gameContract;
  }

  function AdminSend(uint256 amount) external returns (bool) {
    require(balances[msg.sender] >= amount);
    require(amount > 0);

    balances[msg.sender] = balances[msg.sender].sub(amount);
    balances[gameContract] = balances[gameContract].add(amount);
    return true;
  }

//   ****************************************************************************
//   ****************************************************************************
//   ****************************************************************************

  function BalanceOf(address userAddress) external view returns (uint256 balance) {
    return balances[userAddress];
  }
  
  function GetTokens(address userAddress) external {
    require(msg.sender == userAddress);
    require(balances[userAddress] == 0);
    require(balances[gameContract] >= 1000);

    balances[gameContract] = balances[gameContract].sub(1000);
    balances[msg.sender] = balances[msg.sender].add(1000);
  }
  
  function DiceRule(uint select) public returns (uint result, uint DiceComNum){
    uint result = 5;
    uint i = 0;
    uint randNum = uint(keccak256(abi.encodePacked(now, msg.sender, i))) % 6;
    randNum = randNum + 1;
    uint DiceComNum = randNum;
    uint DiceMyNum = select;

    if(DiceComNum == DiceMyNum){
      if(DiceMyNum == 6) result = 2;
      else result = 1;
    }
    else result = 0;

    return (result, DiceComNum);
  }
  
  function Dice(address userAddress, uint number, uint betAmount) external returns (uint Result, uint DiceComNum) {
    require(msg.sender == userAddress);
    require(betAmount > 0);
    require(balances[msg.sender] >= betAmount);
    require(balances[gameContract] >= betAmount);

    uint Result = 5;
    uint DiceComNum;

    // betting
    balances[msg.sender] = balances[msg.sender].sub(betAmount);
    balances[gameContract] = balances[gameContract].add(betAmount);

    uint playerReturn;
    playerReturn = betAmount.mul(3); 

    (Result, DiceComNum) = DiceRule(number);

    if(Result == 2){  // player win x2
      balances[gameContract] = balances[gameContract].sub(playerReturn.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(playerReturn.mul(Result));
    }
    else if(Result == 1){ // player fair x1
      balances[gameContract] = balances[gameContract].sub(playerReturn.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(playerReturn.mul(Result));
    }

    diceres[msg.sender] = Result;
    dicenum[msg.sender] = DiceComNum;
    return (Result, DiceComNum);
  }

  function DiceReward(address userAddress) external view returns (uint, uint) {
    return (diceres[userAddress], dicenum[userAddress]);
  }

  // function BlackJackReward(address userAddress) external {

  //   require(msg.sender == userAddress);
  //   require(betAmount != 0);
  //   require(BlackJackResult != 5);
    
  //   uint256 player_return;
  //   player_return = betAmount.mul(3);
  //   Result = BlackJackResult;

  //   if (Result == 0 || Result == 5) {
  //     betAmount = 0;
  //     OddEvenResult = 0;
  //   }
    
  //   else {
  //     require(balances[gameContract] >= player_return);
      
  //     balances[gameContract] = balances[gameContract].sub(player_return.mul(Result));
  //     balances[msg.sender] = balances[msg.sender].add(player_return.mul(Result));
  //     emit Transfered(gameContract, msg.sender, player_return.mul(Result));
  //     betAmount = 0;
  //     BlackJackResult = 5;
  //   }
  // }

  // function OddEvenReward(address userAddress) external {

  //   require(msg.sender == userAddress);
  //   require(betAmount != 0);
  //   require(OddEvenResult != 5);
    
  //   uint256 player_return;
  //   player_return = betAmount.mul(3);
  //   Result = OddEvenResult;

  //   if (Result == 0 || Result == 5){
  //     betAmount = 0;
  //     OddEvenResult = 5;
  //   }
  //   else {
  //     require(balances[gameContract] >= player_return);
      
  //     balances[gameContract] = balances[gameContract].sub(player_return.mul(Result));
  //     balances[msg.sender] = balances[msg.sender].add(player_return.mul(Result));
  //     emit Transfered(gameContract, msg.sender, player_return.mul(Result));
  //     betAmount = 0;
  //     OddEvenResult = 5;
  //   }
  // }

  // function RPSReward(address userAddress) external {

  //   require(msg.sender == userAddress);
  //   require(betAmount != 0);
  //   require(RPSResult != 5);
    
  //   uint256 player_return;
  //   player_return = betAmount.mul(3);
  //   Result = RPSResult;

  //   if (Result == 0 || Result == 5){
  //     betAmount = 0;
  //     RPSResult = 5;
  //   }
    
  //   else {
  //     require(balances[gameContract] >= player_return);
      
  //     balances[gameContract] = balances[gameContract].sub(player_return.mul(Result));
  //     balances[msg.sender] = balances[msg.sender].add(player_return.mul(Result));
  //     emit Transfered(gameContract, msg.sender, player_return.mul(Result));
  //     betAmount = 0;
  //     RPSResult = 5;
  //   }
  // }
}