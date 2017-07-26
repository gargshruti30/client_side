/**
 * Created by sakshi on 14/3/17.
 */
/**
 * Created by sakshi on 14/2/17.
 */
/**
 * Created by championswimmer on 12/02/17.
 */

const mysql = require('mysql');

let dbconf = {
    host: 'localhost',
    user: 'newuser',
    password: 'Shruti123',
    database: 'ecomdb'
};

let dbconf1 = {
    host: 'localhost',
    user: 'newuser',
    password: 'Shruti123',
    database: 'eshopdb'
};



function fetchTasks(done) {
    let conn = mysql.createConnection(dbconf);
    conn.connect();
    conn.query(
        "SELECT * FROM ecom",
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            conn.end();
            console.log("fetchtaskecomdb");
        }
    );
}
function fetchTasks2(done) {
    let conn = mysql.createConnection(dbconf1);
    conn.connect();
    conn.query(
        "SELECT * FROM eshop",
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            console.log("fetchtaskecomdb");
            conn.end();
        }
    );
}

function setinc2(Item, done) {
    console.log(Item)
    let conn = mysql.createConnection(dbconf1);
    conn.connect();
    conn.query(
        "SELECT * FROM eshop WHERE ?",
        [ {item: Item}],
        function (err, result, fields) {
           // console.log(err);
            if (err) throw err;
            console.log(result)
            done(result);
            // setdeleteState(Item, function (result) {
            //
            // });
            // addNewTask(Item,result[0].price,result[0].quantity+1, function (result) {
            //     console.log("finished");
            // });
            setTaskState(Item,result[0].quantity+1, function (result) {
                console.log("finished");
            })
            conn.end();
        }
    );
}

function setdec2(Item, done) {
    let conn = mysql.createConnection(dbconf1);
    conn.connect();
    conn.query(
        "SELECT *FROM eshop WHERE ?",
        [ {item: Item}],
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            // setdeleteState(Item, function (result) {
            //
            // });
            // addNewTask(Item,result[0].price,result[0].quantity-1, function (result) {
            //     console.log("finished");
            // });
            setTaskState(Item,result[0].quantity-1, function (result) {
                console.log("finished");
            });
            conn.end();
        }
    );
}

function addNewTask (item,p,quantity, done) {
    let conn = mysql.createConnection(dbconf1);
    console.log("insert");
    conn.connect();
    conn.query(
        "INSERT INTO eshop SET ?",
        {item: item, price: p,quantity:quantity},
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            conn.end();
        }
    );
}
function setdeleteState(item,done) {
    console.log("insisedeletestate");
    let conn = mysql.createConnection(dbconf1);
    conn.connect();
    conn.query(
        "DELETE FROM eshop WHERE ?",
        [ {item: item}],
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            console.log("finished");
            conn.end();
        }
    );
}
function setTaskState(item,quantity, done) {
    console.log("insiseupdatestate");
    console.log(item);
    console.log(quantity);
    let conn = mysql.createConnection(dbconf1);
    conn.connect();
    conn.query(
        "UPDATE eshop SET ? WHERE ?",
        [ {quantity:quantity},{item: item}],
        function (err, result, fields) {
            if (err) throw err;
            done(result);
            conn.end();
        }
    );
}
module.exports = {
    fetchTasks, setinc2,fetchTasks2,setdec2
};