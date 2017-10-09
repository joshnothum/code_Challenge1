$(document).ready(readyNow);

function readyNow() {
  console.log('We are Sourced!');
  clickHandler();

}
function clickHandler(){
  $("#generate").on('click', appendDiv);
}
function appendDiv() {
  $(".buttonHolder").append('<div>'+"Hello!"+'</div>');

}
