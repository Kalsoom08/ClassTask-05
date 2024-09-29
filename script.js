let ageFinder = document.getElementById("age-calculator");
ageFinder.addEventListener('click',function(event){
  event.preventDefault();
  let dateInput = document.getElementById("date").value;
  if(dateInput === ""){
    alert("Enter Date First");
  }
else {
    let getCurrentDate = new Date();
    let birthDate = new Date(dateInput);

    // Get Year
    let getCurrentYear = getCurrentDate.getFullYear();
    let getBirthYear = birthDate.getFullYear();

    let reqYear =  getCurrentYear - getBirthYear;
    console.log(reqYear)
   
    //Get Month
    
   

     }
});






