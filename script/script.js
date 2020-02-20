


function addCheck {
  
 
    row = 1;
    var fullName = document.getElementById("fullName").nodeValue;
    var  amount= document.getElementById("amount");
    var  checkNumber = document.getElementById("checkNumber");
    if( !fullName || !amount || checkNumber){
        alert('one or more field left unfilled');
    }

    var Table = document.getElementById("table");
    var newRow = Table.insertRow(row);
    var cell1 = newRow.insertcell1(0);
    var cell2 = newRow.insertcell1(1);
    var cell3 = newRow.insertcell1(2);

    cell1.innerHTML = fullName;
    cell2.innerHTML = amount;
    cell3.innerHTML = checkNumber;
    row++;

    
}