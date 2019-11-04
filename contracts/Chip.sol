pragma solidity >=0.5.0 <0.6.0;

import './SafeMath.sol';

contract Chip {
  using SafeMath for uint256;

  string public name = 'Gamble Chip Token';
  string public symbol = 'CHIP';

  uint256 public totalSupply = 1000000000000;

  address public gameContract = 0x0000000000000000000000000000000000000000;

  mapping (address => uint256) balances;
  mapping (address => uint) diceComNum;
  mapping (address => uint) diceResult;
  mapping (address => uint) rpsResult;
  mapping (address => uint) rpsComHand;
  mapping (address => uint) oddEvenNum;
  mapping (address => uint) oddEvenResult;
  

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
    uint Result = 5;
    uint i = 0;
    uint randNum = uint(keccak256(abi.encodePacked(now, msg.sender, i))) % 6;
    randNum = randNum + 1;
    uint DiceComNum = randNum;
    uint DiceMyNum = select;

    if(DiceComNum == DiceMyNum){
      if(DiceMyNum == 6) Result = 2;
      else Result = 1;
    }
    else Result = 0;

    return (Result, DiceComNum);
  }
  
  function Dice(address userAddress, uint number, uint betAmount) external {
    require(msg.sender == userAddress);
    require(betAmount > 0);
    require(balances[msg.sender] >= betAmount);
    require(balances[gameContract] >= betAmount);

    uint Result;
    uint DiceComNum;

    balances[msg.sender] = balances[msg.sender].sub(betAmount);
    balances[gameContract] = balances[gameContract].add(betAmount);

    uint playerReturn;
    playerReturn = betAmount.mul(5); 

    (Result, DiceComNum) = DiceRule(number);

    if(Result == 2){
      balances[gameContract] = balances[gameContract].sub(playerReturn.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(playerReturn.mul(Result));
    }
    else if(Result == 1){
      balances[gameContract] = balances[gameContract].sub(playerReturn.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(playerReturn.mul(Result));
    }

    diceComNum[msg.sender] = DiceComNum;
    diceResult[msg.sender] = Result;
  }

  function DiceReward(address userAddress) external view returns (uint, uint) {
    return (diceComNum[userAddress], diceResult[userAddress]);
  }

  function RpsRule(uint RPS) public returns (uint, uint) {
    uint Result = 5;
    uint i = 0;
    uint256 randNum = uint256(keccak256(abi.encodePacked(now, msg.sender, i))) % 3;
    uint RPSComHand = randNum + 1;

    if(RPS == 1) {
        if(RPSComHand == 1 || RPSComHand == 2) Result = 0;
        else Result = 1;
    }

    else if(RPS == 2) {
        if(RPSComHand == 2 || RPSComHand == 3) Result = 0;
        else Result = 1;
    }

    else if(RPS == 3) {
        if(RPSComHand == 3 || RPSComHand == 1) Result = 0;
        else Result = 1;
    }
    return (Result, RPSComHand);
  }

  function RPS(address userAddress, uint number, uint betAmount) external {
    require(msg.sender == userAddress);
    require(betAmount > 0);
    require(balances[msg.sender] >= betAmount);
    require(balances[gameContract] >= betAmount);
    
    uint Result;
    uint RPSComHand;

    balances[msg.sender] = balances[msg.sender].sub(betAmount);
    balances[gameContract] = balances[gameContract].add(betAmount);

    uint playerReturn;
    playerReturn = betAmount.mul(3); 

    (Result, RPSComHand) = RpsRule(number);

    if(Result == 1){
      balances[gameContract] = balances[gameContract].sub(playerReturn.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(playerReturn.mul(Result));
    }

    rpsComHand[msg.sender] = RPSComHand;
    rpsResult[msg.sender] = Result;
  }

  function RPSReward(address userAddress) external view returns (uint, uint) {
    return (rpsComHand[userAddress], rpsResult[userAddress]);
  }

  function OddEvenRule(uint x) public returns (uint, uint) {
    uint Result =5;
    uint i = 0;
    uint randNum = uint256(keccak256(abi.encodePacked(now, msg.sender, i))) % 2;
    randNum = randNum + 1;
    uint OddEven =5;

    if(randNum % 2 == 0) {
        OddEven = 0;
    }
    else OddEven = 1;

    if(x == OddEven) Result = 1;
    else Result = 0;

    return (Result, OddEven);
  }

  function OddEven(address userAddress, uint number, uint betAmount) external {
    require(msg.sender == userAddress);
    require(betAmount > 0);
    require(balances[msg.sender] >= betAmount);
    require(balances[gameContract] >= betAmount);
    
    uint Result;
    uint OddEven;

    balances[msg.sender] = balances[msg.sender].sub(betAmount);
    balances[gameContract] = balances[gameContract].add(betAmount);

    uint playerReturn;
    playerReturn = betAmount.mul(2); 

    (Result, OddEven) = OddEvenRule(number);

    if(Result == 1){
      balances[gameContract] = balances[gameContract].sub(playerReturn.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(playerReturn.mul(Result));
    }

    oddEvenNum[msg.sender] = OddEven;
    oddEvenResult[msg.sender] = Result;
  }

  function OddEvenReward(address userAddress) external view returns (uint, uint) {
    return (oddEvenNum[userAddress], oddEvenResult[userAddress]);
  }

//   ****************************************************************************

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
  // string[] public PlayerHand = ["", "", "", "", ""];
  //   string[] public DealerHand = ["", "", "", "", ""];
  //   string[] public Cards = ["H of 2", "H of 3", "H of 4", "H of 5", "H of 6", "H of 7", "H of 8" , "H of 9", "C of 2", "C of 3", "C of 4", "C of 5", "C of 6", "C of 7", "C of 8", "C of 9", "S of 2", "S of 3", "S of 4", "S of 5", "S of 6", "S of 7", "S of 8", "S of 9", "D of 2", "D of 3", "D of 4", "D of 5", "D of 6", "D of 7", "D of 8", "D of 9", "D of 10", "D of Q", "D of J", "D of K", "D of A",  "H of 10", "H of Q", "H of J", "H of K", "H of A", "C of 10", "C of Q", "C of J", "C of K", "C of A", "S of 10", "S of Q", "S of J", "S of K", "S of A"];
  //   uint256 public PlayerCost = 0;
  //   uint256 public DealerCost = 0;
  //   uint256 public BlackJackResult = 5;
  //   uint256 public count1 = 0;
  //   uint256 public count2 = 0;
  //   uint256 public CountDraw = 0;
  //   uint256 public random = 0;
  //   uint256 public countcheck = 0;

  //   function OverlapCheck() public {
  //        while(true) {
  //           if(countcheck != 0) {
  //               for(uint i = 0; i < countcheck; i++) {
  //                   if(keccak256(abi.encode(PlayerHand[i])) == keccak256(abi.encode(Cards[random])) || keccak256(abi.encode(DealerHand[i])) == keccak256(abi.encode(Cards[random]))){
  //                       random = uint(keccak256(abi.encodePacked(now, msg.sender, CountDraw))) % 52;
  //                       CountDraw++;
  //                   }
  //               }
  //           }
  //           countcheck++;
  //           if(countcheck == 4) {
  //                countcheck = 0;
  //                break;
  //           }
  //       }
  //   }

  //   function PlayerDraw() public {
  //       random = uint(keccak256(abi.encodePacked(now, msg.sender, CountDraw))) % 52;
  //       OverlapCheck(); 
  //       PlayerHand[count1] = Cards[random];
        
  //       if(0 <= random && random < 8) PlayerCost = PlayerCost + random + 2;
  //       else if(7 < random && random < 16) PlayerCost = PlayerCost + random - 6;
  //       else if(15 < random && random < 24) PlayerCost = PlayerCost + random - 14;
  //       else if(23 < random && random < 32) PlayerCost = PlayerCost + random - 22;
  //       else PlayerCost = PlayerCost + 10;
  //       count1++;
  //       CountDraw++;
  //   }

  //   function DealerDraw() public {
  //       random = uint(keccak256(abi.encodePacked(now, msg.sender, CountDraw))) % 52;
  //       OverlapCheck();
  //       DealerHand[count2] = Cards[random];
        
  //       if(0 <= random && random < 8) DealerCost = DealerCost + random + 2;
  //       else if(7 < random && random < 16) DealerCost = DealerCost + random - 6;
  //       else if(15 < random && random < 24) DealerCost = DealerCost + random - 14;
  //       else if(23 < random && random < 32) DealerCost = DealerCost + random - 22;
  //       else DealerCost = DealerCost + 10;
  //       count2++;
  //       CountDraw++;
  //   }

  //   function BlackJackStart() public {
  //       require(PlayerCost == 0);
  //       require(DealerCost == 0);
  //       PlayerDraw();
  //       DealerDraw();
  //       PlayerDraw();
  //       DealerDraw();
  //   }

  //   function BlackJackDraw() public {
  //       require(PlayerCost < 21);
  //       PlayerDraw();
  //       if(DealerCost <= 15) DealerDraw();
  //   }

  //   function BlackJackEnd() public {
  //       require(BlackJackResult == 5);
  //       if(DealerCost <= 15) DealerDraw();
  //       if(PlayerCost > DealerCost) {
  //           if(PlayerCost > 21) BlackJackResult = 0;
  //           else BlackJackResult = 1;
  //       }

  //       if(PlayerCost <= DealerCost) {
  //           if(DealerCost > 21) {
  //               if(PlayerCost > 21) BlackJackResult = 0;
  //               else BlackJackResult = 1;
  //           }
  //           else BlackJackResult = 0;
  //       }
  //   }

  //   function BlackJackReset() public {
  //       PlayerCost = 0;
  //       DealerCost = 0;
  //       count1 = 0;
  //       count2 = 0;
  //       CountDraw = 0;
  //       countcheck = 0;
  //       random = 0;
  //       PlayerHand = ["", "", "", "", ""];
  //       DealerHand = ["", "", "", "", ""];
  //       BlackJackResult = 5;
  //   }
}