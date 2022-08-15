const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const fields = {};

  for (const pair of formData) {
    const key = pair[0];
    const value = pair[1];
    fields[key] = value;
  }

  const data = { fields: fields };

  fetch("https://api.airtable.com/v0/appw2ydFRQ8ci2sk4/contact-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer keycqOTTdYrhPjLob",
    },
    body: JSON.stringify(data),
  });

  contactForm.reset();
});
