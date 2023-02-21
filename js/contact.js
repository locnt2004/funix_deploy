function checkFormValidator() {
  let isValid = true;

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

  // check validator of input email
  if (!document.getElementById("email").value) {
    document.getElementById("error-email").innerHTML =
      "Please fill out your email";
    isValid = false;
  } else {
    if (document.getElementById("email").value?.length > 100) {
      document.getElementById("error-email").innerHTML =
        "Your email should not exceed 100 characters.";
      isValid = false;
    }
    document.getElementById("error-email").innerHTML = "";
  }

  // check validator of input Subject
  if (!document.getElementById("subject").value) {
    document.getElementById("error-subject").innerHTML =
      "Please fill out your subject";
    isValid = false;
  } else {
    if (document.getElementById("subject").value?.length > 250) {
      document.getElementById("error-subject").innerHTML =
        "Subject should not exceed 250 characters.";
      isValid = false;
    }
    if (document.getElementById("subject").value?.length < 50) {
      document.getElementById("error-subject").innerHTML =
        "Subject should not shorter than 50 characters.";
      isValid = false;
    }
    document.getElementById("error-subject").innerHTML = "";
  }

  // check validator of input message
  if (!document.getElementById("message").value) {
    document.getElementById("error-message").innerHTML =
      "Please fill out your message";
    isValid = false;
  } else {
    if (document.getElementById("message").value?.length > 500) {
      document.getElementById("error-message").innerHTML =
        "Message should not exceed 500 characters.";
      isValid = false;
    }
    document.getElementById("error-message").innerHTML = "";
  }

  if(isValid) {
    alert("Success submit form")
  }
  return isValid;
}
