// function delet() {
//     console.log("inside del");
//     $.post('/x', {item: $('#ui').val(), price: $('#p').val()}, function()
//         {
//             console.log("4");
//            // refreshTodos();
//         }
//     )
//
// }

$(function () {

    // function refresh1(data) {
    //     window.location = "http://localhost:3008/professor"
    //     alert("signedin");
    //     console.log(data);
    // }

    $('#login').click(function () {
        console.log("hee");
        window.location = "http://localhost:2358/catalog"
    });


});