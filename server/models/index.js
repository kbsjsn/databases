var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {  // a function which produces all the messages
      db.query("SELECT * FROM MESSAGES", (err, message) => {
        if (err) throw err;
        callback(message);
      });
    }, 
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

