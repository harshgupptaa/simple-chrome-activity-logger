document.addEventListener("DOMContentLoaded", () => {
  logEvent("popup_loaded", "Extension popup opened");

  const input = document.getElementById("textInput");
  const button = document.getElementById("logButton");
  const infoDiv = document.getElementById("info");

  input.addEventListener("input", (e) => {
    logEvent("input_changed", e.target.value);
  });

  input.addEventListener("focus", () => {
    logEvent("input_focus", "Input focused");
  });

  input.addEventListener("blur", () => {
    logEvent("input_blur", "Input lost focus");
  });

  button.addEventListener("click", () => {
    logEvent("button_clicked", "User clicked the button");
    infoDiv.textContent = "Button was clicked!";
    logEvent("content_changed", "Div content updated");
  });
});
