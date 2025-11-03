document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const buttonBlock = form.querySelector(".ButtonBlock:last-of-type");


  const generateHTMLBtn = document.createElement("button");
  generateHTMLBtn.type = "button";
  generateHTMLBtn.id = "generateHTML";
  generateHTMLBtn.textContent = "Generate HTML";
  buttonBlock.appendChild(generateHTMLBtn);

  generateHTMLBtn.addEventListener("click", () => {
    const formData = new FormData(form);

    const firstName = formData.get("firstName");
    const middleName = formData.get("middleName");
    const nickname = formData.get("nickname");
    const lastName = formData.get("lastName");
    const ackStatement = formData.get("ackStatement");
    const ackDate = formData.get("ackDate");
    const mascotAdj = formData.get("mascotAdj");
    const mascotAnimal = formData.get("mascotAnimal");
    const divider = formData.get("divider");
    const caption = formData.get("caption");
    const personalStatement = formData.get("personalStatement");
    const mainBullets = formData.get("mainBullets");
    const quote = formData.get("quote");
    const quoteAuthor = formData.get("quoteAuthor");
    const funnyThing = formData.get("funnyThing");
    const share = formData.get("share");
    const links = formData.get("links");

    const htmlContent = `
<section>
  <h2>My Introduction</h2>
  <p><strong>Name:</strong> ${firstName} ${middleName} "${nickname}" ${lastName}</p>
  <p><strong>Acknowledgment:</strong> ${ackStatement} (${ackDate})</p>
  <p><strong>Mascot:</strong> The ${mascotAdj} ${mascotAnimal}</p>
  <hr>
  <figure>
    <img src="https://via.placeholder.com/150" alt="${caption}">
    <figcaption>${caption}</figcaption>
  </figure>
  <p><strong>Personal Statement:</strong> ${personalStatement}</p>
  <ul>
    ${mainBullets.split(",").map(b => `<li>${b.trim()}</li>`).join("")}
  </ul>
  <blockquote>
    “${quote}” — ${quoteAuthor}
  </blockquote>
  ${funnyThing ? `<p><strong>Funny Thing:</strong> ${funnyThing}</p>` : ""}
  ${share ? `<p><strong>Something to Share:</strong> ${share}</p>` : ""}
  <p><strong>Links:</strong></p>
  <ul>
    ${links.split(",").map(l => `<li><a href="${l.trim()}">${l.trim()}</a></li>`).join("")}
  </ul>
</section>`;


    const main = document.querySelector("main");
    main.innerHTML = `
      <h2>Introduction HTML</h2>
      <section>
        <pre><code class="language-html">${escapeHTML(htmlContent)}</code></pre>
      </section>
    `;


    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js";
    script.onload = () => hljs.highlightAll();
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css";
    document.head.appendChild(link);
  });


  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
});