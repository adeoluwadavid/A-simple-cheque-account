let input1 = document.getElementById('input1')
 let input2 = document.getElementById('input2')
 let input3 = document.getElementById('input3')
 let section = document.querySelector('section')
 let btn = document.getElementById('pay')
 let table = document.querySelector('table')
 let totalAmount = document.getElementById('total')
 let input4 = document.getElementById('input4')
 let withdraw = document.getElementById('withdraw')
 let balance = document.getElementById('balance')

 let Arr = [] 
 
 function depositMoney(){
    newInput = input1.value
    input1.value = ''
    newInput2 = input2.value
    input2.value= ''
    newInput3 = input3.value
    input3.value = ''
   
            // insert new row. 
            var NewRow = table.insertRow(); 
            var Newcell1 = NewRow.insertCell(0); 
            var Newcell2 = NewRow.insertCell(1); 
            var Newcell3 = NewRow.insertCell(2)
            Newcell1.innerHTML = newInput; 
            Newcell2.innerHTML = newInput2;
            Newcell3.innerHTML = newInput3;
            
            let val = parseInt(newInput2);
            
              Arr.push(val)
              console.log(Arr)
              let newArr = Arr.reduce((a,b)=> a+b)
              console.log(newArr)
              totalAmount.value = newArr
               
            
 }
 btn.addEventListener('click', depositMoney)
 let bal;
 function withdrawMoney(){
     newInput4 = input4.value;
     input4.value = ''

     let anotherArr = Arr.reduce((a,b)=> a + b)

    
if (bal){
        var newBalance = balance.value - newInput4
        balance.value = newBalance
        console.log(balance.value)
    }
    else{
        bal = anotherArr - newInput4
        balance.value = bal
    }

 }
 withdraw.addEventListener('click', withdrawMoney)