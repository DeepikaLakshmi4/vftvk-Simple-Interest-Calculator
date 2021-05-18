function compute()
{
   var principal = document.getElementById("amount").value; 
   var rate = document.getElementById("rate").value; 
   var years = document.getElementById("years").value;  
   /*simple interest is calculated */
   var interest = amount * years * rate/100;  
   /* Number of years to recieve the amount is calaculated*/
    var year =new Date().getFullYear()+paresenInt(years);
}
function update()
{  
    var rateval = document.getElementById("rate").value; 
    document.getElementById("rate_val").innerText=rateval; 
    /*displays the result by pressing the button simple interest*/

document.getElementById("result").innerHTML="If you deposit "+amount+", 
 "<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}  
/*if the principal amount is entered as zero or any negative number then alert message appears */
if (amount==0) 
 { alert("enter a positive number") 
}
        
