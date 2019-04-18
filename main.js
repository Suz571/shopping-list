$(document).ready(function(){

  $('#js-shopping-list-form').on('submit',(event) =>{
    event.preventDefault();
      const newItem = $('#shopping-list-entry').val();
      $('#shopping-list-entry').val('').focus();
      const html = 
        `<div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
          <span class="button-label">delete</span>
          </button>
        </div>`;
          
           $('.shopping-list').append('<li>'+'<span class="shopping-item">'
            + newItem + html + '</li>');

         
         
    });
      
      $('.shopping-list').on('click','.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
    

  $('.shopping-list').on('click','.shopping-item-delete', function(event) {
    //const target= e.currentTarget;
      $(this).closest('li').remove();
  })

  

})
