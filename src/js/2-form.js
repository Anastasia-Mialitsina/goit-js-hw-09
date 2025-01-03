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
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    form.email.value = formData.email;
    form.message.value = formData.message;
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
  formData.email = "";
  formData.message = "";
  form.reset();
});





