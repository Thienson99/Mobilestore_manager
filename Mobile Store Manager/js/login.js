function login()
        {
			var username = document.getElementById('username').value;
                    var password = document.getElementById('password').value;
                  
				if(username=="" || password ==""){
					 alert("Username and password is not empty.");
					 return;
				}
				
				
				  const accounts = [];
				accounts[0]= "admin,123456";
				accounts[1]= "employee,123456";
				var validate = false;
			 for(let i = 0; i < accounts.length; i++) {
				 const account = accounts[i].split(",");
				 var usernameDB = account[0];
				 var pwdDB = account[1];
				 if(username== usernameDB && password==pwdDB){
					 validate = true;
				 }
				 
			 }
			 if(validate == true) {
                        window.location.href = "2. product-add.html";
                    } else {
                        alert("Your username or password is incorrect!");
                    }

         
				
        }
