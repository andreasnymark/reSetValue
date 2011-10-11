/**
 *
 * jquery.reSetValue v1.0
 *
 * Copyright 2010, Andreas Johansson
 * Licensed under the MIT license, http://ibuypink.com/mit-license/
 * 
 * What: Resets an input or an textarea when focused. If not filled 
 * with a new value, it resets to default. If an input is empty 
 * by default, nothing will happen. Works much like the HTML5 input 
 * placeholder param.
 * 
 * How-to: $('input, textarea').reSetValue();
 *
 **/
(function($){ 
  jQuery.fn.reSetValue = function() {
    return this.each(function() { 
      var el = $(this);  
      var defVal = el.val();
      el.focus(function() {
        var newVal = el.val();
        if (defVal==newVal) el.val('');
      }).blur(function() {
        if(el.val()=='') el.val(defVal);
      });
    });
  };
})(jQuery);