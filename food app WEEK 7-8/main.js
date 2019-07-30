"use strict"

var menu = {fries: 3, burger: 2};
var input = document.querySelector('input');
var button = document.querySelector('button');
button.addEventListener('click', function(){
    var customerOrder = input.value;
    customerOrder = customerOrder.split(',');
    //console.log(customerOrder);
    for(var i = 0; i < customerOrder.length; i++){
 
        var customerItem = customerOrder[i].split(':');


        for(var item in menu) {
            //    customerItem = menu[item]; 
               console.log(customerItem[0], item);
              if(item === customerItem[0]){
                  console.log("Thanks for your order!")
              } else {
                //   console.log(item);
                //   console.log(menu[item]);
                  console.log("Not on menu");
              }
            }
        
    }

       
    
    
        
               
        })  
       