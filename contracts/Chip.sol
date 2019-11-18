pragma solidity >=0.5.0 <0.6.0;

import './SafeMath.sol';

contract Chip {
  using SafeMath for uint256;

  string private name = 'Gamble Chip Token';
  string private symbol = 'CHIP';

  uint256 private totalSupply = 1000000000000;

  address private publisher = 0x85D684Ad21aCb3772Ba3f7835D875726f392AE25;
  address private gameContract = 0x0000000000000000000000000000000000000000;

  mapping (address => uint) balances;
  mapping (address => uint) userbetting;
  mapping (address => uint) diceComNum;
  mapping (address => uint) diceUserNum;
  mapping (address => uint) diceResult;
  mapping (address => uint) rpsComHand;
  mapping (address => uint) rpsUserHand;
  mapping (address => uint) rpsResult;
  mapping (address => uint) oddEvenComNum;
  mapping (address => uint) oddEvenUserNum;
  mapping (address => uint) oddEvenResult;
  

  function Token() external {
    require(msg.sender == publisher);
    require(balances[msg.sender] == 0);

    balances[msg.sender] = totalSupply;
  }
  
  function SetContAddr(address _gameContract) external {
    require(msg.sender == publisher);
    gameContract = _gameContract;
  }

  function AdminSendContract(uint256 amount) external returns (bool) {
    require(msg.sender == publisher);
    require(balances[msg.sender] >= amount);
    require(amount > 0);

    balances[msg.sender] = balances[msg.sender].sub(amount);
    balances[gameContract] = balances[gameContract].add(amount);
    return true;
  }

  function AdminReceiveContract(uint256 amount) external returns (bool) {
    require(msg.sender == publisher);
    require(balances[msg.sender] >= amount);
    require(amount > 0);

    balances[msg.sender] = balances[msg.sender].sub(amount);
    balances[gameContract] = balances[gameContract].add(amount);
    return true;
  }

  function AdminSendUser(address userAddress, uint256 amount) external returns (bool) {
    require(msg.sender == publisher);
    require(balances[msg.sender] >= amount);
    require(amount > 0);

    balances[msg.sender] = balances[msg.sender].sub(amount);
    balances[userAddress] = balances[userAddress].add(amount);
    return true;
  }

  function AdminReceiveUser(address userAddress, uint amount) external returns (bool) {
    require(msg.sender == publisher);
    require(balances[userAddress] >= amount);
    require(amount > 0);

    balances[userAddress] = balances[userAddress].sub(amount);
    balances[msg.sender] = balances[msg.sender].add(amount);
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
    playerReturn = betAmount.mul(10); 

    (Result, DiceComNum) = DiceRule(number);

    if(Result == 2){
      balances[gameContract] = balances[gameContract].sub(playerReturn.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(playerReturn.mul(Result));
    }
    else if(Result == 1){
      balances[gameContract] = balances[gameContract].sub(playerReturn.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(playerReturn.mul(Result));
    }

    userbetting[msg.sender] = betAmount;
    diceComNum[msg.sender] = DiceComNum;
    diceUserNum[msg.sender] = number;
    diceResult[msg.sender] = Result;
  }

  function DiceReward(address userAddress) external view returns (uint, uint, uint, uint) {
    return (diceResult[userAddress], diceComNum[userAddress], diceUserNum[userAddress], userbetting[userAddress]);
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

  function Rps(address userAddress, uint number, uint betAmount) external {
    require(msg.sender == userAddress);
    require(betAmount > 0);
    require(balances[msg.sender] >= betAmount);
    require(balances[gameContract] >= betAmount);
    
    uint Result;
    uint RpsComHand;

    balances[msg.sender] = balances[msg.sender].sub(betAmount);
    balances[gameContract] = balances[gameContract].add(betAmount);

    uint playerReturn;
    playerReturn = betAmount.mul(5); 

    (Result, RpsComHand) = RpsRule(number);

    if(Result == 1){
      balances[gameContract] = balances[gameContract].sub(playerReturn.mul(Result));
      balances[msg.sender] = balances[msg.sender].add(playerReturn.mul(Result));
    }

    userbetting[msg.sender] = betAmount;
    rpsComHand[msg.sender] = RpsComHand;
    rpsUserHand[msg.sender] = number;
    rpsResult[msg.sender] = Result;
  }

  function RpsReward(address userAddress) external view returns (uint, uint, uint, uint) {
    return (rpsResult[userAddress], rpsComHand[userAddress], rpsUserHand[userAddress], userbetting[userAddress]);
  }

  function OddEvenRule(uint x) public returns (uint, uint) {
    uint Result =5;
    uint i = 0;
    uint randNum = uint256(keccak256(abi.encodePacked(now, msg.sender, i))) % 2;
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

    userbetting[msg.sender] = betAmount;
    oddEvenComNum[msg.sender] = OddEven;
    oddEvenUserNum[msg.sender] = number;
    oddEvenResult[msg.sender] = Result;
  }

  function OddEvenReward(address userAddress) external view returns (uint, uint, uint, uint) {
    return (oddEvenResult[userAddress], oddEvenComNum[userAddress], oddEvenUserNum[userAddress], userbetting[userAddress]);
  }

//  ****************************************************************************

  // function BlackJackRule() external {

  //   string[] PlayerHand = ["", "", "", "", ""];
  //   string[] DealerHand = ["", "", "", "", ""];
  //   string[] Cards = ["H of 2", "H of 3", "H of 4", "H of 5", "H of 6", "H of 7", "H of 8" , "H of 9", "C of 2", "C of 3", "C of 4", "C of 5", "C of 6", "C of 7", "C of 8", "C of 9", "S of 2", "S of 3", "S of 4", "S of 5", "S of 6", "S of 7", "S of 8", "S of 9", "D of 2", "D of 3", "D of 4", "D of 5", "D of 6", "D of 7", "D of 8", "D of 9", "D of 10", "D of Q", "D of J", "D of K", "D of A",  "H of 10", "H of Q", "H of J", "H of K", "H of A", "C of 10", "C of Q", "C of J", "C of K", "C of A", "S of 10", "S of Q", "S of J", "S of K", "S of A"];
  //   uint256 PlayerCost = 0;
  //   uint256 DealerCost = 0;
  //   uint256 BlackJackResult = 5;
  //   uint256 count1 = 0;
  //   uint256 count2 = 0;
  //   uint256 CountDraw = 0;
  //   uint256 random = 0;
  //   uint256 countcheck = 0;
  // }  

  // function OverlapCheck() public {
  //       while(true) {
  //         if(countcheck != 0) {
  //             for(uint i = 0; i < countcheck; i++) {
  //                 if(keccak256(abi.encode(PlayerHand[i])) == keccak256(abi.encode(Cards[random])) || keccak256(abi.encode(DealerHand[i])) == keccak256(abi.encode(Cards[random]))){
  //                     random = uint(keccak256(abi.encodePacked(now, msg.sender, CountDraw))) % 52;
  //                     CountDraw++;
  //                 }
  //             }
  //         }
  //         countcheck++;
  //         if(countcheck == 4) {
  //               countcheck = 0;
  //               break;
  //         }
  //     }
  // }

  // function PlayerDraw() public {
  //     random = uint(keccak256(abi.encodePacked(now, msg.sender, CountDraw))) % 52;
  //     OverlapCheck(); 
  //     PlayerHand[count1] = Cards[random];
      
  //     if(0 <= random && random < 8) PlayerCost = PlayerCost + random + 2;
  //     else if(7 < random && random < 16) PlayerCost = PlayerCost + random - 6;
  //     else if(15 < random && random < 24) PlayerCost = PlayerCost + random - 14;
  //     else if(23 < random && random < 32) PlayerCost = PlayerCost + random - 22;
  //     else PlayerCost = PlayerCost + 10;
  //     count1++;
  //     CountDraw++;
  // }

  // function DealerDraw() public {
  //     random = uint(keccak256(abi.encodePacked(now, msg.sender, CountDraw))) % 52;
  //     OverlapCheck();
  //     DealerHand[count2] = Cards[random];
      
  //     if(0 <= random && random < 8) DealerCost = DealerCost + random + 2;
  //     else if(7 < random && random < 16) DealerCost = DealerCost + random - 6;
  //     else if(15 < random && random < 24) DealerCost = DealerCost + random - 14;
  //     else if(23 < random && random < 32) DealerCost = DealerCost + random - 22;
  //     else DealerCost = DealerCost + 10;
  //     count2++;
  //     CountDraw++;
  // }

  // function BlackJackStart() public {
  //     require(PlayerCost == 0);
  //     require(DealerCost == 0);
  //     PlayerDraw();
  //     DealerDraw();
  //     PlayerDraw();
  //     DealerDraw();
  // }

  // function BlackJackDraw() public {
  //     require(PlayerCost < 21);
  //     PlayerDraw();
  //     if(DealerCost <= 15) DealerDraw();
  // }

  // function BlackJackEnd() public {
  //     require(BlackJackResult == 5);
  //     if(DealerCost <= 15) DealerDraw();
  //     if(PlayerCost > DealerCost) {
  //         if(PlayerCost > 21) BlackJackResult = 0;
  //         else BlackJackResult = 1;
  //     }

  //     if(PlayerCost <= DealerCost) {
  //         if(DealerCost > 21) {
  //             if(PlayerCost > 21) BlackJackResult = 0;
  //             else BlackJackResult = 1;
  //         }
  //         else BlackJackResult = 0;
  //     }
  // }
}