const APIUtil = require('./api_util.js');

class FollowToggle {
  
  constructor(el, options) {
    this.$el = $(el);
    this.followState = this.$el.data("initial-follow-state") || options.followState;
    this.followeeId = this.$el.data("followee-id") || options.followeeId;
    this.render();
    
    this.$el.on('click', e => this.listener(e) );
  }
  
  render() {
    if(this.followState === "following") {
      this.$el.text("following...");
      this.$el.prop('disabled', true);
    } else if (this.followState === "unfollowing"){
      this.$el.text("unfollowing...");
      this.$el.prop('disabled', true);
    } else if (this.followState === "unfollowed") {
      this.$el.text("Follow");
      this.$el.prop('disabled', false);
    } else {
      this.$el.text("Unfollow");
      this.$el.prop('disabled', false);
    }
  }
  
  listener(event) {
    event.preventDefault();
    
    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      
      APIUtil.followUser(this.followeeId).then(
        (res) => {
          this.$el.data("initial-follow-state", "followed");
          this.followState = this.$el.data("initial-follow-state");
          this.render();
        }
      );
    } else {
      this.followState = "unfollowing";
      this.render();
      
      APIUtil.unfollowUser(this.followeeId).then(
        (res) => {
          console.log(res);
          this.$el.data("initial-follow-state", "unfollowed");
          this.followState = this.$el.data("initial-follow-state");
          this.render();
        }, ( (error) => {console.log(error);} ));
    }
  }
}

module.exports = FollowToggle;