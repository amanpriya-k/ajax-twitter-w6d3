const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$( () => {
  $('.follow-toggle').each (
    (i, button) => {
      new FollowToggle(button);
    }
  );
  $('.users-search').each (
    (i, nav) => {
      new UsersSearch(nav);
    }
  );
});