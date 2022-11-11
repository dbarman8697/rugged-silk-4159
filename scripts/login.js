var form = document.querySelector("#signIn");
        form.addEventListener("submit", getUser);
    
        var userArray = JSON.parse(localStorage.getItem("userData")) || [];
        function getUser(e) {
          e.preventDefault();
           var name= form.user.value;
          var password = form.password.value;
          
          var check = false;
          for(var i=0;i<userArray.length;i++) {
            if(userArray[i].name == name && userArray[i].password==password ){
              check=true;
              break;
            }
          }
          if(check){
            localStorage.setItem("loggedUser", name)
            alert("Login Successful!! On Clicking you are redirected to Home Page!");
            window.location.href="index.html";
          }else{
            alert("Invalid Credentials!");
          }
        }