/*$(function(){
      $(".slides").slides({
		 
        play: 5000,
        pause: 2500,
		effect: 'slide',
        hoverPause: true,
		currentClass: 'current',
		 
		        pagination: true
      });
    });*/
$( window ).load( function() {
  $('#top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    $('#contactbtn').click(function () {
      $('body,html').animate({
        scrollTop: 2206
      }, 800);
      return false;
    });

    $('#subsbtn').click(function () {
      $('body,html').animate({
        scrollTop: 2806
      }, 800);
      return false;
    });

    $("#slides").slidesjs({
        width: 700,
        height: 680,
        pagination: true,
        play: {
          active: true,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
          effect: "slide",
            // [string] Can be either "slide" or "fade".
          interval: 5000,
            // [number] Time spent on each slide in milliseconds.
          auto: true,
            // [boolean] Start playing the slideshow on load.
          swap: true,
            // [boolean] show/hide stop and play buttons
          pauseOnHover: false,
            // [boolean] pause a playing slideshow on hover
          restartDelay: 2500
            // [number] restart delay on inactive slideshow
        }
      });

    
  });

/*    $(function(){
      

       /* ------------------------------------------------------------------------ */
  /* TWITTER FEED */
  /* ------------------------------------------------------------------------ 
    if ($('#tweet').length) {
      $('#tweet').tweet({
          username: 'juan89andres',
          join_text: 'auto',
          avatar_size: 0,
          count:1,
          auto_join_text_default: ' we said, ',
          auto_join_text_ed: ' we ',
          auto_join_text_ing: ' we were ',
          auto_join_text_reply: ' we replied to ',
          auto_join_text_url: ' we were checking out ',
          loading_text: 'Loading tweets...'
        });
    };

    });*/

jQuery(function($)  
{
    $("#contact-form").submit(function()
    {
        
        var name = $("#contact-name").val(); // get name field value
        var email = $("#contact-email").val(); // get email field value
        var msg = $("#contact-msg").val(); // get message field value
        var phone = $("#contact-phone").val(); // get message field value
        console.log(email);
        console.log(name);
        console.log(msg);
        console.log(phone);
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'DyhACcvr5G_4UzAEb12dgg',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Contact BookIT',
                    'html': '<strong>' + name + '<br/><br/>' + phone + '<br/><br/>' + email +'</strong><br/><br/>' + msg,
                    'to': [
                    {
                        'email': 'jandres.rodriguezg@gmail.com',
                        'name': 'Juan Andres Rodriguez',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
          console.log("done");
            alert('Your message has been sent. Thank you!'); // show success message
            $("#contact-name").val(''); // reset field after successful submission
            $("#contact-email").val(''); // reset field after successful submission
            $("#contact-msg").val(''); // reset field after successful submission
            $("#contact-phone").val(''); // reset field after successful submission
        })
        .fail(function(response) {
          console.log("errorr");
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    });
});

jQuery(function($)  
{
    $("#sub-form").submit(function()
    {
        var email = $("#sub-email").val(); // get email field value
        var name = $("#sub-name").val(); // get name field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'DyhACcvr5G_4UzAEb12dgg',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Subscribe BookIT',
                    'html': '<strong>' + name + '<br/><br/>' +  email +'</strong><br/><br/>' + 'I want to receive news about the app!',
                    'to': [
                    {
                        'email': 'jandres.rodriguezg@gmail.com',
                        'name': 'Juan Andres Rodriguez',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            alert('Your message has been sent. Thank you!'); // show success message
            $("#sub-name").val(''); // reset field after successful submission
            $("#sub-email").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    });
});


