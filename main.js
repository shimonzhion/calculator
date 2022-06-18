let screen = document.getElementById("screen");
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
        case 'x':
            screen.innerText += '*'
            break;
        case '%':
            screen.innerText += '/'
            break;
      case "AC":
        screen.innerText = "";
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Error";
        }
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});
