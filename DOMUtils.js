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
