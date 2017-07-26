/**
 * Created by sakshi on 23/6/17.
 */
/**
 * Created by sakshi on 14/2/17.
 */

const mysql = require('mysql');

let dbconf = {
    host: 'localhost',
    user: 'newuser',
    password: 'Shruti123',
    database: 'authdb'
};

function addNewTask (username,password,nature, done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();
    conn.query(
        "INSERT INTO  login SET ?",
        {username: username, password: password,nature:nature},
        function (err, result, fields) {
           if (err) throw err;
            done(result);
            conn.end();
        }
    );
}

function fetchTasks2(done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();
    console.log("sakshi");

    conn.query(
        "SELECT * FROM login",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            done(result);
            conn.end();
        }
    );
}

/*function setTaskState(Item, p, done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();
    conn.query(
        "UPDATE ecom SET ? WHERE ?",
        [{price: p}, {item: Item}],
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            conn.end();
        }
    );
}

function setdeleteState(Item, p, done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();
    conn.query(
        "DELETE FROM ecom  WHERE ?",
        [{price: p}, {item: Item}],
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            conn.end();
        }
    );
}
*/
module.exports = {
    addNewTask,fetchTasks2
   // , setTaskState,setdeleteState,fetchTasks
};
