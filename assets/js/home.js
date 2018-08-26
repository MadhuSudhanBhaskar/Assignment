$( document ).ready(function() {

    //Key up for form elements check the status
    //and enable the lable(hide and show)
    $( '#username' ).keyup(function(eventData) {
        inputLable(this.value, 'lable.username');
    });

    $( '#password' ).keyup(function(eventData) {
        inputLable(this.value, 'lable.password');
    });

    //Ganeric function to handel adding and removing class
    function inputLable(value, elementClass) {
        if(value) {
            $(elementClass).removeClass( "noLable", 2000, "linear" );
        } else {
            $(elementClass).addClass( "noLable", 2000, "linear" );
        }
    }

    //Click on search just show the input element and while 
    //closing or opening clean the input values
    $('.carrefour-header-search').click(function() {
        $('.home-input').val('');
        $('.home-input').toggleClass('initial', 1000, "easeOutSine");
    });

    //on click of the form hanel the validation and 
    //make a ajax call for dummy localhost
    $('#submit').click(function(){

        var username = $('#username').val();
        var password = $('#password').val();
        if(!username && !password) {
            $("#username, #password").each(function(index, elm){
                error(elm.id);
              });
            return;
        }

        if(!username) {
            error('username')
            return;
        } else {
            removeAddedClass('username');
        }
        if(!password) {
            error('password');
            return;
        } else {
            removeAddedClass('password');
        }

        $.ajax({
            url: 'http://localhost:3000',
            data: { name: "care", location: "123" },
            error: function() {
               alert('Something went wrong!');
            },
            dataType: 'jsonp',
            success: function(data) {
               // Login
            },
            type: 'POST'
         });
    });

    function error(elementName) {
        $('#'+elementName).addClass( "carrefour-input-error", 2000, "linear" );
        $('span.error.'+elementName).removeClass( "noerror", 2000, "linear" );
    }
    function removeAddedClass(elementName) {
        $('#'+elementName).removeClass( "carrefour-input-error", 2000, "linear" );
        $('span.error.'+elementName).addClass( "noerror", 2000, "linear" );
    }
});