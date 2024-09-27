document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;
    
    const tableBody = document.getElementById('attendanceTableBody');
    const newRow = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = studentName;
    newRow.appendChild(nameCell);
    
    const statusCell = document.createElement('td');
    statusCell.textContent = attendanceStatus;
    newRow.appendChild(statusCell);
    
    tableBody.appendChild(newRow);
    
    document.getElementById('attendanceForm').reset();
});
