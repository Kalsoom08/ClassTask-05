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
    yearBlock.textContent = `Years ${reqYear}`;
   
    //Get Month

    let getCurrentMonth = getCurrentDate.getMonth();
    let getBirthMonth =  birthDate.getMonth();

if (getCurrentMonth < getBirthMonth) {
  reqYear--;  
  getCurrentMonth += 12; 
}
    let reqMonth = getCurrentMonth - getBirthMonth;
    let monthBlock = document.getElementById("months");
     monthBlock .textContent = `Months ${reqMonth}`;
    

    // Get Days
    let getCurrentDay = getCurrentDate.getDate(); 
    let getBirthDay =  birthDate.getDate();

    if (getCurrentDay < getBirthDay) {
      reqMonth--;
      if (reqMonth < 0) {
        reqMonth += 12;
        reqYear--;
      }
    
      let daysInPrevMonth = new Date(getCurrentDate.getFullYear(), getCurrentDate.getMonth(), 0).getDate();
      getCurrentDay += daysInPrevMonth;
    }

    let reqDay = getCurrentDay - getBirthDay;
    let daysBlock = document.getElementById("days");
    daysBlock.textContent = `Days: ${reqDay}`;
  }
});


