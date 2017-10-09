$(document).ready(readyNow);

function readyNow() {
  console.log('We are Sourced!');
  clickHandler();

}
function clickHandler(){
  $("#generate").on('click', appendDiv);
}
function appendDiv() {
  //var $div= $(".buttonHolder").append('<div>'"hello"'</div>');
  var $div = $('<div>"hello!"</div>');
  $div.append('<p></p>');
$(".buttonHolder").append($div);
}
