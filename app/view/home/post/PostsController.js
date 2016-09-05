Ext.define('Publishing.view.home.post.PostsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-post-posts',

    requires: [

    ],

    routes: {
        'home' : 'onHome',
        'home/:id' : 'onHome',
        'users' : 'onUsers'
    },

    init: function(){

        this.getView().on('render', function(){
            this.layout = this.getView().findParentByType('layout');
            this.editform = this.layout.down('editform');
            this.commentsgrid = this.layout.down('comments');
            this.postsgrid = this.layout.down('posts');
        }, this, {single: true});

    },

    onHome : function( id ){
        var store = this.getStore('posts'),
            me = this;

        if ( id && store && store.getRange().length==0 ){
            store.on('load', function(){
                var record = store.getById(id);
                if ( record ) {
                    me.loadRecord(record);
                }
            }, this, {single: true});
        }else if (id){
            var record = store.getById(id);
            if ( record ) {
                me.loadRecord(record);
            }
        }else{
            this.editform.getController().onNew();
        }


    },

    onRowClick: function( table, record, tr, rowIndex ){
        this.loadRecord( record );
        this.redirectTo('home/'+record.get('id'));
    },

    loadRecord: function( record ){

        this.editform.getViewModel().set( 'record', record );
        this.editform.getForm().loadRecord( record );

        Publishing.model.Comment.getProxy().setUrl('http://localhost:3000/posts/'+record.get('id')+'/comments');
        this.commentsgrid.getStore().load();

        this.postsgrid.getSelectionModel().select(record);
    }
    
});
