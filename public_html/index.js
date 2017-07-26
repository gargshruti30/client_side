/**
 * Created by sakshi on 14/3/17.
 */
function refreshTodos() {
    $.get('/ecom/all', function (data) {
        let todolist = "";

        for (todo of data) {

            todolist += "<li>";
            todolist += "<span>" + todo.item + "</span>  ";
            todolist += "<span>" + todo.price + "</span>";
            todolist+="<button onclick='increase(`"+todo.item+"`)'>"+ " Add To Cart"+"</button>"
            console.log(todo.item);
            // todolist+="<button onclick='decrease(`"+todo.item+"`)'>"+ "Remove From Cart"+"</button>"
            todolist += "</li>"
        }

        $('#todolist').html(todolist)
    })
}
// function refreshTodos() {
//     let catContainer = $('#catalog-container')
//     catContainer.empty();
//     $.get('/ecom/all', function (data) {
//         let todolist = "";
//
//         for (todo of data) {
//             catContainer.append(
//
//                     `<div class="col-4 p-3">
//  <img class="img-thumbnail"
//             src="http://via.placeholder.com/300x300/223344?text=${todo.item}">
//             <div class="product-data">
//               <div class=""> <span> ${todo.price}</span> </div>
//               <button onclick="increase(${todo.item})" class="btn btn-outline-primary">
//                   Add To Cart
//               </button>
//             </div>
//
//         </div>`
//                 )
//         }
//
//     })
//
//
// }

function increase(ele) {
    console.log(ele);
    $.post('/ecom/inc2', {item : ele}, function()
        {

            console.log("8");
            // console.log(ele.previousSibling.previousSibling.innerhtml);
         //   refreshTodos2();
        }
    )

}

function decrease(Item) {
    $.post('/ecom/dec', {item:Item}, function()
        {
            console.log("4");
            //refreshTodos2();
        }
    )

}
function refreshTodos2() {
    $.get('/ecom/all2', function (data) {
        let todolist2 = "";

        for (todo of data) {
            todolist2 += "<li>";
            todolist2 += "<span>" + todo.item + "</span>  ";
            todolist2 += "<span>" + todo.price + "</span>";
            todolist2 += "<span>" + todo.quantity + "</span>";
            todolist2 += "</li>"
        }

        $('#todolist2').html(todolist2)
    })
}
$(function () {

    refreshTodos();
  //  refreshTodos2();
    $("#view").click(function () {
        console.log("1");
        window.location = "http://localhost:2358/cart"
        $.get('/trycart',  function()
            {
                console.log("2");
            }
        )
    });
});