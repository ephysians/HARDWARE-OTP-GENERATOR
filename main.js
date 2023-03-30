



function generateOTP() {  // Using the button "onclick()" as the parent body for the OTP generating and rendering on p-tage with id="demo"
var digits = '0123456789';  // Used an alphanuemric values to pick from
let OTP = '';  // The generated otp value stays in btw the quote.

  for (let i = 0; i < 8; i++ ){     // function that generate 8 value OTP
   OTP += digits[Math.floor(Math.random() * 10)];
  }

let token = document.getElementById("demo");  // Using DOM to append the generated otp value to the OTP Veriable on line 7 above 
token.innerHTML = OTP;

}


