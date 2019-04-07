$(document).ready(function(){

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
      
        

  $('.shopping-item-toggle').on('click',(e) => {
    const target= e.currentTarget; 
      $('.shopping-item').parent('li').toggleClass('.shopping-item__checked');
  });

  $('.shopping-item-delete').click((e)=>{
    const target= e.currentTarget;
      $(".shopping-item").parent('li').remove();
  })

  

})