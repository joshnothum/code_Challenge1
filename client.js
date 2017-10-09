$(document).ready(readyNow);

function readyNow() {
  console.log('We are Sourced!');
  clickHandler();

}
function clickHandler(){
  $("#generate").on('click', appendDiv);
  $("#generate").on('click', clickCounter);
  $("#container").on('click',"#swapDiv" ,colorChanger);
  $("#container").on('click',"#deleteDiv", deleteDiv);
}
var clicks = 0;

function clickCounter(){
  clicks = clicks+1;
  return clicks;
}

function appendDiv() {
  //var $div= $(".buttonHolder").append('<div>'"hello"'</div>');
  var $div = $('<div class ="newDiv">"hello!"</div>');
  $div.append('<p class="clicks">'+ "Clicks:" + clicks + '</p>');
  console.log(clicks);
  $div.append('<button id ="swapDiv">'+"Swap"+'</button>');
  $div.append('<button id="deleteDiv">' +"Delete"+ '</button>');
$(".buttonHolder").append($div);
}
function colorChanger(){
  $('.newDiv').css("background-color","yellow");
}
function delteDiv(){
  $(".newDiv").remove();
}
