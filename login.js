emailjs.init("hFuUkA_osBwqyHm3i");

let generatedOTP = "";

function generateOTP(){
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendOTP(){

    const email = document.getElementById("email").value;

    if(email === ""){
        alert("Please enter email");
        return;
    }

    generatedOTP = generateOTP();

    const templateParams = {
        to_email: email,
        otp_code: generatedOTP
    };

    emailjs.send(
        "service_zliyj49",
        "template_snuclkr",
        templateParams
    )
    .then(function(response){

        document.getElementById("otpSection").style.display = "block";

        document.getElementById("message").innerHTML =
            "OTP sent successfully to " + email;

        document.getElementById("message").className = "success";
        document.getElementById("email").value = "";

    })
    .catch(function(error){

        document.getElementById("message").innerHTML =
            "Failed to send OTP";

        document.getElementById("message").className = "error";

    });
}

function verifyOTP(){

    const userOtp = document.getElementById("userOtp").value;

    if(userOtp === generatedOTP){

        document.getElementById("message").innerHTML =
            "OTP Verified Successfully";

        document.getElementById("message").className = "success";
        document.getElementById("userOtp").value = "";

        setTimeout(() => {

            window.location.href = "explore.html";

        }, 1500);

    }else{

        document.getElementById("message").innerHTML =
            "Invalid OTP";

        document.getElementById("message").className = "error";
    }
}
