const rangeInput = document.querySelectorAll(".ragne-input input");


const progress = document.querySelector('.slider .progress');

let priceGap = 1000;
    
rangeInput.forEach(input => {
    input.addEventListener('input',()=> {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        
        
        
        
        
        
        
        progress.style.left = (minVal / rangeInput[0].max) * 100+'%';
        progress.style.left = 100-(maxVal / rangeInput[1].max) * 100 + "%";


        // console.log(minVal,maxVal);
    })
})


 const radioInputs = document.querySelectorAll(
   'input[type="radio"][name="color"]'
 );

 // Add a click event listener to each radio input
 radioInputs.forEach((input) => {
   input.addEventListener("click", () => {
     // Get the selected color code
     const selectedColorCode = input.value;

     // Update properties based on the selected color code
     // For example, change the background color of an element
     document.body.style.backgroundColor = selectedColorCode;
     // You can add more properties as needed
   });
 });