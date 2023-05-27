const medicationForm = document.getElementById('medication-form');
const medicationList = document.getElementById('medication-items');

medicationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const dosageInput = document.getElementById('dosage');
  const scheduleInput = document.getElementById('schedule');

  const medication = {
    name: nameInput.value,
    dosage: dosageInput.value,
    schedule: scheduleInput.value,
  };

  // Send a POST request to the server to save the medication
  fetch('/medications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(medication),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Handle the server response
    nameInput.value = '';
    dosageInput.value = '';
    scheduleInput.value = '';
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});

// Fetch and display the list of medications
fetch('/medications')
  .then((response) => response
