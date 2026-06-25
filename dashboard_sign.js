function dash_signup() {
    event.preventDefault();
    
    NAM = document.getElementById("nam").value;
    USR_NAM = document.getElementById("usr_naam").value;
    EMP_PASS = document.getElementById("paswrd").value;

    if (NAM && USR_NAM && EMP_PASS) {

        savd_sign_up_data = JSON.parse(localStorage.getItem("SIGN_UP_DATA"));

        if (savd_sign_up_data.EMP_NAME == NAM && savd_sign_up_data.USER_NAME == USR_NAM && savd_sign_up_data.EMP_PASS == EMP_PASS) {
            alert("u already have an account, go to log in page")
            window.location.href = "dashboard_log.html";
        }

        else{
            sign_up_data = {
                EMP_NAME: NAM,
                USER_NAME: USR_NAM,
                EMP_PASS: EMP_PASS
            }

                localStorage.setItem("SIGN_UP_DATA", JSON.stringify(sign_up_data));
                alert("you signed up sucessfully , go to log in page")
                window.location.href = "dashboard_log.html";
            
        }

    }

    else{
        alert("please fill the details")
    }

}


function dash_login(){
event.preventDefault();

Log_Naam =  document.getElementById("naam").value;
Log_Usrr = document.getElementById("usrr_naam").value;
Log_Pass = document.getElementById("paswwrd").value;

if(Log_Naam && Log_Usrr && Log_Pass ){

   Sign_savd = JSON.parse(localStorage.getItem("SIGN_UP_DATA"));

   if(Sign_savd.EMP_NAME == Log_Naam && Sign_savd.USER_NAME == Log_Usrr && Sign_savd.EMP_PASS == Log_Pass){
    alert("ur credentials are correct, logging you in ")
   }

   else {
    alert ("credentials incorrect")
   }
}

else{
    alert("fill the details please...!!!")
}
}
