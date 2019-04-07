$(document).ready(function(){
  /*
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const listItem = $('.js-shopping-list-entry').val();

    $('#shopping-list-entry').val('');


    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });
  */

  $('#js-shopping-list-form').on('submit',(event) =>{

      const newItem = $('#shopping-list-entry').val();
      const html = 
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
          <span class="button-label">delete</span>
          </button>
        </div>;
          
           $('.shopping-list').append('<li>'+'<span class="shopping-item">'
            + newItem + html + '</li>');

         $('#shopping-list-entry').val('').focus();
         $(event).preventDefault();
    });
      
      /* $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  */  

  $('.shopping-item-toggle').on('click',(e) => {
    const target= e.currentTarget; 
      $('.shopping-item').parent('li').toggleClass('.shopping-item__checked');
  });
  // $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    //$(this).closest('li').remove();
 // });

  $('.shopping-item-delete').click((e)=>{
    const target= e.currentTarget;
      $(".shopping-item").closest('li').remove();
  })

  

})