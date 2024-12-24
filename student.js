var stdData = [
    {
        "sr_no": 1,
        "Name": "abc",
        "joining_Date": "12/12/2023",
        "Batch": "A"
    },
    {
        "sr_no": 2,
        "Name": "def",
        "joining_Date": "15/12/2023",
        "Batch": "B"
    },
    {
        "sr_no": 3,
        "Name": "ghi",
        "joining_Date": "20/12/2023",
        "Batch": "C"
    }, {
        "sr_no": 1,
        "Name": "abc",
        "joining_Date": "12/12/2023",
        "Batch": "A"
    },
    {
        "sr_no": 2,
        "Name": "def",
        "joining_Date": "15/12/2023",
        "Batch": "B"
    },
    {
        "sr_no": 3,
        "Name": "ghi",
        "joining_Date": "20/12/2023",
        "Batch": "C"
    },
];


function studentsTable() {
    const tableBody = document.getElementById("studentTable").querySelector("tbody");
    tableBody.innerHTML = ""; 

    stdData.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.sr_no}</td>
            <td>${student.Name}</td>
            <td>${student.joining_Date}</td>
            <td>${student.Batch}</td>
        `;
        tableBody.appendChild(row);
    });
}









function filterTable(query) {
    const tableRows = document.querySelectorAll("#studentTable tbody tr");

    tableRows.forEach(row => {
        const serialNumber = row.cells[0].textContent.trim(); 
        const name = row.cells[1].textContent.trim().toLowerCase(); 
        const lowerQuery = query.toLowerCase();
        if (serialNumber == query || name.includes(lowerQuery)) {
            row.classList.remove("hidden"); 
        } else {
            row.classList.add("hidden"); 
        }
    });
}








studentsTable();
const searchBar = document.getElementById("studentinput");
searchBar.addEventListener("input", function() {
    filterTable(this.value.trim()); 
});
