var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {  // a function which produces all the messages
      db.query("SELECT * FROM messages", (err, message) => {
    
        if (err) throw err;
        
        callback(null, message);
      });
    }, 
    post: function () {
      db.query(`INSERT INTO messages (user_id, message, room_id) value ("${userid}", "${text}", "${roomid}")`, (err, message) => {
        if (err) throw err;
        callback(null, message);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query("SELECT * FROM users", (err, user) => {
        if (err) throw err;
        
        callback(null, user);
      });
    },
    post: function () {
      db.query(`insert into users (username) value("${username}")`)
    }
  }
};

