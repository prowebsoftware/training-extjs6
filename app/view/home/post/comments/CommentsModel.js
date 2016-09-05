Ext.define('Publishing.view.home.post.comments.CommentsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.home-post-comments-comments',
    stores: {

        comments: {

            model: 'Publishing.model.Comment',
            autoLoad: false
        }
    }

});
