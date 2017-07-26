/**
 * Created by sakshi on 14/3/17.
 */

const express = require('express');
const app = express();
const db = require('./db');
const db1= require('./logindb');
const path = require('path');
// const session = require('express-session')
// const cp = require('cookie-parser');
// const passport = require('./passport.js')
var request = require('request');
const bodyParser = require('body-parser');
// app.use(cp('somesecret'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(session({
//     secret: 'somesecret',
//     resave: false,
//     saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());
const Razorpay = require('razorpay')
var rzp= new Razorpay({
    key_id: 'rzp_test_zcMpXgB9IwLVoB',
    key_secret: 'h4iDtRUc6kSgv5iRuBRmyac4'
})
app.get('/ecom/all', (req, res) => {
    db.fetchTasks(function (result) {
    console.log(result);
    res.send(result)
});

});
app.get('/ecom/all2', (req, res) => {
    db.fetchTasks2(function (result) {
        console.log(result);
        res.send(result)
    });

});
app.post('/ecom/inc2', (req, res) => {
    // console.log(req.body.item );
    db.setinc2(req.body.item,
        function(result) {
            res.send(result)
        }
    )
});

app.post('/ecom/dec', (req, res) => {
    console.log(req.body.item );
    db.setdec2(req.body.item,
        function(result) {
            res.send(result)
        }
    )
});
app.get('/trycart', function(req, res){
    console.log("redirecting");
    res.redirect('/cart');
});
app.post('/add', (req, res) => {

    console.log("sakshi");
    db1.addNewTask(req.body.username,req.body.password, req.body.nature,function (result) {
        res.send(result);
        console.log("result");
    })
});


// function checkLoggedIn(req, res, next) {
//     console.log('check logged in');
//     console.log(req.user);
//     if (req.user) {
//         next();
//     } else {
//         res.status(404).send('Unauthorised')
//     }
// }
app.post('/purchase', (req, res) => {
    console.log("sakshi inside purchase");
    let f=req.body.razorpay_payment_id;
    console.log(f);
    let x=`https://rzp_test_zcMpXgB9IwLVoB:h4iDtRUc6kSgv5iRuBRmyac4@api.razorpay.com/v1/payments/${f}`;
    console.log(x);
    request(x, function (error, response, body) {
        console.log('Response:', body);
        let p=JSON.parse(body).amount;
        console.log("here");
        console.log(p);
        rzp.payments.capture(req.body.razorpay_payment_id, p)
            .then((data) => {
                // success

            }).catch((error) => {
            // error
        })
    });
})

app.use('/catalog1', express.static(path.join(__dirname, "public_html")));
app.use('/cart1',express.static(path.join(__dirname, "public_html2")));//checked logged in missing
// express.static(path.join(__dirname, "public_html2"))

// app.post('/login2', passport.authenticate('local', {
//         failureRedirect: '/catalog1',
//         successRedirect: '/cart1'
//     })
// );

app.use('/sign1',express.static(__dirname + '/signup_html' ));
app.use('/login1',express.static(__dirname + '/login_html' ));
app.get('/signin', function(req, res){
    res.redirect('/sign1');
});
app.get('/login', function(req, res){
    res.redirect('/login1');
});
app.use('/', express.static(__dirname + "/start_html"));
app.use('/cart', express.static(__dirname + "/public_html2"));
app.use('/catalog', express.static(__dirname + "/public_html"));
app.use('/pay', express.static(__dirname + "/pay_html"));
app.listen(2358, () => {console.log('Started on 2358')});