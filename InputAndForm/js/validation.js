var text = document.querySelector("#name")
var error = document.querySelector(".error")
text.addEventListener('input',function()
    {
         nameRegex = RegExp("^[A-Z]{1}[a-z A-Z]{2,}$");
         if (nameRegex.test(text.value))
         {
            error.textContent="";
         }
         else
         {
            error.textContent="Name is invalid";
         }
    }
 )


 var salaryInput = document.querySelector("#salary")
 var Output = document.querySelector(".salaryOutput")
 Output.textContent=salaryInput.value
 salaryInput.addEventListener('input',function()
 {
    Output.textContent=salaryInput.value
 }
 )