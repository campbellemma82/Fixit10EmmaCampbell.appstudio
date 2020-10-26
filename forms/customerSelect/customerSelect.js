let pw = "CM0M63eac"

/*
> used Select to get all customers from database
> displayed all customers in textArea or Dropdown control 
> user can select one customer
> Used a sql Select query to get all of the customers whose state matches the state of the customer chosen by the user. 
> Used a textArea to show the user the matching customers, one per line, using a template literal.
*/

customerSelect.onshow=function() {
  txtResults_contents.style.height = "200px"
//create select statement
let query = "SELECT * FROM customer"
            
let req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=eac46875&pass=" + pw + "&database=eac46875&query=" + query)

  if (req.status == 200) { //transit trip worked.
       results = JSON.parse(req.responseText)
        console.log(results)
      }
//showing all names of customer on the table

if (results.length == 0)    // no results were returned by the query
       lblmsg.value  = "There are no customers."
else 
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
//show all customer names 
  for (i = 0; i <= results.length-1; i++) 
    txtAllNames.addItem(results[i][1])
}
//when the user clicks a name 
txtAllNames.onclick=function(){
  let nameCustomer = ' '
  let customerState = ' '
  let displayNames = [ ]
  
if (typeof (s) == 'object') 
  return
else
  //when user clicks a name have it be matched to a state 
  txtAllNames.value = s
  //select the customer name 
  nameCustomer = txtAllNames.selction 
  //select the state to match the name
        for (i = 0; i < results.length[i][1]; i++)
          if(nameCustomer == results[i][1])
            customerState = results[i][4]
         // break
  //allows the reults to be matched to a state - and adds to an array 
    for (i = 0; i < results.length[i][1]; i++)
      if (state == results[i][4])
        displayNames.push(results[i][1])
      
          //write a select statement to show the state in the box 
        newQuery = `SELECT name FROM customer WHERE state = ${customerState}`
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=eac46875&pass=" + pw + "&database=eac46875&query=" + query)
        if (req.status == 200) { //transit trip worked.
       results = JSON.parse(req.responseText)
 //problem with the else 
 else 
    let message = " "
    for (i = 0; i < results.length-1; i++)
    message = message + results[i][0] + "\n"
    txtAllStates.value = message
     // end else
  else
      txtAllStates = `Error code:  + ${req.status} `

}