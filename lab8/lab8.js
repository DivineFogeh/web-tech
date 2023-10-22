function getDataFromForm() {
  // Get the first name and last name from the input fields
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;

  // Call the runAjax function and send the first and last names as arguments
  runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Set up the AJAX request
  xhr.open("GET", "./ajax.php?fname=" + fname + "&lname=" + lname, true);

  // Define the function to handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // If the response is a string, change the text of the paragraph element with id "responseString"
      document.getElementById("responseString").textContent = xhr.responseText;
    }
  };

  // Send the AJAX request
  xhr.send();
}
