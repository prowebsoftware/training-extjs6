
Ext.define("Publishing.view.home.post.comments.Comments",{
    extend: "Ext.grid.Panel",

    requires: [
        'Publishing.view.home.post.comments.CommentsController',
        'Publishing.view.home.post.comments.CommentsModel'
    ],

    xtype: 'comments',

    controller: "home-post-comments-comments",
    viewModel: {
        type: "home-post-comments-comments"
    },

    bind: {
        store: '{comments}'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Email',  dataIndex: 'email', flex: 1 },
        { text: 'Comment',  dataIndex: 'body', flex: 2 }
    ]
});
