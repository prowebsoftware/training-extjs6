Ext.define('Publishing.model.User', {
    extend: 'Ext.data.Model',

    requires: [
        'Publishing.model.Post'
    ],

    fields: [{
        name: 'street',
        mapping: function(data){
            return data.address.street;
        }
    },{
        name: 'city',
        mapping: function(data){
            return data.address.city;
        }
    },{
        name: 'zipcode',
        mapping: function(data){
            return data.address.zipcode;
        }
    },{
        name: 'suite',
        mapping: function(data){
            return data.address.suite;
        }
    },
        {
            name: 'postCount',
            convert: function(v, model) {
                var results;


                results = Ext.getStore('posts').queryBy(function(item) {
                    return item.data.userId === model.data.id;
                });

                return results.length;
            }
        }
    ]
});
