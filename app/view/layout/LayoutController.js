Ext.define('Publishing.view.layout.LayoutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.layout-layout',

    requires: [
        'Publishing.view.users.Users',
        'Ext.ux.AjaxPromise'
    ],

    showUsers: function(){
        
        var window = Ext.create('Publishing.view.users.Users', {
        });

        window.show();
    },

    runPromises: function() {

        var loadMask = new Ext.LoadMask({
            msg: 'Please wait, loading data',
            target: this.getView()
        });

        loadMask.show();

        Ext.ux.AjaxPromise.runConcurrentRequests([
            'http://localhost:3000/posts',
            'http://localhost:3000/posts/51/comments'
        ])
            .then(function(data) {
                Ext.Msg.alert('Success', 'It all worked correctly');
                console.log(data);
            }, function() {
                Ext.Msg.alert('Error', 'Something went wrong with one of the requests');
            })
            .always(function() {
                loadMask.destroy();
            });

    }
    
});
