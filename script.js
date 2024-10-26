let eventCount = 0;

function addEvent() {
    eventCount++;
    const eventDiv = document.createElement('div');
    eventDiv.innerHTML = `
        <h3>Event ${eventCount}</h3>
        <p>Date: <input type="date" id="eventDate${eventCount}" required></p>
        <p>Location: <input type="text" id="eventLocation${eventCount}" required></p>
        <p>Description: <textarea id="eventDescription${eventCount}" required></textarea></p>
        <button onclick="removeEvent(this)">Remove Event</button>
    `;
    document.getElementById('eventList').appendChild(eventDiv);
}

function removeEvent(button) {
    const eventDiv = button.parentElement; 
    eventDiv.remove();
}


function submitProfile(event) {
    event.preventDefault(); 

    const profileData = {
        fullName: document.getElementById('fullName').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        medicalHistory: document.getElementById('medicalHistory').value,
        medications: document.getElementById('medications').value,
        allergies: document.getElementById('allergies').value,
        primaryPhysician: document.getElementById('primaryPhysician').value,
        insuranceProvider: document.getElementById('insuranceProvider').value,
        policyNumber: document.getElementById('policyNumber').value,
        groupNumber: document.getElementById('groupNumber').value,
        terms: document.getElementById('terms').checked,
        privacy: document.getElementById('privacy').checked,
        dataConsent: document.getElementById('dataConsent').checked
    };

    console.log('Profile submitted:', profileData);

    alert('Profile submitted successfully!'); 
    window.location.href = 'profile.html'; 
}


function submitLogin(event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password.length < 8) {
        errorMessage.style.display = 'block'; 
    } else {
        errorMessage.style.display = 'none'; 


        const loginData = {
            username: document.getElementById('username').value,
            password: password
        };

        console.log("Login Data:", loginData);

        window.location.href = 'homepage.html';
    }
}