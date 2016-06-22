/*
 * set_cookie(name, value)
 *
 * Function to set a cookie using javascript.
 */
function set_cookie(name, value) {
  document.cookie = name +'='+ value +'; Path=/;';
}


/*
 * delete_cookie(name)
 *
 * Function to delete a cookie using javascript.
 */
function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Sat Sep 09 1989 00:00:00 GMT+0530 (IST);';
}
