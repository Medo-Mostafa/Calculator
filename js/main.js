let input = document.querySelector(".input");
let output = document.querySelector(".output");
let buttons = Array.from(document.querySelectorAll("button"));

// buttons.map((ele) => {
//   ele.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "AC":
//         screen.innerText = "";
//         break;
//       case "DEL":
//         if (screen.innerText) {
//           screen.innerText = screen.innerText.slice(0, -1);
//         }
//         break;
//       case "=":
//         try {
//           output.innerText = eval(screen.innerText);
//         } catch {
//           output.innerText = "Syntax Error";
//         }
//         break;
//       default:
//         if (screen.innerText === "Syntax Error") {
//           screen.innerText = "";
//         }
//         if (screen.innerText === "0") {
//           screen.innerText = "";
//         }
//         input.innerText += e.target.innerText;
//     }
//   });
// });

buttons.map((ele) => {
  ele.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        input.innerText = "";
        output.innerText = "";
        break;
      case "DEL":
        if (input.innerText) {
          input.innerText = input.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          output.innerText = eval(input.innerText);
        } catch {
          output.innerText = "Syntax Error";
        }
        break;
      default:
        input.innerText += e.target.innerText;
    }
  });
});
