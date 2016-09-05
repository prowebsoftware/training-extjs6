Ext.define('Publishing.view.home.post.PostsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.home-post-posts',

    requires: ['Publishing.model.Post', 'Publishing.model.Comment'],

    stores: {
        posts: {

            storeId: 'posts',
            model: 'Publishing.model.Post',
            autoLoad: true,

            proxy: {
                type: 'rest',

                url: 'http://localhost:3000/posts',
                reader: {
                    type: 'json'
                },

                // Disable all query string params on the proxy manually
                pageParam: false,
                startParam: false,
                limitParam: false,
                noCache: false

            }
        }
    }
});
