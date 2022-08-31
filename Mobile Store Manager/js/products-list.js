 
       const elementClass = document.getElementsByClassName('product-list-grid-item');
		 for(let i= 0; i <elementClass.length; i++){
			  elementClass[i].addEventListener("click", function(){
				 alert("Added success!!");
			var id = elementClass[i].querySelector("[id='idProduct']").value;
			var productName = elementClass[i].querySelector("[id='productName']").innerHTML;
			var price = elementClass[i].querySelector("[id='price']").innerHTML;
			var description = elementClass[i].querySelector("[id='description']").innerHTML;
						
								
					
						var quantity =1;
						var total = parseInt(price);
							var products = JSON.parse(sessionStorage.getItem("products"));
							if(products==null){
								products = [];
								
							}else{
								
								for(let i= 0; i <products.length; i++){
									if(products[i].id ==id){
										quantity = products[i].quantity + 1;
										total = parseInt(products[i].total) + parseInt(price);
										var index = products.indexOf(products[i]);
										products.splice(index, 1);
										break;
									}
								}
							}
							var product = {
									id:id,
								productName: productName,
								price: price,
								description: description,
								quantity: quantity,
								total : total
							};
							products.push(product);
							sessionStorage.setItem('products', JSON.stringify(products));
				  
			  
				  }, false);   
			  
 }

                
       
	
       

      
       