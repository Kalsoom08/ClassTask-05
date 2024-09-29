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
    let yearBlock = document.getElementById("years");
    yearBlock.textContent = reqYear;
   
    //Get Month

    let getCurrentMonth = getCurrentDate.getMonth();
    let getBirthMonth =  birthDate.getMonth();
    let reqMonth = getCurrentMonth - getBirthMonth;
    let monthBlock = document.getElementById("months");
     monthBlock .textContent = reqMonth;
    

    // Get Days
    let getCurrentDay = getCurrentDate.getDay();
   let getBirthDay =  birthDate.getDay();
   let reqDay = getCurrentDay - getBirthDay;

   let daysBlock = document.getElementById("days");
    daysBlock.textContent = reqDay;
   

}
});








