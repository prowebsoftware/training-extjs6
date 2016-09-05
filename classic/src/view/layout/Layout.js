
Ext.define("Publishing.view.layout.Layout",{
    extend: "Ext.panel.Panel",

    xtype: 'layout',

    requires: [
        'Publishing.view.home.post.Posts',
        'Publishing.view.home.post.comments.Comments',
        'Publishing.view.layout.LayoutController',
        'Publishing.view.layout.LayoutModel'
    ],

    controller: "layout-layout",
    viewModel: {
        type: "layout-layout"
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        region: 'north',
        tbar: [{
            text: 'Users',
            handler: 'showUsers'
        },{
            text: 'Promises Example',
            handler: 'runPromises'
        }]
    },{
        xtype: 'panel',
        region: 'center',
        xtype: 'posts',
        flex: 1
    },{
        xtype: 'panel',
        flex: 1,
        region: 'east',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'editform',
            title: 'Edit Post',
            reference: 'editform',
            bodyPadding: 10,
            flex: 1
        },{
            xtype: 'comments',
            title: 'Comments',
            flex: 1
        }]
    }]
});
