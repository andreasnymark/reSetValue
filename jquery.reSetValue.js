/*
**  Copyright 2010, Andreas Johansson
**  Licensed under a MIT license, http://ibuypink.com/mit-license/
**
*/
(function($){ 
  $.fn.reSetValue = function() {
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