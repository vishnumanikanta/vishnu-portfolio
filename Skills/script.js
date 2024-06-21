$(document).hide();//hide
$(document).load($.wait(showall,1));//load
$.wait = function( callback, seconds)
  {
    console.log("Waiting for 2sec");
    return window.setTimeout( callback, seconds * 1000 );
  }

function showall()
{
    
    $(document).show();
}