var NodeHelper = require("node_helper");
var Twitter = require("twitter");
module.exports = NodeHelper.create({
    start: function() {
        console.log("Starting node_helperz for module [" + this.name + "]");
    },

    socketNotificationReceived: function(notification, payload) {


        if (notification === 'TWITTER_GET') {

            this.getImagesFromJSON(payload);
        }
    },
    sendImages: function(images) {
      var self = this;

        this.sendSocketNotification('TWITTER_GET', images);
    },
    getImagesFromJSON: function(payload) {
        var self = this;
        var imageArray = [];
        var client = new Twitter({
            consumer_key: payload[0],
            consumer_secret: payload[1],
            access_token_key: payload[2],
            access_token_secret: payload[3]
        });
        var params = {
            screen_name: payload[4],
            count: payload[5]
        };
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {

                for (var index in tweets) {
                    tweet = tweets[index]
                    if (tweet.entities.media) {
                        if (tweet.entities.media[0].type == "photo") {
                            imageArray.push(tweet.entities.media[0].media_url)
                        }

                    }
                }
                self.sendImages(imageArray);



            }
        });
    }
});
