//  Store Body
var $body = document.getElementsByTagName('body')[0];

function fadeBackground(element) {
  element.classList.add('background-fade');
}

window.addEventListener("load", function(){
  setTimeout(fadeBackground($body), 1000);
});
