
Ext.define("Publishing.view.users.edit.Form",{
    extend: "Ext.form.Panel",

    xtype: 'usersform',

    requires: [
        'Publishing.view.users.edit.FormController',
        'Publishing.view.users.edit.FormModel'
    ],

    controller: "users-edit-form",
    viewModel: {
        type: "users-edit-form"
    },

    bodyPadding: 5,

    initComponent: function(){

        Ext.apply(this, {
            width: 550,
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 90,
                msgTarget: Ext.supports.Touch ? 'side' : 'qtip'
            },

            items: [{
                xtype: 'fieldset',
                title: 'Contact Information',
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Name',
                    layout: 'hbox',
                    combineErrors: true,
                    defaultType: 'textfield',
                    defaults: {
                        hideLabel: 'true'
                    },
                    items: [{
                        name: 'name',
                        bind: '{record.name}',
                        fieldLabel: 'Name',
                        flex: 2,
                        emptyText: 'Full Name',
                        allowBlank: false
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    margin: '0 0 5 0',
                    items: [{
                        fieldLabel: 'Email Address',
                        name: 'email',
                        vtype: 'email',
                        flex: 1,
                        allowBlank: false
                    }, {
                        fieldLabel: 'Phone Number',
                        labelWidth: 100,
                        name: 'phone',
                        width: 200,
                        emptyText: 'xxx-xxx-xxxx',
                        maskRe: /[\d\-]/,
                        regex: /^\d{3}-\d{3}-\d{4}$/,
                        regexText: 'Must be in the format xxx-xxx-xxxx'
                    }]
                }]
            }, {
                xtype: 'fieldset',
                title: 'Address',
                layout: 'anchor',
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 5 0',
                    defaultType: 'textfield',
                    items: [{
                        labelWidth: 110,
                        fieldLabel: 'Street Address',
                        name: 'street',
                        flex: 1,
                        listeners: {
                            scope: this
                        },
                        allowBlank: false
                    }, {
                        labelWidth: 40,
                        fieldLabel: 'Suite',
                        name: 'suite',
                        width: 160,
                        listeners: {
                            scope: this
                        },
                        allowBlank: false
                    }]
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 5 0',
                    items: [{
                        labelWidth: 110,
                        xtype: 'textfield',
                        fieldLabel: 'City',
                        name: 'city',
                        listeners: {
                            scope: this
                        },
                        flex: 1,
                        allowBlank: false
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Postal Code',
                        labelWidth: 80,
                        name: 'zipcode',
                        listeners: {
                            scope: this
                        },
                        width: 160,
                        allowBlank: false,
                        maxLength: 10,
                        enforceMaxLength: true,
                        maskRe: /[\d\-]/,
                        regex: /^\d{5}(\-\d{4})?$/,
                        regexText: 'Must be in the format xxxxx or xxxxx-xxxx'
                    }]
                }]
            }
            ],

            buttons: [{
                text: 'Reset',
                scope: this
            }, {
                text: 'Save',
                width: 150,
                scope: this
            }]
        });
        this.callParent();
    }
});
