

function validateEmail(email) {
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var valid = emailReg.test(email);

    if (!valid) {
        return false;
    } else {
        return true;
    }
}

function enqValidate() {
    if (document.requestform.name.value == "") {
        alert("Please enter required field - Name!")
        document.requestform.name.focus();
        return false;
    }
    if (document.requestform.email.value == "") {
        alert("Please enter the required field - Email!")
        document.requestform.email.focus();
        return false;
    }
    if (document.requestform.mobile.value == "") {

        alert("Please enter the required field - Mobile Number!")
        document.requestform.mobile.focus();

        return false;
    }

    if (document.requestform.ddlFacultyName.value == "") {
        alert("Please Select Faculty Name!")
        document.requestform.ddlFacultyName.focus();
        return false;
    }
    if (document.requestform.Course.value == "") {
        alert("Please Select Course Name!")
        document.requestform.Course.focus();
        return false;
    }


    var emailID = document.requestform.email
    if ((emailID.value == null) || (emailID.value == "")) {
        alert("Please Enter your Email ID")
        emailID.focus()
        return false
    } else {
        if (validateEmail(emailID.value)) {

        } else {
            alert("Please Enter a valid Email Address");
            emailID.focus()
            return false;
        }
    }

    var Enquiry = JSON.stringify({ name: document.requestform.name.value, email: document.requestform.email.value, mobile: document.requestform.mobile.value, FacultyName: $("#ddlFacultyName option:selected").text(), CourseName: document.requestform.Course.value });
    $.ajax({
        type: "POST",
        url: "../Home/SaveEnquiry",
        contentType: 'application/json; charset=utf-8',
        data: Enquiry,
        dataType: "json",
        success: function (Data) {
            if (Data.Status == "Success") {
                alert(Data.Message);
                //return true;
            } else {
                alert(Data.Message);
               // return true;
            }

        }
    });
}

//function enqValidate2() {
//    if (document.rightform.name2.value == "") {
//        alert("Please enter required field - Name!")
//        document.rightform.name2.focus();
//        return false;
//    }
//    if (document.rightform.email2.value == "") {
//        alert("Please enter the required field - Email!")
//        document.rightform.email2.focus();
//        return false;
//    }
//    if (document.rightform.mobile2.value == "") {

//        alert("Please enter the required field - Mobile Number!")
//        document.rightform.mobile2.focus();

//        return false;
//    }

//    if (document.rightform.ddlFacultyName2.value == "") {
//        alert("Please Select Faculty Name!")
//        document.rightform.ddlFacultyName2.focus();
//        return false;
//    }
//    if (document.rightform.Course2.value == "") {
//        alert("Please Select Course Name!")
//        document.rightform.Course2.focus();
//        return false;
//    }


//    var emailID = document.rightform.email2
//    if ((emailID.value == null) || (emailID.value == "")) {
//        alert("Please Enter your Email ID")
//        emailID.focus()
//        return false
//    } else {
//        if (validateEmail(emailID.value)) {

//        } else {
//            alert("Please Enter a valid Email Address");
//            emailID.focus()
//            return false;
//        }
//    }

//    var Enquiry = JSON.stringify({ name: document.rightform.name2.value, email: document.rightform.email2.value, mobile: document.rightform.mobile2.value, FacultyName: $("#ddlFacultyName option:selected").text(), CourseName: document.rightform.Course2.value, otp: document.rightform.otp.value, sndotp: document.rightform.sndotp.value });
//    $.ajax({
//        data: Enquiry,
//        type: "POST",
//        url: "../Home/SaveEnquiry",
//        contentType: 'application/json; charset=utf-8',        
//        dataType: "json",
//        success: function (Data) {
//            if (Data.Status == "Success") {
//                alert(Data.Message);
//                //return true;
//            } else {
//                alert(Data.Message);
//                // return true;
//            }

//        }
//    });

//    //return true;
//}

