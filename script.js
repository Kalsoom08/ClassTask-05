let ageFinder = document.getElementById("age-calculator");
let ageDiv = document.getElementById("para");
let div = document.getElementById("main");
let input = document.getElementById("date");
let span = document.getElementById("years"); 
let span1 = document.getElementById("months"); 
let span2 = document.getElementById("days"); 

// ageFinder.onclick = function(){
//   div.style.backgroundColor = "rgb(252, 242, 237)";
//   ageFinder.style.backgroundColor ="rgb(63, 55, 94)";
//   ageFinder.style.color = "white";
//   input.style.backgroundColor= "rgb(63, 55, 94)";
//   span.style.backgroundColor=  "rgb(63, 55, 94)";
//   span1.style.backgroundColor=  "rgb(63, 55, 94)";
//   span2.style.backgroundColor=  "rgb(63, 55, 94)";
// }
// ageFinder.onmouseout = function(){
//    div.style.backgroundColor = "rgb(63, 55, 94)";
//   ageFinder.style.backgroundColor ="rgb(222, 222, 237)";
//   ageFinder.style.color = "black";
//   input.style.backgroundColor= "rgb(222, 222, 237)";
//   span.style.backgroundColor=  "rgb(222, 222, 237)";
//   span1.style.backgroundColor=  "rgb(222, 222, 237)";
//   span2.style.backgroundColor=  "rgb(222, 222, 237)";
// }

ageFinder.addEventListener('click',function(event){
  event.preventDefault();
  let dateInput = document.getElementById("date").value;
  if(dateInput === ""){
    alert("Enter Date First");
  }
else {
    let getCurrentDate = new Date();
    let birthDate = new Date(dateInput);

    if (birthDate > getCurrentDate) {
      alert("Date of birth cannot be in the future.");
      return; 
    }

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
ageDiv.textContent = `You Are  Years ${reqYear} Years Old`;


