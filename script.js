let date = new Date();
let hour = date.getHours();
const checkbox = document.getElementById("toggle");

/* 
var str = "<p class = \"introhello\"><h1 class=\"text-primary\">Hello! <span id = \"emoji\" class = \"emoji animated\" onmouseover=\"bounce();\">&#x1f44b;&#x1f3fe;</span></h1> </p> <h2 class=\"introtagline\">I'm<span class=\"text-primary\"> Kenechukwu Ajufo</span>, a web developer based in Lagos, Nigeria. I am passionate about <strong>everything related to web development.</strong></h2>",
   i = 0,
    isTag,
    text;

(function type() {
text = str.slice(0, ++i);
if (text === str) return;
    
 document.getElementById('typewriter').innerHTML = text;

  var char = text.slice(-1);
  if( char === '<' ) isTag = true;
   if( char === '>' ) isTag = false;

   if (isTag) return type();
     setTimeout(type, 145);
}());

*/

checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    document
      .getElementById("pagestyle")
      .setAttribute("href", "/styles/dark.css");
    document.getElementById("toggle").checked = true;
  } else {
    document
      .getElementById("pagestyle")
      .setAttribute("href", "/styles/style.css");
    document.getElementById("toggle").checked = false;
  }
});

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.getElementById("pagestyle").setAttribute("href", "styles/dark.css");
  document.getElementById("toggle").checked = true;
} else {
  if (hour <= 7 || hour >= 18) {
    document
      .getElementById("pagestyle")
      .setAttribute("href", "/styles/dark.css");
    document.getElementById("toggle").checked = true;
  } else {
    document
      .getElementById("pagestyle")
      .setAttribute("href", "/styles/style.css");
    document.getElementById("toggle").checked = false;
  }
}

function shake() {
  const hand = document.getElementById("emoji");
  if (!hand.classList.contains("tada")) {
    hand.classList.toggle("tada", true);
  } else if (hand.classList.contains("tada")) {
    unshake();
  }
}

function unshake() {
  const hand = document.getElementById("emoji");
  hand.classList.toggle("tada", false);
}

const hand = document.getElementById("emoji");

var typed = new Typed(".element", {
  // Waits 1000ms after typing "First"
  strings: ["Web Development.", "Machine Learning.", "Business Intelligence"],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
});

var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();