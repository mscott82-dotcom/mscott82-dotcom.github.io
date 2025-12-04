document.addEventListener("DOMContentLoaded", () => {

  const generateBtn = document.createElement("button");
  generateBtn.textContent = "Generate HTML";
  generateBtn.type = "button";
  const buttonContainer = document.querySelector(".buttons");
  buttonContainer.appendChild(generateBtn);

  generateBtn.addEventListener("click", () => {

    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const nickname = document.getElementById("nickname").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const mascotAdj = document.getElementById("mascotAdj").value.trim();
    const mascotAnimal = document.getElementById("mascotAnimal").value.trim();
    const picCaption = document.getElementById("picCaption").value.trim();
    const personalBg = document.getElementById("personalBg").value.trim();
    const profBg = document.getElementById("profBg").value.trim();
    const acadBg = document.getElementById("acadBg").value.trim();
    const quote = document.getElementById("quote").value.trim();
    const quoteAuthor = document.getElementById("quoteAuthor").value.trim();
    const funnyThing = document.getElementById("funnyThing").value.trim();
    const shareSomething = document.getElementById("shareSomething").value.trim();


    const links = {
      CLTWeb: document.getElementById("linkCLTWeb").value.trim(),
      GitHub: document.getElementById("linkGithub").value.trim(),
      GitHubIO: document.getElementById("linkGithubIO").value.trim(),
      FreeCodeCamp: document.getElementById("linkFCC").value.trim(),
      Codecademy: document.getElementById("linkCodecademy").value.trim(),
      LinkedIn: document.getElementById("linkLinkedIn").value.trim()
    };


   const courses = [...document.querySelectorAll(".course")].map((course) => {
  const dept = course.querySelector(".dept").value.trim();
  const num = course.querySelector(".num").value.trim();
  const name = course.querySelector(".name").value.trim();
  const reason = course.querySelector(".reason").value.trim();
  return `          <li><strong>${dept} ${num}</strong> - ${name}${reason ? `: ${reason}` : ""}</li>`;
}).join("\n");
    const displayName = nickname
      ? `${firstName} ${middleName} "${nickname}" ${lastName}`
      : `${firstName} ${middleName} ${lastName}`;


    const htmlOutput = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${firstName} ${lastName}'s ${mascotAdj} ${mascotAnimal} | Introduction</title>
  <link rel="stylesheet" href="styles/default.css">
</head>
<body>
  <div data-include="components/header.html"></div>
  <main>
    <h2 class="center-align">Introduction</h2>
    <h3 class="center-align">${displayName} ★ ${mascotAdj} ${mascotAnimal}</h3>
    <img src="images/img1.jpg" class="center-align" alt="Professional Headshot">
    <p class="center-align">${picCaption}</p>
    <ul>
      <li><strong>Personal Background:</strong> ${personalBg}</li>
      <li><strong>Professional Background:</strong> ${profBg}</li>
      <li><strong>Academic Background:</strong> ${acadBg}</li>
      <li><strong>Courses I'm Taking</strong>
        <ol>
${courses}
        </ol>
      </li>
    </ul>
    <p class="center-align"><em>"${quote}"</em></p>
    <p class="center-align">– ${quoteAuthor}</p>
    ${funnyThing ? `<p><strong>Funny Thing:</strong> ${funnyThing}</p>` : ""}
    ${shareSomething ? `<p><strong>Something I'd Like to Share:</strong> ${shareSomething}</p>` : ""}
    <h4>Links:</h4>
    <ul>
      <li><a href="${links.CLTWeb}" target="_blank">CLT Web</a></li>
      <li><a href="${links.GitHub}" target="_blank">GitHub</a></li>
      <li><a href="${links.GitHubIO}" target="_blank">GitHub.io</a></li>
      <li><a href="${links.FreeCodeCamp}" target="_blank">FreeCodeCamp</a></li>
      <li><a href="${links.Codecademy}" target="_blank">Codecademy</a></li>
      <li><a href="${links.LinkedIn}" target="_blank">LinkedIn</a></li>
    </ul>
  </main>
  <div data-include="components/footer.html"></div>
</body>
</html>`;


    const resultContainer = document.getElementById("resultContainer");
    document.querySelector("h2").textContent = "Introduction HTML";
    document.getElementById("introForm").remove();

    resultContainer.innerHTML = `
<pre><code class="language-html">${htmlOutput
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}</code></pre>`;

    const hljsCSS = document.createElement("link");
    hljsCSS.rel = "stylesheet";
    hljsCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css";
    document.head.appendChild(hljsCSS);

    const hljsScript = document.createElement("script");
    hljsScript.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
    document.body.appendChild(hljsScript);
    hljsScript.onload = () => hljs.highlightAll();
  });
});