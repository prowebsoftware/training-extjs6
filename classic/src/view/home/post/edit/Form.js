
Ext.define("Publishing.view.home.post.edit.Form",{
    extend: "Ext.form.Panel",

    xtype: 'editform',

    requires: [
        'Publishing.view.home.post.edit.FormController',
        'Publishing.view.home.post.edit.FormModel'
    ],

    controller: "home-post-edit-form",
    viewModel: {
        type: "home-post-edit-form"
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    bind: {
        title: '{record.title}'
    },

    tbar: [{
        text: 'New',
        handler: 'onNew'

    },'->', {
        iconCls: null,
        //glyph: 76,
        text:'Save',
        reference: 'saveButton',
        bind: {
            disabled: '{!record}'
        },
        disabled: true,
        handler: 'onSave'
    },{
        iconCls: null,
        //glyph: 76,
        text:'Delete',
        bind: {
            disabled: '{!record}'
        },
        disabled: true,
        handler: 'onDelete'
    }],

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Title',
        bind: '{record.title}',
        height: 30
    },{
        xtype: 'textarea',
        fieldLabel: 'Body',
        bind: '{record.body}',
        flex: 1
    }],

    handler: 'onSubmit'
});
