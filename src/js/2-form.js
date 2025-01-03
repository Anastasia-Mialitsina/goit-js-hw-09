const formHTML = `
  <form class="feedback-form" autocomplete="off">
    <label>
      Email
      <input type="email" name="email" autofocus />
    </label>
    <label>
      Message
      <textarea name="message" rows="8"></textarea>
    </label>
    <button type="submit">Submit</button>
  </form>
`;

document.getElementById("form-container").innerHTML = formHTML;

const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  if (name === "email" || name === "message") {
    formData[name] = value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email || "";
    form.message.value = message || "";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, message } = formData;

  if (!email || !message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  form.reset();
});






