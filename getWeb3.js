// To verify if MetaMask is installed or not
function inInstalled() {
  if (typeof web3 !== 'undefined') {
    console.log('MetaMask is installed')
    return alert('You should install MetaMask')
  } else {
    console.log('MetaMask had been installed')
  }
}

// To verify if MetaMask is locked or not
function isLocked() {
  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      console.log(err)
      return alert('Something go on wrong......')
    } else if (accounts.length === 0) {
      console.log('MetaMask is locked')
      return alert('Your MetaMask account is locked')
    } else {
      console.log('MetaMask is unlocked')
    }
  })
}

// To verify if MetaMask has balance or not
function checkBalance() {
  toeknInst.balanceOf(web3.ethaccounts[0], function(err, result) {
    if (!err && result) {
      var balance = result.c[0];
      if(balance < dappCost * (100000000)) {
        console.log('MetaMask has insufficient balance')
        return false;
      } 
        console.log('MetaMask has balance')
        // Include here your transaction furnction here
    } else {
      console.error(error);
    }
    return false;
  });
}

// If you have a MetaMask transaction, but reject the transaction
tokenInst.approve(
  addrHOLD, 
  truePlanCost, 
  gasPrice: web3.toWei('50', 'gwei'),
  function (error, result) {
  if (!error && result) {
     var data;
     console.log('approval sent to network');
     
     var url = 'https://etherscan.io/tx/' + result;
     var link = '<a href=\"" + 
                 url + 
                 "\" target=\"_blank\">View Transaction</a>';
     console.log('Waiting for approval ...');
    
     data = {
        txhash: result,
        account_type: selectedPlanId,
        txtype: 1, // Approval
     };
     apiService(data, '/transaction/create/', 'POST')
     .done(function (response) {
        location.href = response.tx_url;
     });
  } 
  else {
     console.error(error);
     console.log('You reject the transaction');
  }
});