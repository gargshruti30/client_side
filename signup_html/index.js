/**
 * Created by sakshi on 24/6/17.
 */
$(function () {

    $("#login").click(function () {
        console.log("1");
        // alert("The paragraph was clicked.");
        $.post('/add', {username: $('#email').val(), password: $('#password').val(),nature:$('#nature').val()}, function()
            {
                console.log("2");
               // refreshTodos();
            }
        )
    });



});