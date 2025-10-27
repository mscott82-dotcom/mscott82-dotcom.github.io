const formElement = document.getElementById("form");
const coursesContainer = document.getElementById("courses");
const addCourseBtn = document.getElementById("addCourseBtn");
const resetBtn = document.getElementById("resetBtn");
const resultDiv = document.getElementById("result");


formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

addCourseBtn.addEventListener("click", () => {
  const courseDiv = document.createElement("div");
  courseDiv.classList.add("course-input");

  const input = document.createElement("input");
  input.type = "text";
  input.name = "course[]";
  input.placeholder = "Enter course";
  input.required = true;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.type = "button";
  delBtn.classList.add("delete-btn");
  delBtn.addEventListener("click", () => {
    courseDiv.remove();
  });

  courseDiv.appendChild(input);
  courseDiv.appendChild(delBtn);
  coursesContainer.appendChild(courseDiv);
});


function handleSubmit() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const courses = Array.from(document.querySelectorAll('input[name="course[]"]'))
    .map(input => input.value.trim())
    .filter(val => val !== "");


  if (!name || !email || courses.length === 0) {
    alert("Fill all boxes");
    return;
  }


  formElement.style.display = "none";
  resultDiv.innerHTML = `
    <h2>Submitted Information</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Courses:</strong></p>
    <ul>${courses.map(c => `<li>${c}</li>`).join("")}</ul>
    <span id="resetLink">Reset and Start Over</span>
  `;

  document.getElementById("resetLink").addEventListener("click", resetForm);
}


function resetForm() {
  formElement.reset();
  resultDiv.innerHTML = "";
  formElement.style.display = "block";

  const allCourses = document.querySelectorAll(".course-input");
  allCourses.forEach((c, i) => {
    if (i > 0) c.remove();
  });
}


resetBtn.addEventListener("click", resetForm);