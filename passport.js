/**
 * Created by championswimmer on 21/07/17.
 */
// const jquery = require('./jquery.js')
const db1= require('./logindb');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const users = require('./users')

passport.serializeUser(function (user, done) {
  console.log('serialize');
  console.log("*****************")
    console.log( user);
    console.log("*****************")

  done(null, user)
});

passport.deserializeUser(function (user, done) {
  console.log('deserialize');
  done(null, user)
});


// const localStrategy = new LocalStrategy(
//     function (username, password, done) {
//
//         console.log("4");
//         $.get('/ecom/all2', function (users) {
//             console.log('local strategy');
//             for (let i in users) {
//                 if (users[i].username == username) {
//                     if (users[i].password == password) {
//                      //   users[i].id = i;
//                         done(null, users[i])
//                     } else {
//                         done(null, false, {message: 'Wrong password'})
//                     }
//                 }
//             }
//             done(null, false, {message: 'User not found'})
//         });
// });


// function fetchTasks2(done) {
//     let conn = mysql.createConnection(dbconf);
//     conn.connect();
//     console.log("sakshi");
//
//     conn.query(
//         "SELECT * FROM login",
//         function (err, users, fields) {
//             if (err) throw err;
//             const localStrategy = new LocalStrategy(
//                 function (username, password, done) {
//                     console.log('local strategy');
//                     for (let i in users) {
//                         if (users[i].username == username) {
//                             if (users[i].password == password) {
//                                 // users[i].id = i;
//                                 done(null, users[i])
//                             } else {
//                                 done(null, false, {message: 'Wrong password'})
//                             }
//                         }
//                     }
//                     done(null, false, {message: 'User not found'})
//                 });
//             done(users);
//             passport.use(localStrategy);
//             conn.end();
//         }
//     );
// }


    const localStrategy = new LocalStrategy(
                function (username, password, done) {

                    console.log(username);
                    console.log(password);

                    db1.fetchTasks2(function (users) {
                    console.log('local strategy');
                    for (let i in users) {
                        if (users[i].username == username) {
                            if (users[i].password == password) {
                                // users[i].id = i;
                                console.log("reached");
                                 return done(null, users[i])
                            } else {
                                console.log("hello");
                                return done(null, false, {message: 'Wrong password'})
                            }
                        }
                    }
                    return done(null, false, {message: 'User not found'})
                });
           // done(users);


});

passport.use(localStrategy);

module.exports = passport;