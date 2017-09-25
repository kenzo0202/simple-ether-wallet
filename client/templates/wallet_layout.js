/**
 * Created by kenzo on 2017/09/24.
 */

Template.walletLayout.helpers({
    //ナビゲーションバーのアイテムをハイライトするためのヘルパー感数
    activeIfCurrent: function (template) {
        var currentRoute = Router.current();
        if(currentRoute && template == Router.current().route.getName()){
            return 'active'
        }else{
            return ''
        }
    }
});