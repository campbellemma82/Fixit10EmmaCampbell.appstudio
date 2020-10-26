let pw = "CM0M63eac"
/* 
> Used a textArea or Dropdown to display the customer names
> Hard-coded the customer to add (just to save time). The name is :
       Jesse Antiques, 1113 F St, Omaha, NE, 68178
> When user clicks a button, the new customer is added to the control and the database.
> Tell the user their new customer was added to the database. 
> Uses a textArea to display the remaining customers.
*/ 

pw = //"CM0M63eac"
customerAdd.onshow=function() {
  txtCustomer_content.style.height = "200px"
//create select statement 
let query = "SELECT * FROM customer" 

//Below change from my netID to yours.
let req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=eac46875&pass=" + pw + "&database=eac46875&query=" + query)

    if (req.status == 200) { //transit trip worked.
    //has all roqs for ex horses records 
      allCustomer = JSON.parse(req.responseText)
        console.log(results) 
      } 
//if there are no customers
if (results.length == 0) //no results were returned 
      lblError1.value = "There are no customers." 
else 
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
//show all customer names
  for (i = 0; i <= allCustomer.length-1; i++)
    txtCustomer.addItem(results[i][1])
} 
//hard code Jess antiques into DB 
//create variables for Jess antiques 
//in the onclick then add to the customer drp down table 

btnAddJess.onclick=function() {

    let customerName = "Jess Antiques" 
    let customerStreet = " 1113 F Street" 
    let customerCity = "Omaha" 
    let customerState = "NE" 
    let customerzipcode = "68178" 
        let query = "INSERT INTO customer (name, street, city, zipcode) VALUES ('" + customerName + "', '" + "', " + customerStreet "+ " + customerCity + "', '" +   customerState '" + "', '" + "', " + customerZipcode")
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=eac46875&pass=" + pw + "&database=eac46875&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // the insert succeeded
            NSB.MsgBox("You have successfully added the customer!")
        } else
            NSB.MsgBox("There was a problem with adding the Jess Antiques to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req.status);
    }  

} else {
//shows all the customers that are in the database in the 2nd textarea
    let message = " "
    for (i = 0; i < allCustomer.length-1; i++)
    message = message + allCustomer[i][1] + "\n"
    txtNonDelete1.value = message
} 
       
*/