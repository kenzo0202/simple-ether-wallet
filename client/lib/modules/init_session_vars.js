/**
 * Created by kenzo on 2017/09/24.
 */
initSessionVars = function () {

    //送金関連の変数
    var initialFundInfo = {
        amount: 0,
        fAddr: 0x0,
        tAddr: 0X0,
    };

    //Node関連の変数
    Session.setDefault('isMining',false);
    Session.setDefault('hashRate',0);
    Session.setDefault('peerCount',0);
};
