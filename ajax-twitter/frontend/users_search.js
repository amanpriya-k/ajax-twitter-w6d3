const APIUtil = require('./api_util.js');

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
        // this.ul.append(`<li><a href="http://localhost:3000/users/${userId}">${username}</a></li>`);
        // this.ul.append(`<li><a href="${user_url(userId)}">${username}</a></li>`);
      }
    );
  }
  
}

module.exports = UsersSearch;