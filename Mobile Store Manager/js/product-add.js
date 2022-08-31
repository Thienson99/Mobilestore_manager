
        function addProduct() {
            var products = document.querySelectorAll(".input");
            var checkboxs = document.querySelectorAll(".checkbox");
            var condition = "";
            var isChecked = false;
            for(let i = 0; i < products.length; i++) {
                if(products[i].value == "") {
                    isChecked = true;
                    break;
                }
            }
			
            var isCheckBox = false;
            for(let i = 0; i < checkboxs.length;i++){
                if(checkboxs[i].checked ==  true){
                    isCheckBox = true;
					condition = checkboxs[i].value;
                    break;
                }
            }

            if(isChecked == true || isCheckBox == false) {
                alert("Please fill out all item in the form");
            } else {
					
					var productName = document.getElementById('productName').value;
                    var unitPrice = document.getElementById('price').value;
                    var unitsInStock = document.getElementById('stock').value;
                    var description = document.getElementById('description').value;
                    var manufacturer = document.getElementById('manufacturer').value;
                   var category = document.getElementById('category').value;
                    var productImg = document.getElementById('file').files[0].name;
					console.log(isNaN(unitPrice));
                   if(isNaN(unitPrice)|| unitPrice < 0){
						 alert("Unit Price must be a number and greater than 0.");
						 return;
					} 
					if(isNaN(unitsInStock) || unitsInStock < 0){
						 alert("Unit Stock must be a number and greater than 0.");
						 return;
					} 
					if(description.length > 255){
						 alert("Description must be less than 255 characters.");
						 return;
					} 
					var product = {
						productName: productName,
						unitPrice: unitPrice,
						unitsInStock: unitsInStock, 
						description: description,
						manufacturer: manufacturer,
						category: category,
						productImg: productImg
					};
                    
                    sessionStorage.setItem('product', JSON.stringify(product));
                    window.location.href = '3. products-list.html';
                 
            }
        }
		function checkCondition(checkbox) {
            var checkboxs = document.getElementsByClassName('checkbox');
            for(let i = 0; i < checkboxs.length; i++) {
                if(checkboxs[i].value != checkbox) {
                    checkboxs[i].checked = false;
                }
            }
        }
		function logout(){
			 window.location.href = "1. login.html";
		}
