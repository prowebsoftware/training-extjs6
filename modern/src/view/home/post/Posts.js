
Ext.define("Publishing.view.home.post.Posts",{
    extend: "Ext.grid.Grid",

    xtype: 'posts',

    requires: [
        'Publishing.view.home.post.PostsController',
        'Publishing.view.home.post.PostsModel'
    ],


    controller: "home-post-posts",
    viewModel: {
        type: "home-post-posts"
    },

    title: 'Posts',

    bind: {
        store: '{posts}'
    },

    hideHeaders: true,

    columns: [
        { text: 'Title',  dataIndex: 'title', flex: 1 }
    ]
});
