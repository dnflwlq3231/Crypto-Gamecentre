pragma solidity >=0.5.0 <0.6.0;

import './SafeMath.sol';
import './BlackJack.sol';
import './Dice.sol';
import './OddEven.sol';
import './RockPaperScissors.sol';

contract Chip is BlackJack, Dice, OddEven, RockPaperScissors {
  using SafeMath for uint256;

  string public name = 'Gamble Chip Token';
  string public symbol = 'CHIP';

  uint256 public totalSupply = 1000000000000;
  uint256 public betAmount = 0;
  uint256 public Result = 5;

  address public gameContract = 0x0000000000000000000000000000000000000000;

  mapping (address => uint256) balances;
  mapping (address => mapping (address => uint256)) internal allowed;
  event Transfered(address indexed from, address indexed to, uint256 value);

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
    emit Transfered(msg.sender, gameContract, amount);
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
    require(balances[gameContract] >= 100);
    balances[gameContract] = balances[gameContract].sub(100);
    balances[msg.sender] = balances[msg.sender].add(100);
    emit Transfered(gameContract, msg.sender, 100);
  }
  
  function Betting(uint256 _betAmount, address userAddress) external {
    require(msg.sender == userAddress);
    require(balances[msg.sender] >= _betAmount);
    require(_betAmount > 0);
    require(balances[gameContract] >= _betAmount.mul(10));
    betAmount = _betAmount;
    balances[msg.sender] = balances[msg.sender].sub(betAmount);
    balances[gameContract] = balances[gameContract].add(betAmount);
    emit Transfered(msg.sender, gameContract, betAmount);
  }
  
  function DiceReward(address userAddress) external {

    require(msg.sender == userAddress);
    require(betAmount != 0);
    require(DiceResult != 5);
    
    uint256 player_return;
    player_return = betAmount.mul(3);
    Result = DiceResult;

    if (Result == 0 || Result == 5) {
      betAmount = 0;
      DiceResult = 5;
    }
    
    else {
      require(balances[gameContract] >= player_return);
      
      balances[gameContract] = balances[gameContract].sub(player_return.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(player_return.mul(Result));
      emit Transfered(gameContract, msg.sender, player_return.mul(Result));
      betAmount = 0;
      DiceResult = 5;
    }
    
  }

  function BlackJackReward(address userAddress) external {

    require(msg.sender == userAddress);
    require(betAmount != 0);
    require(BlackJackResult != 5);
    
    uint256 player_return;
    player_return = betAmount.mul(3);
    Result = BlackJackResult;

    if (Result == 0 || Result == 5) {
      betAmount = 0;
      OddEvenResult = 0;
    }
    
    else {
      require(balances[gameContract] >= player_return);
      
      balances[gameContract] = balances[gameContract].sub(player_return.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(player_return.mul(Result));
      emit Transfered(gameContract, msg.sender, player_return.mul(Result));
      betAmount = 0;
      BlackJackResult = 5;
    }
  }

  function OddEvenReward(address userAddress) external {

    require(msg.sender == userAddress);
    require(betAmount != 0);
    require(OddEvenResult != 5);
    
    uint256 player_return;
    player_return = betAmount.mul(3);
    Result = OddEvenResult;

    if (Result == 0 || Result == 5){
      betAmount = 0;
      OddEvenResult = 5;
    }
    else {
      require(balances[gameContract] >= player_return);
      
      balances[gameContract] = balances[gameContract].sub(player_return.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(player_return.mul(Result));
      emit Transfered(gameContract, msg.sender, player_return.mul(Result));
      betAmount = 0;
      OddEvenResult = 5;
    }
  }

  function RPSReward(address userAddress) external {

    require(msg.sender == userAddress);
    require(betAmount != 0);
    require(RPSResult != 5);
    
    uint256 player_return;
    player_return = betAmount.mul(3);
    Result = RPSResult;

    if (Result == 0 || Result == 5){
      betAmount = 0;
      RPSResult = 5;
    }
    
    else {
      require(balances[gameContract] >= player_return);
      
      balances[gameContract] = balances[gameContract].sub(player_return.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(player_return.mul(Result));
      emit Transfered(gameContract, msg.sender, player_return.mul(Result));
      betAmount = 0;
      RPSResult = 5;
    }
  }
}