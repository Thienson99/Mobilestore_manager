 var table = document.querySelector('table');
      var products = JSON.parse(sessionStorage.getItem("products"));
	  var grandTotal = 0;
	  var html = '<tr> <td style="border: none;"><button class="cart-clear-cart" onclick="clearCart()"><i class="fa fa-remove"></i> Clear Cart</button></td> <td colspan="4" style="border: none;"></td> </tr> <tr> <th>Product</th> <th>Quantity</th> <th>Price</th> <th>Total</th> </tr>';
							if(products!=null){
							
								for(let i= 0; i <products.length; i++){
									console.log(     i);
									grandTotal += parseInt(products[i].total);
									html	   += '<tr><td scope="col">' +  products[i].productName +
										  '</td><td scope="col">'+ products[i].quantity + '</td><td scope="col">'
										  + products[i].price + '</td><td scope="col">'+products[i].total+'</td></tr>';
										
									
								}
							}
							html += '<tr>  <td colspan="3"><b>Grand tolal</b></td> <td><b>'+grandTotal+' USD</b></td> </tr>'; 
							table.innerHTML = html;
							

       
function clearCart() {
  sessionStorage.removeItem('products');
	table.innerHTML = html;
	 window.location.href = "5. cart.html";
}
       
      