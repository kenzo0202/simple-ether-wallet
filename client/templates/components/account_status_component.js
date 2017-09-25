/**
 * Created by kenzo on 2017/09/24.
 */
Template.accountBalanceComponent.helpers ({
    accounts: function () {
        return EthAccounts.find({});
    }
});


Template.accountBalanceItem.helpers({
    //アカウント名の取得
    name: function () {
        return this.name;
    },

    //アカウントアドレスの取得
    address: function () {
        return this.address;
    },

    //アカウントが持つEtherの残高を取得
    balance: function () {
        var balanceEth = web3.fromWei(this.balance, "ether");
        return parseFloat(balanceEth).toFixed(3)
    }
});