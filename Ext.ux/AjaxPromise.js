Ext.define('Ext.ux.AjaxPromise', {

    requires: [
        'Ext.ux.Deferred'
    ],

    singleton: true,

    getNewPromise: function() {
        return Ext.create('Ext.ux.Deferred');
    },

    runAjax: function(url) {

        var promise = this.getNewPromise();

        Ext.Ajax.request({
            url: url,
            type: 'GET',
            success: function(response) {
                promise.resolve(Ext.JSON.decode(response.responseText));
            },
            failure: function(response) {
                promise.reject();
            },
            disableCaching: false
        });

        return promise;

    },

    runConcurrentRequests: function(urls) {

        var promise = this.getNewPromise(),
            promises = [],
            that = this;

        Ext.Array.each(urls, function(url) {

            promises.push(function() {
                return that.runAjax(url);
            })

        }, this);

        Ext.ux.Deferred.when.apply(this, promises)
            .then(function() {
                promise.resolve(Array.prototype.slice.call(arguments, 0));
            }, function() {
                promise.reject();
            });

        return promise;

    }

});