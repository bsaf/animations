$(document).ready(function(){
  $('.block-list-add-item').click(function() {
    $('<li class="block-list-item block-list-new-item">Item</li>').insertBefore('li:first-child');
  });
});

// test