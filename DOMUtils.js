/*
 * addClass(className)
 *
 * Example: document.getElementById('abc').addClass('hidden')
 *
 */

HTMLElement.prototype.addClass = function(c){
  if(~this.className.split(' ').indexOf(c)){return this;}
  this.className += ' '+c;
  return this;
}

/*
 * removeClass(className)
 *
 * Example: document.getElementById('abc').removeClass('hidden')
 *
 */
HTMLElement.prototype.removeClass = function(c) {
  var x = this.className.split(' ');
  var i = x.indexOf(c);
  if(!~i){
    return this;
  }
  x.splice(x.indexOf(c), 1);
  return this.className = x.join('  '), this;
}

/*
 * hasClass(className)
 *
 * returns true/false.
 *
 * Example: document.getElementById('abc').hasClass('hidden')
 *
 */
HTMLElement.prototype.hasClass = function(c) {
  var x = this.className.split(' ');
  return !!~x.indexOf(c);
}

/*
 * trigger('click')
 *
 * To trigger DOM events like you do in jQuery. 
 *
 * Example: document.getElementById('abc').trigger('click')
 *
 */
HTMLElement.prototype.trigger = function(c) {
  if(!c)
    return this;
  if ("createEvent" in document) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent(c, false, true);
    this.dispatchEvent(evt);
  }
  else
    this.fireEvent(c);
  return this;
}
