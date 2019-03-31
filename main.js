$(document).ready(function(){

    $('#js-shopping-list-form').on('submit',() =>{
        
        let newItem = $('#shopping-list-entry').val();
            
             $('.shopping-list').append('<li>'+'<span class="shopping-item">'
              + newItem + 
             '</span>'+'<div class="shopping-item-controls">'+'
             <button class="shopping-item-toggle">'+
               '<span class="button-label">check</span>'+
            '</button>'+
             '<button class="shopping-item-delete">'+
               '<span class="button-label">delete</span>'+
             '</button>'+
           '</div>'+'</li>');
           $('#shopping-list-entry').val('').focus();
           //$(event).preventDefault();
      });
        
          

    $('.shopping-item-toggle').on('click',() => {
        $('.shopping-item').closest('li').toggleClass('.shopping-item_checked');
    });

    $('.shopping-item-delete').click(()=>{
        $(".shopping-item").closest('li').remove();
    })

    

})