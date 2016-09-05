Ext.define('Publishing.view.users.UsersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.users-users',

    stores: {
        users: {

            model: 'Publishing.model.User',
            autoLoad: true,
            storeId: 'users',
            proxy: {
                type: 'rest',



                url: 'http://localhost:3000/users',
                reader: {
                    type: 'json'
                },

                // Disable all query string params on the proxy manually
                pageParam: false,
                startParam: false,
                limitParam: false,
                noCache: false

            }
        },
        userposts: {
            source: 'posts'
        }
    }

});
