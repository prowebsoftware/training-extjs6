Ext.define('Publishing.view.users.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users-users',

    init: function(){

        this.getView().on('render', function(){
            var view = this.getView();
            this.usersform = view.lookupReference('usersform');
            this.usersposts = view.lookupReference('usersposts');

        }, this, {single: true});

    },

    userRowClick: function( table, record, tr, rowIndex ){
        this.usersform.getViewModel().set( 'record', record );
        this.usersform.getForm().loadRecord( record );

        this.usersposts.getStore().clearFilter();
        this.usersposts.getStore().addFilter({
            property: 'userId',
            value: record.get('id')
        });

    }
    
});
