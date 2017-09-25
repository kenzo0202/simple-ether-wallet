/**
 * Created by kenzo on 2017/09/24.
 */
Template.blockStatusComponent.helpers({
    //最新のブロック番号を取得
    latestBlockNum: function () {
        return EthBlocks.latest.number;
    },


    //最新ブロックのハッシュ値を取得
    latestBlockHash: function () {
        return EthBlocks.latest.hash;
    },

    //最新ブロックの採掘者のアドレスを取得
    latestBlockMiner: function () {
        return EthBlocks.latest.miner
    },
    //最新ブロックの採掘日時を取得
    latestBlockDatetime: function(){
        return unix2datetime(EthBlocks.latest.timestamp);
    }
});