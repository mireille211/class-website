
import { useState } from "react";

function Students() {
  const [students, setStudents] = useState([
    "Mireille",
    "Alice",
    "Eric",
    "Jean"
  ]);

  const [studentName, setStudentName] = useState("");

  function addStudent() {
    if (studentName.trim() !== "") {
      setStudents([...students, studentName.trim()]);
      setStudentName("");
    }
  }

  return (
    <section>
      <h2>Our Students</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <h3>Add a Student</h3>

      <input
        type="text"
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
        placeholder="Enter student name"
      />

      <button onClick={addStudent}>Add Student</button>
    </section>
  );
}

export default Students;
