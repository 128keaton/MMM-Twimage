//copyright 2016, keatonburleson

Module.register("twimage", {
    // Default module config.
    defaults: {
        screenName: "interior",
        count: '10',
        consumerKey: '',
        consumerSecret: '',
        accessTokenKey: '',
        accessTokenSecret: '',
        loadingText: "Loading images"
    },

    start: function() {
        Log.info('Starting module: ' + this.name);
        this.loaded = false;
        this.images = {};
        this.activeItem = 0;
        this.grabPhotos();
    },
    getStyles: function() {
        return ['twimage.css'];
    },

    grabPhotos: function() {
        var self = this;
        var sendParams = [this.config.consumerKey, this.config.consumerSecret, this.config.accessTokenKey, this.config.accessTokenSecret, this.config.screenName, this.config.count];
        self.sendSocketNotification("TWITTER_GET", sendParams);
    },



    socketNotificationReceived: function(notification, payload) {
        Log.info('socketNotificationReceived: ' + notification);
        if (notification === 'TWITTER_GET') {
            Log.info('received FLICK_IMAGE_LIST');
            this.images = payload;
            this.loaded = true;
            this.updateDom();
        }
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        var imageDisplay = document.createElement('div'); //support for config.changeColor
        imageDisplay.id = "image-container";
        if (!this.loaded) {
            wrapper.innerHTML = this.config.loadingText;
            return wrapper;
        }

        for (var index in this.images) {
            var image = this.images[index]
            var imageLink = document.createElement('div');

            imageLink.id = "image-wrapper";
            imageLink.innerHTML = "<img src='" + image + "'>";
            imageDisplay.appendChild(imageLink);
            wrapper.appendChild(imageDisplay);
        }

        return wrapper;
    }
});
