// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import "bootstrap"

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(document).ready(function(){
  $('.articles-prez').click(function(){
    $(this).toggleClass("spread");
  });
});

$(document).ready(function(){
  $('#artistes').click(function(){
    $(this).toggleClass("card-spread");
  });
});

$(document).ready(function(){
  $('#catalogue').click(function(){
    $(this).toggleClass("card-spread");
  });
});

// $(document).ready(function(){
//   $('#evenements').click(function(){
//     $(this).toggleClass("card-spread");
//   });
// });

// $(document).ready(function(){
//   $('#appels-a-projet').click(function(){
//     $(this).toggleClass("card-spread");
//   });
// });

$(document).ready(function(){
  $('.to_flip').click(function(){
    if (document.querySelector('.is-flipped')) {
      $(this).toggleClass("is-flipped");
    }
    else {
      $(this).toggleClass("is-flipped");
      let victoire = Math.floor((Math.random() * 100) + 1);
      if (victoire > 50) {
        document.getElementById('card-back-game').innerHTML = 'Victoire !';
      }
      else { document.getElementById('card-back-game').innerHTML = 'perdu !'; }
      }
    });
});


