
Ext.define("Publishing.view.layout.Layout",{
    extend: "Ext.Panel",

    xtype: 'layout',

    requires: [
        'Publishing.view.home.post.Posts',
        'Publishing.view.layout.LayoutController',
        'Publishing.view.layout.LayoutModel'
    ],

    controller: "layout-layout",
    viewModel: {
        type: "layout-layout"
    },

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'posts'
    }]
});
