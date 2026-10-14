const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get basic values
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;

    // Get gender
    let genderElement = document.querySelector('input[name="gender"]:checked');

    let gender = genderElement
        ? genderElement.value
        : "Not Selected";

    // Get selected skills
    let skillElements = document.querySelectorAll('input[name="subjects"]:checked');

    let skills = [];

    skillElements.forEach(function(skill) {
        skills.push(skill.value);
    });

    // Get course and language
    let course = document.getElementById("course").value;
    let language = document.getElementById("language").value;

    // Get date and time
    let dob = document.getElementById("dob").value;
    let time = document.getElementById("requiredTime").value;

    // Get agreement
    let agreement = document.getElementById("agreement").checked
        ? "Accepted"
        : "Not Accepted";

    // Get favorite color
    let color = document.getElementById("favoriteColor").value;

    // Get resume filename
    let resumeInput = document.getElementById("resume");

    let resume = resumeInput.files.length > 0
        ? resumeInput.files[0].name
        : "No File Selected";

    // Get portfolio URL
    let portfolio = document.getElementById("portfolio").value;

    // Get hidden field
    let formType = document.getElementById("formType").value;

    // Get search topic
    let searchTopic = document.getElementById("searchTopic").value;

    // Display information on webpage
document.getElementById("result").innerHTML = `
    <h2>Student Information</h2>

    <p>My name is ${name}. My email address is ${email}. My age is ${age} years old and my mobile number is ${mobile}.</p>

    <p>My gender is ${gender}. My selected skills are ${skills.join(", ")}.</p>

    <p>I have selected ${course || "no course"} as my course and ${language} as my preferred programming language.</p>

    <p>My date of birth is ${dob || "not provided"} and my required time is ${time || "not provided"}.</p>

    <p>My agreement status is ${agreement}. My favorite color code is ${color}.</p>

    <p>My uploaded resume file is ${resume}. My portfolio URL is ${portfolio || "not provided"}.</p>

    <p>My form type is ${formType} and my search topic is ${searchTopic || "not provided"}.</p>
`;



});

// Reset event
form.addEventListener("reset", function() {

    document.getElementById("result").innerHTML = "";

    alert("Form has been reset!");

});