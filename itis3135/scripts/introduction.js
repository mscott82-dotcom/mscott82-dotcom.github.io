document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const output = document.getElementById("output");
  const clearButton = document.getElementById("clearBtn");
  const addCourseBtn = document.getElementById("addCourse");
  const coursesDiv = document.getElementById("courses");


  form.addEventListener("submit", function (e) {
    e.preventDefault();


    if (!form.checkValidity()) {
      alert("Please fill out all required fields before submitting!");
      return;
    }

    const formData = new FormData(form);
    let resultHTML = "<h2>Form Submission</h2><ul>";

    for (let [key, value] of formData.entries()) {
      resultHTML += `<li><strong>${key}:</strong> ${value}</li>`;
    }

    resultHTML += "</ul><a href='' style='color:blue;cursor:pointer;'>Reset</a>";


    form.style.display = "none";
    output.innerHTML = resultHTML;
  });


  clearButton.addEventListener("click", () => {
    Array.from(document.querySelectorAll("form input, form textarea")).forEach((input) => {
      input.value = "";
    });
  });


  addCourseBtn.addEventListener("click", () => {
    const newCourse = document.createElement("div");
    newCourse.classList.add("course");
    newCourse.innerHTML = `
      <label>Department*</label>
      <input type="text" name="dept" required placeholder="e.g. CS">

      <label>Number*</label>
      <input type="text" name="courseNum" required placeholder="e.g. 101">

      <label>Name*</label>
      <input type="text" name="courseName" required placeholder="e.g. Intro to Programming">

      <label>Reason*</label>
      <input type="text" name="reason" required placeholder="Why did you choose this course?">

      <button type="button" class="deleteCourse">Delete</button>
    `;
    coursesDiv.appendChild(newCourse);


    newCourse.querySelector(".deleteCourse").addEventListener("click", () => {
      coursesDiv.removeChild(newCourse);
    });
  });
});
