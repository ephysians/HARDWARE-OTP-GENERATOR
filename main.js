let intervalId; // To hold the interval ID

function generateOTP() {
  clearInterval(intervalId); // Clear any existing intervals before starting a new one

  const digits = '0123456789';
  let OTP = '';

  for (let i = 0; i < 8; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  const token = document.getElementById("demo");
  token.innerHTML = OTP;

  // Set an interval to clear the OTP after 8 seconds
  intervalId = setInterval(() => {
    token.innerHTML = ''; // Clear the OTP after 8 seconds
    clearInterval(intervalId); // Stop the interval after clearing the OTP
  }, 8000); // 8000 milliseconds = 8 seconds
}



