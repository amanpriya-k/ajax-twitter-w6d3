const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  
  constructor(el) {
    // debugger
    this.$el = $(el);
    this.input = this.$el.find('input');
    this.ul = this.$el.find('ul');
    
    this.$el.keypress(e => this.handleInput(e) );
  }
  
  handleInput(event) {
    // debugger 
    APIUtil.searchUsers(this.input.val(), (res) => this.renderResults(res));
  }
  
  renderResults(userHash) {
    this.ul.empty();
    Object.keys(userHash).forEach ( 
      (key) => {
        let username = userHash[key].username;
        let userId = userHash[key].id;
        let followState = userHash[key].followed;
        this.ul.append(`<li><a href="/users/${userId}">${username}</a></li>`);
        const $b = $(`<button class="follow-toggle" type="button" name="button"></button>`);
        this.ul.append($b);
        
        new FollowToggle($b, {followState: followState, followeeId: userId});
      }
    );
  }
  
}

module.exports = UsersSearch;