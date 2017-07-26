/**
 * Created by sakshi on 17/7/17.
 */
// function refreshTodos2() {
//     $.get('/ecom/all2', function (data) {
//         let todolist2 = "";
//
//         for (todo of data) {
//             todolist2 += "<li>";
//             todolist2 += "<span>" + todo.item + "</span>  ";
//             todolist2 += "<span>" + todo.price + "</span>";
//             todolist2 += "<span>" + todo.quantity + "</span>";
//             todolist2 += "</li>"
//         }
//
//         $('#todolist2').html(todolist2)
//     })
// }
function decrease(Item) {
    $.post('/ecom/dec', {item:Item}, function()
        {
            console.log("4");
            refreshTodos2();
        }
    )

}
function refreshTodos2() {

    console.log("4");
    $.get('/ecom/all2', function (data) {
        let cartTable = $('#cart-table');
        cartTable.empty();
        cartTable.append($(`
        <thead>
        <tr>
            <!--<th>S.No</th>-->
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
        </tr>
        </thead>
  `));
        var ii =1;
        for (todo of data ) {
            cartTable.append(
                $(`<tr>
            <!--<td>'+"ii"+'</td>-->
            <td>${todo.item}</td>
            <td>Rs. ${todo.price}</td>
            <td> ${todo.quantity}</td>
             // <td><button onclick='decrease(${todo.item})'class="fa fa-plus-circle"></button></td>
        </tr>`)
            );
            ii++;
        }
    })
}


$(function () {
    refreshTodos2();
    $("#back").click(function () {
        console.log("1");
        window.location = "http://localhost:2358/catalog"

    });
    $("#pay").click(function () {
        console.log("1");
        window.location = "http://localhost:2358/pay"

    });
});

