const monthSelect = document.getElementById("monthSelect");
const tableContainer = document.getElementById("tableContainer");

const months = [
    {name: "January", days: 31},
    {name: "February", days: 28},
    {name: "March", days: 31},
    {name: "April", days: 30},
    {name: "May", days: 31},
    {name: "June", days: 30},
    {name: "July", days: 31},
    {name: "August", days: 31},
    {name: "September", days: 30},
    {name: "October", days: 31},
    {name: "November", days: 30},
    {name: "December", days: 31}
];

//Add options to dropdown
months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = month.name;
    monthSelect.appendChild(option);
});

function generateTable() {
    const monthIndex = monthSelect.value;
    const days = months[monthIndex].days;

    const table = document.createElement("table");
    let row = document.createElement("tr");

    for (let day = 1; day <= days; day++) {
    const cell = document.createElement("td");
    cell.textContent = day;
    row.appendChild(cell);

    //7 columns
    if (day % 7 === 0) {
        table.appendChild(row);
        row = document.createElement("tr");
    }
    }

    //Finish final row
    if (row.children.length > 0) {
    table.appendChild(row);
    }

    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
}

//Update
monthSelect.addEventListener("change", generateTable);

generateTable();