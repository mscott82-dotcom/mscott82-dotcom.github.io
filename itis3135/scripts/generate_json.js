

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const buttonBlock = form.querySelector(".ButtonBlock:last-of-type");


  const generateJSONBtn = document.createElement("button");
  generateJSONBtn.type = "button";
  generateJSONBtn.id = "generateJSON";
  generateJSONBtn.textContent = "Generate JSON";
  buttonBlock.appendChild(generateJSONBtn);

  generateJSONBtn.addEventListener("click", () => {
    const formData = new FormData(form);


    const data = {
      firstName: formData.get("firstName"),
      middleName: formData.get("middleName"),
      nickname: formData.get("nickname"),
      lastName: formData.get("lastName"),
      ackStatement: formData.get("ackStatement"),
      ackDate: formData.get("ackDate"),
      mascotAdj: formData.get("mascotAdj"),
      mascotAnimal: formData.get("mascotAnimal"),
      divider: formData.get("divider"),
      caption: formData.get("caption"),
      personalStatement: formData.get("personalStatement"),
      mainBullets: formData.get("mainBullets")
        ? formData.get("mainBullets").split(",").map(b => b.trim())
        : [],
      quote: formData.get("quote"),
      quoteAuthor: formData.get("quoteAuthor"),
      funnyThing: formData.get("funnyThing"),
      share: formData.get("share"),
      links: formData.get("links")
        ? formData.get("links").split(",").map(l => l.trim())
        : [],
    };


    const jsonOutput = JSON.stringify(data, null, 2);


    const main = document.querySelector("main");
    main.innerHTML = `
      <h2>Introduction JSON</h2>
      <section>
        <pre><code class="language-json">${escapeHTML(jsonOutput)}</code></pre>
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
