document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const clearBtn = document.getElementById("clearForm");
  const addCourseBtn = document.getElementById("addCourse");
  const coursesField = document.getElementById("coursesField");
  const resultContainer = document.getElementById("resultContainer");
  const formHeadings = document.getElementById("formHeadings");


  clearBtn.addEventListener("click", () => {
    form.querySelectorAll("input, textarea").forEach((el) => {
      if (el.type === "checkbox") el.checked = false;
      else el.value = "";
    });
  });

  addCourseBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("course");
    div.innerHTML = `
      <input type="text" class="dept" placeholder="Department" required>
      <input type="text" class="num" placeholder="Course number" required>
      <input type="text" class="name" placeholder="Course name" required>
      <button type="button" class="deleteCourse">Delete</button>
    `;
    coursesField.insertBefore(div, addCourseBtn);
  });

  coursesField.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteCourse")) {
      e.target.parentElement.remove();
    }
  });

  function generateIntro() {

    if (!document.getElementById("ackCheckbox").checked) {
      alert("You must acknowledge the statement.");
      return;
    }

    const fName = document.getElementById("firstName").value;
    const mName = document.getElementById("middleName").value;
    const lName = document.getElementById("lastName").value;
    const nickname = document.getElementById("nickname").value;
    const mascotAdj = document.getElementById("mascotAdj").value;
    const mascotAnimal = document.getElementById("mascotAnimal").value;
    const divider = document.getElementById("divider").value;
    const personalBg = document.getElementById("personalBg").value;
    const profBg = document.getElementById("profBg").value;
    const acadBg = document.getElementById("acadBg").value;
    const picCaption = document.getElementById("picCaption").value;
    const quote = document.getElementById("quote").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;
    const funnyThing = document.getElementById("funnyThing").value;
    const shareSomething = document.getElementById("shareSomething").value;

    const courses = Array.from(document.querySelectorAll(".course")).map(
      (course) => ({
        dept: course.querySelector(".dept").value,
        num: course.querySelector(".num").value,
        name: course.querySelector(".name").value
      })
    );

    const pictureInput = document.getElementById("picture");
    let imgSrc = "images/img1.jpg"; 
    if (pictureInput.files && pictureInput.files[0]) {
      imgSrc = URL.createObjectURL(pictureInput.files[0]);
    }

    let introHTML = `
      <h2 class="center-align">Introduction</h2>
      <h3 class="center-align">${fName} ${mName} ${lName}${
      nickname ? ` (${nickname})` : ""
    }</h3>
      
      <img id="introImage" src="${imgSrc}" class="center-align" >
      <p id="introCaption" class="center-align" >${picCaption}</p>

      <ul>
        <li><strong>Personal Background:</strong> ${personalBg}</li>
        <li><strong>Professional Background:</strong> ${profBg}</li>
        <li><strong>Academic Background:</strong> ${acadBg}</li>
        <li><strong>Courses I'm Taking</strong>
          <ol>
            ${courses
              .map(
                (c) =>
                  `<li><strong>${c.dept} ${c.num}</strong> - ${c.name}:</li>`
              )
              .join("")}
          </ol>
        </li>
      

      <p class="center-align"><em>"${quote}"</em></p>
      <p class="center-align">– ${quoteAuthor}</p>
    `;

if (funnyThing.trim() !== "") {
  introHTML += `<li><strong>Funny Thing:</strong> ${funnyThing}</li>`;
}
if (shareSomething.trim() !== "") {
  introHTML += `<li><strong>Something I would like to share:</strong> ${shareSomething}</li>`;
}

introHTML += `</ul>`; 

    resultContainer.innerHTML = introHTML;
    const footerHTML = `
    <footer>
      <nav>
    <a href="${
      document.getElementById("linkCLTWeb").value
    }">CLT Web</a> ${divider}
    <a href="${
      document.getElementById("linkGithub").value
    }">GitHub</a> ${divider}
    <a href="${
      document.getElementById("linkGithubIO").value
    }">GitHub.io</a> ${divider}
    <a href="${
      document.getElementById("linkFCC").value
    }">FreeCodeCamp</a> ${divider}
    <a href="${
      document.getElementById("linkCodecademy").value
    }">Codecademy</a> ${divider}
    <a href="${document.getElementById("linkLinkedIn").value}">LinkedIn</a>
  </nav>
      <p>Page Built by <a href="scottenterprises.co/">Scott Enterprises</a> &copy; 2025</p>
    </footer>
  `;

    form.style.display = "none";
    formHeadings.style.display = "none";
    document.body.appendChild(
      document.createRange().createContextualFragment(footerHTML)
    );

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset Form";
    resetBtn.style.marginTop = "1rem";
    resetBtn.addEventListener("click", () => {
      resultContainer.innerHTML = "";
      form.style.display = "block";
      formHeadings.style.display = "block";
      form.reset();
    });
    resultContainer.appendChild(resetBtn);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    generateIntro();
  });
});