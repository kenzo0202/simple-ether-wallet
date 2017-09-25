/**
 * Created by kenzo on 2017/09/24.
 */
Router.configure({
    layoutTemplate: 'walletLayout'
});


Router.route('/',function () {
    this.redirect('/dashboard');
});


Router.route('/dashboard',{name: 'dashboard'});
Router.route('/send',{name: 'send'});

