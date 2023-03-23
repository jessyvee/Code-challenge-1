// A code that accepts the students grade.

function gradeGenerator () {  
    let marks = document.getElementById("marks").value


if (marks === undefined || isNaN(marks) || marks<0 || marks>100){
    return alert( "Invalid marks")
}

if (marks>=80 && marks<=100){
    marks ="A"
}
else if (marks>=60 && marks<=79){
    marks ="B"
}
else if (marks>=49 && marks<=59){
    marks = "C"
}
else if(marks>=40 && marks<49){
    marks = "D"
}
else {
    marks = "E"
}
//output console values to html file
    let output = document.getElementById("gradeOutput")
    output.innerHTML = "The students grade is : " + marks
}


//Input of the car speedDetector.

function speedDetector () {
    let speed = document.getElementById("speed").value
if (speed == undefined || isNaN(speed) ){
    speed = "Enter valid speed"
} 
//Prints 'ok' or gives demerit points depending on the speed
else if (speed <= 70){
    speed = "Ok"
}
else if (speed > 70 && speed <=130){
    let demerits = Math.floor((speed -70)/5)
    speed = `You have ${demerits} demerit points`
}
else{
    speed = "Licence sespended";
}
    
let output = document.getElementById("speedOutput")
output.innerHTML = speed
}
//Gets the basic salary and benefits as the inputs
//Calculates the PAYEE ,NSSF deductions ,gross salary and net salary

function calculateSalary() {
   
   
    // Get the input values from the user
    const basicSalary = parseInt(document.getElementById("basicSalary").value);
    const benefits = parseInt(document.getElementById("benefits").value);


    // Calculate the gross salary, NSSF, NHIF, and payee
    const grossSalary = basicSalary + benefits;
    const nssf = 0.06 * grossSalary;
    
    let nhif = 0;
    if (grossSalary <= 5999) {
      nhif = 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
      nhif = 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      nhif = 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      nhif = 500;
    } else if (grossSalary >14999 && grossSalary <= 19999) {
        nhif = 600;
    }
    else if (grossSalary > 19999 && grossSalary <= 24999) {
        nhif = 750;
    }
    else if (grossSalary > 24999 && grossSalary <= 29999) {
        nhif = 850;
    }
    else if (grossSalary >29999 && grossSalary <=34999) {
        nhif = 900;
    }
    else if (grossSalary > 34999 && grossSalary <= 39999){
        nhif = 950;
    }
    else if (grossSalary > 39999 && grossSalary <= 44999) {
        nhif = 1000;
    }
    else if (grossSalary >44999 && grossSalary <= 49999) {
        nhif = 1100;
    }
    else if (grossSalary > 49999 && grossSalary <= 59999) {
        nhif = 1200;
    }
    else if (grossSalary > 59999 && grossSalary <= 69999) {
        nhif= 1300;
    }
    else if (grossSalary > 69999 && grossSalary <= 79999) {
        nhif = 1400;
    }
    else if (grossSalary >79999 && grossSalary <= 89999) {
        nhif = 1500;
    }
    else if (grossSalary > 89999 && grossSalary <= 99999) {
        nhif = 1600;
    }
    else{
        nhif = 1700;
    }

    let payee = 0;
    if (grossSalary <= 24000) {
      payee = grossSalary * 0.1;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
      payee = grossSalary * 0.25;
    } else {
      payee = grossSalary * 0.3;
    }
 
  

    
const netSalary = grossSalary - nssf - nhif - payee;

    // DisplaY the results to the user
    document.getElementById("grossSalary").innerHTML = `Gross Salary is Ksh ${grossSalary}`;
    document.getElementById("nssfContribution").innerHTMl = `NSSF contribution is Ksh ${nssf}`;
    document.getElementById("nhif").innerHTML = `NHIF contribution is Ksh ${nhif}`;
    document.getElementById("payee").innerHTML = `Total PAYEE is Ksh ${payee}`;
    document.getElementById("netSalary").innerHTML = `Net Salary is Ksh ${netSalary}`;
  }