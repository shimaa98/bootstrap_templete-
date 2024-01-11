
    // Scroll
    $(window).scroll(function(){
        var scrolling =$(this).scrollTop(),
        slider=$('.banner').offset().top;
        if(scrolling>=slider){               
            $('#Nav').css('top','0');
    
        }
        else {
            $('#Nav').css('top','8%');

         }
    
    })

// Hover
$(document).ready(function(){
    'use strict'
       $('#drop1').hover(function(){
        // show the drop box of Blog
        $('#submenu1').fadeIn()
        $('#submenu2').fadeOut(3000) //Hide item2
    },
    // Hide the drop box of Blog
    function(){
        $('#submenu1').fadeOut()
    })

       $('#drop2').hover(function(){
        // show the drop box of Pages
        $('#submenu2').fadeIn(3000)
        $('#submenu1').fadeOut(3000) //Hide item1
    },
    // Hide the drop box of Pages
    function(){
        $('#submenu2').fadeOut()
    })
});