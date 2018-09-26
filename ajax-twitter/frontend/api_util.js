const APIUtil = {
  
  followUser: (id) => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'JSON'
    });
  },

  unfollowUser: (id) => {
    return $.ajax ({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'JSON'
    });
  },
  
  searchUsers: (queryVal, success) => {
    return $.ajax({
      url: '/users/search',
      method: 'GET',
      data: {
        query: queryVal
      },
      dataType: 'JSON'
    }).then(success, (error) => console.log(error));
  }
};

module.exports = APIUtil;