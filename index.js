const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.id) {
      case "=":
        display.value = eval(display.value);
        //eval => evalúa, por medio de javascript, la expresión que haya en la propiedad "value"
        break;
      case "ac":
        display.value = "";
        break;
      case "de":
        display.value = display.value.slice(0,-1);
        break;
      default:
        display.value += btn.id;
        break;
    }
  });
});