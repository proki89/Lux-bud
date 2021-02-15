// $('.team-carousel').slick({
//     autoplay: true,
//     autoplaySpeed: 3500,
//     mobileFirst: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2
//             }
//         },
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 1600,
//             settings: {
//                 slidesToShow: 4
//             }
//         }
//     ]
// });

$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
 
  
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoPlay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true

  });
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  });

  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });



$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
    
// NAVBAR ADD SHADOW
document.addEventListener('DOMContentLoaded', function () {

  
  // dodaje cień do nawigacji
  const nav = document.querySelector('.navbar')
  // const aboutTitle = document.querySelector('.about-title')

  // function addWrapper() {
  //     if (window.resizeBy <= 579) {
  //         aboutTitle.classList.add('wrapper')
  //     } else {
  //         aboutTitle.classList.remove('wrapper')
  //     }
  // }
  // window.addEventListener('resize', addWrapper)
  

  function addShadow() {
    if (window.scrollY >= 120) {
      nav.classList.add('add-shadow')
    } else {
      nav.classList.remove('add-shadow')
    }
  }
  window.addEventListener('scroll', addShadow)
  // NAVBAR TOGGLER FIX 
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
});

const element = document.querySelector('.shake-it')

function shakeIt() {
  if (element.classList.contains('active')) {
    element.classList.add('shake-it')
  }
};
document.addEventListener('click', shakeIt)

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('.slick-gal').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 8,
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  
});

// const mymap = L.map('mapid').setView([51.11051, 17.03235], 13);

// const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const tiles = L.tileLayer(tileUrl, {attribution});

// const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

// async function getISS() {
//   const response = await fetch(api_url);
//   const data = await response.json();
//   const { latitude, longitude } = data;

//   L.marker([latitude, 51.11051])
// }

const map = L.map("map").setView([51.11052, 17.03202], 18);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18
}).addTo(map);

L.marker([51.11052, 17.03202]).addTo(map);
marker.bindPopup("<p>jesteśmy tutaj!</p>").openPopup();







// function initMap() {

//   const casa = {
//     lat: 51.110514803555716,
//     lng: 17.03207125877182
//   };

//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 19,
//     center: casa,
//   });

//   const marker = new google.maps.Marker({
//     position: casa,
//     map: map,
//   });
// }
