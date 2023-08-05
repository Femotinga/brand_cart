
// select all the add buttons
let allCartsBtn = document.getElementsByClassName("remove");
// select all quantities of every product
let allQtys = document.getElementsByClassName("formControl");
// select the total price tag
let totalPrice = document.getElementById("totalPrice" );

for (let i=0; i< allCartsBtn.length; i++){
    // Adding event listener to each of the buttons
    allCartsBtn[i].addEventListener("click",function(){
       let btnText = this.textContent;
       
              // selecting the parent of the button
              let singleProd = allCartsBtn[i].closest(".singleCart");
              // selecting price of each product after the add button is clicked
              let price = singleProd.getElementsByClassName("price");
              // Extract price and remve dolla sign
              price = price[0].textContent.replace("$","");
              // convert price to integer
              price = parseFloat(price);
      
              // Extract price and remve dolla sign for the Total
              let totalPriceN = totalPrice.textContent.replace("$","");
              // convert totalPrice to integer
              totalPriceN = parseFloat(totalPriceN);

       if (btnText ==="Add") {
        // Add the product price to the total price by concatenating
        totalPriceN = totalPriceN + price;
        this.textContent ="remove"

       } else {
         // Deduct the product price to the total price by concatenating
         totalPriceN = totalPriceN - price;
         this.textContent ="Add"

       }

    

        
        // return the totalprice to the Html tag
        totalPrice.textContent ="$"+ totalPriceN.toFixed(2);

    })

    // Add eventListener to each of the quantity dropdown
    allQtys[i].addEventListener("change", function(e) {
          // selecting the parent of the qty
          let singleProd = allQtys[i].closest(".singleCart");
          // selecting price of each product after the add button is clicked
          let price = singleProd.getElementsByClassName("price");
          // Extract price and remve dolla sign
          price = price[0].textContent.replace("$","");
          // convert price to integer
          price = parseFloat(price);
        //Get the cart Button
          let singleCartBtn = singleProd.getElementsByClassName("remove");
        //   extract the text of single qty dropdown
          let dropDownVal = this.textContent;
          dropDownVal = dropDownVal.replace("qty: ","");
          dropDownVal = parseInt(dropDownVal);
          
        
          if (singleCartBtn[0].textContent !== "Add"){
            price = price * dropDownVal;
            
            // Extract the price of the total and remove the dolla sign
             // Extract price and remove dolla sign for the Total
          let totalPriceN = totalPrice.textContent.replace("$","");
             
             // convert totalPrice to integer
          totalPriceN = parseFloat(totalPriceN);
        //   add the product price to the Total price by concatenating it
          totalPriceN = totalPriceN + price; 
          // return the totalprice to the Html tag
          totalPrice.textContent = "$" + totalPriceN.toFixed(2);

          }
  
         
    })

}