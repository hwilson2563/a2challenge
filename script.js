var user = { email: "coolguy@gmail.com" , password: "ILoveCoffee", name: "Grant Chircus"};

function checkLogin() {
  var userName = document.querySelectorAll("input")[0];
  var passwordGiven = document.querySelectorAll("input")[1];
  var person = userName.value; 
  var password1 = passwordGiven.value;
  if (person == user.email) { 
    if (password1 == user.password ){
      document.querySelectorAll(".container1")[0].style.display = "none";  
      document.querySelectorAll(".welcome")[0].style.display = "block";
      document.querySelectorAll(".back")[0].style.display ="none"; 
    }
  }
  else {
    alert("Sign-in credetials are not correct!")
  }
}
