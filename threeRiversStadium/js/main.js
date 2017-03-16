$(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });

 var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.446317, lng:  -80.014097},
          zoom: 14
        });
      }

    
