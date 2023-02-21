// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth() + 1; //January is 0!
// var yyyy = today.getFullYear();

// if (dd < 10) {
//    dd = '0' + dd;
// }

// if (mm < 10) {
//    mm = '0' + mm;
// } 
    
// today = yyyy + '-' + mm + '-' + dd;
 console.log(new Date().toISOString().split('T')[0]);
// document.getElementById("deliver-date").setAttribute("min", today);

// document.getElementById('deliver-date').setAttribute('min', new Date().toISOString().split('T')[0])
function checkFormValidator() {
  let isValid = true;
  // check validator of input name
  if (!document.getElementById("cakeName").value) {
    document.getElementById("error-cake-name").innerHTML =
      "Please select our product.";
    isValid = false;
  } else {
    document.getElementById("error-name").innerHTML = "";
  }

  // check validator of input name
  if (!document.getElementById("name").value) {
    document.getElementById("error-name").innerHTML =
      "Please fill out your name";
    isValid = false;
  } else {
    if (document.getElementById("name").value?.length > 100) {
      document.getElementById("error-name").innerHTML =
        "Your name should not exceed 100 characters.";
      isValid = false;
    }
    document.getElementById("error-name").innerHTML = "";
  }

  // check validator of input Message
  if (!document.getElementById("message").value) {
    document.getElementById("error-message").innerHTML =
      "Please fill out your message";
    isValid = false;
  } else {
    if (document.getElementById("message").value?.length > 30) {
      document.getElementById("error-message").innerHTML =
        "Your message should not exceed 30 characters.";
      isValid = false;
    }
    document.getElementById("error-message").innerHTML = "";
  }

  // check validator of input date
  if (!document.getElementById("deliver-date").value) {
    document.getElementById("error-deliver-date").innerHTML =
      "Please select deliver date.";
    isValid = false;
  } else {

    document.getElementById("error-deliver-date").innerHTML = "";
  }

  // check validator of input message
  if (!document.getElementById("deliver-to").value) {
    document.getElementById("error-deliver-to").innerHTML =
      "Please fill out your deliver to";
    isValid = false;
  } else {
    if (document.getElementById("deliver-to").value?.length > 500) {
      document.getElementById("error-deliver-to").innerHTML =
        "Deliver to should not exceed 500 characters.";
      isValid = false;
    }
    document.getElementById("error-deliver-to").innerHTML = "";
  }

  if (isValid) {
    alert("Success submit form");
  }
  return isValid;
}
