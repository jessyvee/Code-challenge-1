# Code-challenge-1
Code that accepts the students grade.

determines if the marks is correct and then gives the grade

This repository consists of 3 code challenges:

Challenge 1: Student Grade Generator

It is a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows:

A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

This program prompts the user to enter the student's marks, and then uses conditional statements (if-else) to determine the corresponding grade. If the marks are greater than 79, the grade is A. If the marks are between 60 and 79, the grade is B. If the marks are between 50 and 59, the grade is C. If the marks are between 40 and 49, the grade is D. And if the marks are less than 40, the grade is E. The program then outputs the grade using the console.log() function

Challenge 2: Speed Detector

This program prompts the user to enter the car's speed, and then uses conditional statements (if-else) and arithmetic operators to determine the corresponding demerit points. If the speed is less than or equal to 70 km/h, the program prints "Ok". If the speed is above 70 km/h, the program calculates the demerit points by subtracting 70 from the speed, dividing the result by 5 (since each 5 km/h above the speed limit gives the driver one demerit point), and rounding down to the nearest integer using the Math.floor() function. The program then prints the demerit points using the console.log() function.

If the driver gets 12 or more demerit points, the program prints "License suspended" using another conditional statement.

Challenge 3: Net Salary Calculator

Given the basic salary and benefits of an employee, write a program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary.

NB: Used KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

In this program, we first prompt the user to input the employee's basic salary and benefits. Then we define the tax rates for KRA, NHIF rates, and NSSF rates for the year 2023, as given in the links provided.

We then calculate the gross pay by adding the basic salary and benefits. After that, we calculate the Payee Tax by iterating through the income tax bands and calculating the tax on the taxable amount in each band, up to the gross pay. We stop when the taxable amount is less than or equal to 0.

Next, we calculate the NHIF deduction by iterating through the NHIF rates and finding the monthly rate that corresponds to the gross pay. We then calculate the NSSF deduction by multiplying the basic salary by the employee NSSF rate.

Finally, we calculate the net salary by subtracting the total deductions (payee tax, NHIF deduction, and NSSF deduction) from the gross pay. We output the results using console.log().

