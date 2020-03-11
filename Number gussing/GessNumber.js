const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const  mynum  = document.getElementById('myNum');
 const subbtn = document.getElementById('subbtn');
 const spinner = document.getElementById('spinner');

 subbtn.addEventListener('click' , () => {
    const spin = setInterval(() => {
        spinner.style.display = "block";
        document.body.classList.add('active');
    
    });
    setTimeout(() => {
       clearInterval(spin);
        spinner.style.display = "none";
        document.body.classList.remove('active');
        var Fval = parseInt(num1.value);
        var Sval = parseInt(num2.value);
        var Tval = parseInt(mynum.value);
        
        // first add given values
   
        const AddVal = Fval + Sval + Tval;
   
        // do half value
   
        const halfVal = AddVal/2;
   
        const lastval = halfVal - Sval;
   
        // give value
   
       let output = `
         <div class="card mt-3 bg-info">
               <div class="card-body">
                   <p class="text-center text-white outputText">Your Answer is : ${lastval}</p>
   
               </div>
          </div>
        `;
        document.getElementById('output').innerHTML = output;
        
    }, 3000);
    //
    
     
});

