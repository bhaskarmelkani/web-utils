/*
 * format(elem)
 *
 * Function to format the input field inputting Credit/Debit Card Number. 
 *
 * Eg:
 *    HTML:- <input id="debit-card-no"  type="tel" pattern="[0-9]*"  maxlength="23" placeholder="Debit Card Number" />
 *    Javascript: format(document.getElementById("debit-card-no"));
 * 
 */
function format(elem){
  if(!elem){
    return;
  }
  var ml = elem.getAttribute('maxlength') || Infinity;
  elem.onkeyup = function(e){
    var v = this.value, k = e.keyCode, cp, l = v.length, lf;

    if(k>47 && k<91 && v.length <= ml && !v.match(/^([0-9]{4}\s)+[0-9]{1,4}$/)){
      cp = this.selectionStart; 
      v = v.replace(/\s/g, '').split('');
      v.length>4&&v.splice(4, 0, ' ');
      v.length>9&&v.splice(9, 0, ' ');
      v.length>14&&v.splice(14, 0, ' ');
      v.length>19&&v.splice(19, 0, ' ');
      v = v.join('');
      this.value=v;
      lf = v.length;
      this.selectionEnd = this.selectionStart = cp+(lf-l);
    }
  }
  return elem;
}

