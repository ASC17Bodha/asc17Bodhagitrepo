function updateTable() {
    const name = document.getElementById('name').value;
    const emailid = document.getElementById('emailid').value;
    const password = document.getElementById('password1').value;
    const address = document.getElementById('txtarea').value;
    const gender = document.querySelector("input[name='gender']:checked") ? document.querySelector("input[name='gender']:checked").value : '';

    const table = document.getElementById('table1');
    
    // Check if there is at least one row in the table, if not create one
    let lastRow = table.rows[table.rows.length - 1];
    if (!lastRow || lastRow.cells.length < 5) {
        lastRow = table.insertRow();
        for (let i = 0; i < 5; i++) {
            lastRow.insertCell(i);
        }
    }

    // Update the last row with current input values
    lastRow.cells[0].textContent = name;
    lastRow.cells[1].textContent = emailid;
    lastRow.cells[2].textContent = password;
    lastRow.cells[3].textContent = address;
    lastRow.cells[4].textContent = gender;
}

function saveData(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const emailid = document.getElementById('emailid').value;
    const password = document.getElementById('password1').value;
    const address = document.getElementById('txtarea').value;
    const gender = document.querySelector("input[name='gender']:checked") ? document.querySelector("input[name='gender']:checked").value : '';

    // Create an object for local storage
    const formData = { name, emailid, password, address, gender };

    // Save data to local storage
    let savedData = JSON.parse(localStorage.getItem('formlocal')) || [];
    savedData.push(formData);
    localStorage.setItem('formlocal', JSON.stringify(savedData));

    // Add a new row to the table
    const table = document.getElementById('table1');
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = emailid;
    row.insertCell(2).textContent = password;
    row.insertCell(3).textContent = address;
    row.insertCell(4).textContent = gender;

    // Reset the form
    document.querySelector('form').reset();
    updateTable(); // Clear the last row after submission
}

window.onload = function() {
    // Load saved data from local storage and display it in the table
    const savedData = JSON.parse(localStorage.getItem('formlocal')) || [];
    const table = document.getElementById('table1');

    savedData.forEach(data => {
        const row = table.insertRow();
        row.insertCell(0).textContent = data.name;
        row.insertCell(1).textContent = data.emailid;
        row.insertCell(2).textContent = data.password;
        row.insertCell(3).textContent = data.address;
        row.insertCell(4).textContent = data.gender;
    });

    // Add event listener for form inputs to update the table in real-time
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', updateTable);
    });

    // Listen for changes in the gender radio buttons
    const genderInputs = document.querySelectorAll("input[name='gender']");
    genderInputs.forEach(input => {
        input.addEventListener('change', updateTable);
    });

    // Add event listener for form submission
    document.querySelector('form').addEventListener('submit', saveData);
};
