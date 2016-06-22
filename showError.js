/*
 * showError(elem, text, placeholder)
 * 
 * elem : DOM text element to show error on.
 * text : Error text.
 * placeholder: Default place holder for the element.
 * 
 * Requires DOMUtils.js for addClass and removeClass functions.
 */

function showError(elem, text, placeholder){
    if(!~elem.className.indexOf("error")){
      if(elem.value){
        elem.value += text;
        elem.addClass("error");
        elem.onfocus = function(e){var t = e.target; t.removeClass("error"); t.onfocus = undefined; elem.value = elem.value.replace(text, "");}
      }else{
        elem.setAttribute('placeholder', text);
        elem.className += " error";
        elem.onfocus = function(e){var t = e.target; t.removeClass("error"); t.onfocus = undefined; elem.setAttribute('placeholder', placeholder);}
      }
    }
 }


var css = '.error::-webkit-input-placeholder { color: red; } .error:-moz-placeholder { /* Firefox 18- */ color: red; } .error::-moz-placeholder { /* Firefox 19+ */ color: red; } .error:-ms-input-placeholder { color: red; } .error { border: solid 1px red; color: red; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

