interface Student {
  firstName: string;
  lastName: string;
  age: number; 
  location: string;
}

let student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
  location: "New York"  
};

let student2: Student  = {
  firstName: "Jane",
  lastName: "Doe", 
  age: 20,
  location: "Paris" 
};

let studentsList: Student[] = [student1, student2];

let table = document.getElementById("studentTable");

studentsList.forEach(student => {
  let row = document.createElement("tr");
  
  let nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  
  let locationCell = document.createElement("td");
  locationCell.textContent = student.location;  

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  
  table.appendChild(row);
});
