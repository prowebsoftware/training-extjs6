Ext.define('Publishing.model.Comment', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',

        url: 'http://localhost:3000/posts/:id/comments',
        reader: {
            type: 'json'
        },

        // Disable all query string params on the proxy manually
        pageParam: false,
        startParam: false,
        limitParam: false,
        noCache: false

    }
});
