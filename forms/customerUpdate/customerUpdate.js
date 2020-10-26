let pw = "CM0M63eac"
/*
> Used a textArea or Dropdown to display the customer names
> Used an input control for the user to enter a customer name.
> When user clicks a button, the program gets the new customer name from the user.
> The new name replaces the old name in the customer record.
> The change is reflected in the display and the database.
> Used a textArea to display the remaining customers. 
*/

 pw = "CM0M63eac"
selToChange.onclick=function() {
    // get the data to populate the dropdown with names from database
    let query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=eac46875&pass=" + pw + "&database=eac46875&query=" + query)

    if (req.status == 200)  //transit worked.
          allNames = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
            //POSSIBLY CHANGE - SEL
            selToChange.clear()
            for (i = 0; i <= allNames.length - 1; i++)
                selToChange.addItem(allNames[i])
     else 
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    
}

btnAddCustomer.onclick=function(){
    let newName = inptNewName.value
    let oldName = selToChange.value
   
    let found = false
    for (i = 0; i <= allNames.length - 1; i++)
        if (oldName == allNames[i]) {
            found = true
            break
}
    if (found == false)
       NSB.MsgBox("The change is reflected in the database.")
    else if (found == true) {
        query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
        //alert(query)
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=eac46875&pass=" + pw + "&database=eac46875&query=" + query)

        if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {   // means the update succeeded
                NSB.MsgBox(`You have successfully changed the customer name!`)
                // reset controls to original state
                inptNewName.value = ""
                selToChange.value = ""
            else
              NSB.MsgBox(`There was a problem changing the customer name.`)
            else
            // transit error
            NSB.MsgBox(`Error: ${req.status}`);
//2nd text area display
//shows all the customers that are in the database in the 2nd textarea
    let message = " "
    for (i = 0; i < allNames.length; i++)
    message = message + allNames[i][1] + "\n"
    txtNewCustomerText.value = message

    else  
        //transit error - Handle that with an error message.
        lblMessage1.textContent =` "Error code: " + req.status`
}


  
       
