
 const navbtn = document.querySelector(".hamburger");
 navbtn.addEventListener("click", function(){
     document.querySelector('.menu_list').classList.toggle("active");
 });
 var deadline = new Date("Aug 21, 2025 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("demo").innerHTML = days  ;
document.getElementById("demo2").innerHTML = hours;
document.getElementById("demo3").innerHTML = minutes;
document.getElementById("demo4").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
(function(){
    // setup your carousels as you normally would using JS
    // or via data attributes according to the documentation
    // https://getbootstrap.com/javascript/#carousel
    $('#carousel123').carousel({ interval: 2000 });
    $('#carouselABC').carousel({ interval: 3600 });
  }());
  
  (function(){
    $('.carousel-showmanymoveone .item').each(function(){
      var itemToClone = $(this);
  
      for (var i=1;i<4;i++) {
        itemToClone = itemToClone.next();
  
        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }
  
        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-"+(i))
          .appendTo($(this));
      }
    });
  }());
// let car1 = 5; //number
// let car2= "5" //string

// if(car1 === car2){
//     console.log(`1 is true`);
// } else if(car1 == car2){
//  console.log(`2nd is true`);
// } else{
//     console.log(`default`);
// }
//  function abc(a,b){
//     debugger;
//     return a+b;
//  }
//  var sum= abc(5,7);
//  console.log(sum);
   



   