# Utilities 

## [DOMUtils.js](https://github.com/bhaskarmelkani/js-utils/blob/master/DOMUtils.js)

### addClass(className)
Function to add class to any dom element. It works similar to jquerys addClass function.

Eg:-
    `document.getElementById('abc').addClass('hidden')`

### removeClass(className)
Function to remove class to any dom element. It works similar to jquerys removeClass function.

Eg:-
    `document.getElementById('abc').removeClass('hidden')`


### hasClass(className)
Function to check if a DOM element has any class applied to it. It works similar to jquerys hasClass function.

Eg:-
    `document.getElementById('abc').hasClass('hidden')`

### trigger(event)
Function to trigger DOM events. It works similar to jquerys trigger function.

Eg:-
    `document.getElementById('abc').hasClass('click')`


## [ajax.js](https://github.com/bhaskarmelkani/js-utils/blob/master/ajax.js)

Wrapper function to send an Ajax request.



## [cardNumberFormat.js](https://github.com/bhaskarmelkani/js-utils/blob/master/cardNumberFormat.js)

If you have an input field which is there to take Credit/Debit card number and you want to format the input field like 'XXXX XXXX XXXX XXXX'.

This function can help you with it.

Eg:-

HTML:- `<input id="debit-card-no"  type="tel" pattern="[0-9]*"  maxlength="23" placeholder="Debit Card Number" />`

JS:- `format(document.getElementById("debit-card-no")`


## [chevron.css](https://github.com/bhaskarmelkani/js-utils/blob/master/chevron.css)

Css to create Cheveon icon.

## [cookie.js](https://github.com/bhaskarmelkani/js-utils/blob/master/cookie.js)

JS funcitons to Create and Delete cookies.
### set_cookie(name, value)
Javascritp function to set an cookie.
Eg:-
`set_cookie('foo', 'bar')`

### delete_cookie(name)
Javascritp function to delete a cookie.
Eg:-
`delete_cookie('foo')`

## [showError.js](https://github.com/bhaskarmelkani/js-utils/blob/master/showError.js)

Function to show error in text input field. It shows the error inside the text field only, using placeholder.
### showError(elem, text, placeholder)

Eg:-
`showError(document.getElementById('foo'), 'Please enter a valid text !', 'Default Placeholder')`


