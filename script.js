
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var email = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }else if(email == ""){
      alert("Email must be filled out!");
      return false;
  }
}