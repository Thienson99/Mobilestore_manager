
        function order() {
			
			var id = document.getElementById('idProduct').value;
			var productName = document.getElementById('productName').innerHTML;
			var price = document.getElementById('price').innerHTML;
			var description = document.getElementById('description').innerHTML;
			 alert("Added success!!");
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
		}
            
