function validateForm(){
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("birthdate");
    const sexInput = document.getElementById("sex");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const dateError = document.getElementById("birthdateError");
    const sexError = document.getElementById("sexError");
    const messageError = document.getElementById("messageError");

    nameError.innerHTML = "";
    dateError.innerHTML = "";
    sexError.innerHTML = "";
    messageError.innerHTML = "";

    let isValid = true;

    // Validate the name field
    if (nameInput.value.trim() === "") {
      nameError.innerHTML = "Name is required";
      isValid = false;
    }
  
    // Validate the birthday field
    if (dateInput.value === "") {
      dateError.innerHTML = "Birth date is required";
      isValid = false;
    }
  
    // Validate the sex field
    if (sexInput.value === "") {
      sexError.innerHTML = "Sex is required";
      isValid = false;
    }
  
    // Validate the message field
    if (messageInput.value.trim() === "") {
      messageError.innerHTML = "Message is required";
      isValid = false;
    }
  
    // If the form is not valid, prevent submission
    if (!isValid) {
      event.preventDefault();
      return false;
    }

    const table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
    const row = table.insertRow(-1);
    const nameCell = row.insertCell(0);
    const dateCell = row.insertCell(1);
    const sexCell = row.insertCell(2);
    const messageCell = row.insertCell(3);
    nameCell.innerHTML = nameInput.value;
    dateCell.innerHTML = dateInput.value;
    sexCell.innerHTML = sexInput.value;
    messageCell.innerHTML = messageInput.value;

    return false;
}
