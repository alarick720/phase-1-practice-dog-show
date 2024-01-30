document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/dogs')
      .then(response => response.json())
      .then(dogs => {
        const tableBody = document.getElementById('table-body');
        dogs.forEach(dog => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.sex}</td>
            <td><button class="edit-btn" data-id="${dog.id}">Edit</button></td>
          `;
          tableBody.appendChild(row);
        });
      });
  });
  document.addEventListener('click', event => {
    if (event.target.classList.contains('edit-btn')) {
      const dogId = event.target.dataset.id;
      // Fetch the specific dog data and populate the form for editing
      // ...
    }
  });
  const form = document.getElementById('dog-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const dogId = form.dataset.id; // Assume you've set this when the form was populated
  const formData = {
    name: form.elements['name'].value,
    breed: form.elements['breed'].value,
    sex: form.elements['sex'].value
  };

  fetch(`http://localhost:3000/dogs/${dogId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(updatedDog => {
    // Update the table or re-fetch and re-render all dogs
    // ...
  });
});