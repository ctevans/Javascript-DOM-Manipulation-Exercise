var table = document.getElementById('my-table');
var tableBody = document.getElementById('my-table-body');
var form = document.getElementById('my-form');
// On submit.
form.addEventListener('submit', function (event) {
    event.preventDefault(); //Forms will try and automatically submit by default. We don't want this.
    var name = document.getElementById('name').value;
    var age = document.getElementById('address').value;
    var schoolClass = document.getElementById('phoneNumber').value;
    var city = document.getElementById('bookings').value;
    // Prepare new row element.
    var newRow = document.createElement('tr');
    // Name cell.
    var newColName = document.createElement('td');
    newColName.innerHTML = name;
    newRow.appendChild(newColName);
    // Age cell.
    var newColAge = document.createElement('td');
    newColAge.innerHTML = age;
    newRow.appendChild(newColAge);
    // School class cell.
    var newColClass = document.createElement('td');
    newColClass.innerHTML = schoolClass;
    newRow.appendChild(newColClass);
    // City cell.
    var newColCity = document.createElement('td');
    newColCity.innerHTML = city;
    newRow.appendChild(newColCity);
    // Add new row of cells to table.
    tableBody.appendChild(newRow);
    // Clear values.
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('class').value = '';
    document.getElementById('city').value = '';
});