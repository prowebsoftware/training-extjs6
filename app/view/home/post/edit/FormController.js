Ext.define('Publishing.view.home.post.edit.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-post-edit-form',

    onSave: function() {
        var form = this.getView().getForm(), // get the basic form
            record = form.getRecord(), // get the underlying model instance
            store = null;

        if (form.isValid()) {

            if ( record.phantom ){
                store = this.getView().findParentByType('layout').down('posts').getStore();
                // stop the auto-generated ID being saved on the server.  let the server give us an ID
                delete record.data.id;
                store.add(record);
            }else {
                store = record.store;
            }

            store.sync({
                success: function () {
                    Ext.Msg.alert('Success', 'Saved successfully.');
                },
                failure: function () {
                    Ext.Msg.alert('Failure', 'Failed to save!.');
                }
            });

        }else{
            Ext.Msg.alert('Valid!', 'The form is not valid!');
        }
    },

    onDelete: function(){
        var form = this.getView().getForm(), // get the basic form
            record = form.getRecord(), // get the underlying model instance
            store = record.store,
            me = this;

        record.store.remove( record );
        store.sync({
            success: function() {
                Ext.Msg.alert('Success', 'Deleted successfully.');
                me.resetForm();
            },
            failure: function() {
                Ext.Msg.alert('Failure', 'Failed to delete!.');
            }
        });
    },

    onNew: function(){
        // enable the save button
        this.lookupReference('saveButton').enable();
        // clear the form
        this.resetForm();

        this.getView().findParentByType('layout').down('comments').getStore().removeAll();
    },

    resetForm: function(){
        var view = this.getView(),
            form = view.getForm(),
            record = Ext.create('Publishing.model.Post');

        form.loadRecord(record);
        view.getViewModel().set( 'record', record );
    }
    
});