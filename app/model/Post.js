Ext.define('Publishing.model.Post', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'userId', type: 'int' },
        { name: 'title', type: 'auto' },
        { name: 'body', type: 'auto' }

    ]
});
