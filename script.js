let date = new Date;
let hour = date.getHours();
const checkbox = document.getElementById('toggle');



// var str = "<p class = \"introhello\"><h1 class=\"text-primary\">Hello! <span id = \"emoji\" class = \"emoji animated\" onmouseover=\"bounce();\">&#x1f44b;&#x1f3fe;</span></h1> </p> <h2 class=\"introtagline\">I'm<span class=\"text-primary\"> Kenechukwu Ajufo</span>, a web developer based in Lagos, Nigeria. I am passionate about <strong>everything related to web development.</strong></h2>",
//     i = 0,
//     isTag,
//     text;

// (function type() {
//     text = str.slice(0, ++i);
//     if (text === str) return;
    
//     document.getElementById('typewriter').innerHTML = text;

//     var char = text.slice(-1);
//     if( char === '<' ) isTag = true;
//     if( char === '>' ) isTag = false;

//     if (isTag) return type();
//     setTimeout(type, 145);
// }());

if (hour <= 7 || hour >= 18) {
    document.getElementById('pagestyle').setAttribute('href', "dark.css");
}
else {
    document.getElementById('pagestyle').setAttribute('href', "style.css");
    document.getElementById("toggle").checked = false;
}

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    document.getElementById('pagestyle').setAttribute('href', "dark.css");
  } else {
    document.getElementById('pagestyle').setAttribute('href', "style.css");
  }
})

function shake () {
  const hand = document.getElementById("emoji");
  if (!hand.classList.contains('tada')) {
    hand.classList.toggle("tada", true); 
  }
  else if (hand.classList.contains('tada')) {
    unshake();
  }
}


function unshake() {
  const hand = document.getElementById("emoji");
  hand.classList.toggle("tada", false);
}

const hand = document.getElementById("emoji");


var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['everything related to web development.', 'building Recommender Systems.', 'Product Management.', 'Machine Learning.'],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
  });

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();


var arr = [
    { "Name": "Sentiment Analysis of Hotel Reviews using Deep Learning", "Link": "https://github.com/kxnxchukwu/DMML2Project", 'Description': '(Team of three) performed a sentiment analysis on Trip Advisor Reviews dataset. The project focused on using two Deep Learning models (LSTM and BERT) to predict the hotel’s rating using it’s reviews.', 'Tech': 'scikit-learn | TensorFlow | PyTorch | Keras'},
    { "Name": "Analysis on the Relationship between Population Growth Rate, Life Expectancy and the Gross National Income", "Link": "https://github.com/kxnxchukwu/DAPProject", 'Description': '(Team of three) analyzed three public datasets from ArcGIS Hub & Datahub. The objective of the project was to demonstrate the team’s knowledge of data wrangling (transforming data from one form to another) and Relational (PostgreSQL) & NoSQL (MongoDB) databases.', 'Tech': 'pymongo | psycopg2 | Pandas | requests'},
    { "Name": "Exploring Student Academic Performance in Portugal using Machine Learning", "Link": "https://github.com/kxnxchukwu/DAPAProject", 'Description': 'Built a C5.0 Decision Tree Model to predict student academic performance.', 'Tech': 'R | R Studio | C50 | printr'},
    { "Name": "London Underground High-Speed Line Simulation and Optimization", "Link": "https://github.com/kxnxchukwu/MSOProject", 'Description': 'The project involved discrete event simulation and optimization. The project modelled, simulated and optimized the London Old Oak Commons to Birmingham Interchange section of the London Underground high-speed line.', 'Tech': 'Python | SimPy | Pandas | Numpy'},
  ];

$.each(arr, function (i) {
    var templateString = '<div style="margin:20px" class="card col-lg-5 mx-auto col-sm-12" style="width: 18rem"> <div class="card-body"> <div class="card-title d-flex"><i class="fas fa-folder-open fa-3x mr-auto"></i>  <a href='+ arr[i].Link + '><i class="fab fa-github fa-3x ml-auto"></i></a> </div> <h6 class="card-subtitle mt-2 mb-2 text-muted">' + arr[i].Name +  '</h6> <p class="card-text">' + arr[i].Description + '</p> <p class="card-text text-muted">' + arr[i].Tech + '</p></div></div> ';
    $('#test').append(templateString);
})

