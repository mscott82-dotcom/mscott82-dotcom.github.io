document.addEventListener("DOMContentLoaded", () => {
  let jsonBtn = document.getElementById("generateJSON");
  if (!jsonBtn) {
    jsonBtn = document.createElement("button");
    jsonBtn.type = "button";
    jsonBtn.id = "generateJSON";
    jsonBtn.textContent = "Generate JSON";
    document.querySelector(".buttons").appendChild(jsonBtn);
  }

  jsonBtn.addEventListener("click", () => {

    const firstName = document.getElementById("firstName").value.trim();
    const preferredName = document.getElementById("nickname").value.trim();
    const middleInitial = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const divider = document.getElementById("divider").value.trim();
    const mascotAdjective = document.getElementById("mascotAdj").value.trim();
    const mascotAnimal = document.getElementById("mascotAnimal").value.trim();
    const image = "images/selfimage.jpg"; 
    const imageCaption = document.getElementById("picCaption").value.trim();
    const personalBackground = document.getElementById("personalBg").value.trim();
    const professionalBackground = document.getElementById("profBg").value.trim();
    const academicBackground = document.getElementById("acadBg").value.trim();
    const personalStatement = document.getElementById("quote").value.trim();
    const quoteAuthor = document.getElementById("quoteAuthor").value.trim();


    const courses = [...document.querySelectorAll(".course")].map((course) => ({
      department: course.querySelector(".dept").value.trim(),
      number: course.querySelector(".num").value.trim(),
      name: course.querySelector(".name").value.trim(),
      reason: course.querySelector(".reason").value.trim()
    }));


    const links = [
      { name: "CLT Web", href: document.getElementById("linkCLTWeb").value.trim() },
      { name: "GitHub", href: document.getElementById("linkGithub").value.trim() },
      { name: "GitHub Page", href: document.getElementById("linkGithubIO").value.trim() },
      { name: "freeCodeCamp", href: document.getElementById("linkFCC").value.trim() },
      { name: "Codecademy", href: document.getElementById("linkCodecademy").value.trim() },
      { name: "LinkedIn", href: document.getElementById("linkLinkedIn").value.trim() }
    ];


    const jsonData = {
      firstName,
      preferredName,
      middleInitial,
      lastName,
      divider,
      mascotAdjective,
      mascotAnimal,
      image,
      imageCaption,
      personalStatement,
      personalBackground,
      professionalBackground,
      academicBackground,
      subjectBackground: "", 
      primaryComputer: "", 
      courses,
      links
    };


    const jsonOutput = JSON.stringify(jsonData, null, 2);


    document.querySelector("h2").textContent = "Introduction JSON";
    document.getElementById("introForm").remove();

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = `
<pre><code class="language-json">${jsonOutput
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")}</code></pre>`;

    // Apply highlight.js styling
    hljs.highlightAll();
  });
});