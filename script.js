document.addEventListener('DOMContentLoaded', function () {
  const inputValue = document.getElementById("user-input");

  document.getElementById("calculator").addEventListener("click", function (e) {
      const target = e.target;

      if (target.classList.contains("numbers")) {
          if (inputValue.innerText === "0" || inputValue.innerText === "NaN") {
              inputValue.innerText = "";
          }
          inputValue.innerText += target.innerText;
      }

      if (target.classList.contains("operations")) {
          const lastValue = inputValue.innerText.slice(-1);

          switch (target.innerText) {
              case "=":
                  try {
                      inputValue.innerText = eval(inputValue.innerText);
                  } catch {
                      inputValue.innerText = "NaN";
                  }
                  break;
              case "AC":
                  inputValue.innerText = "0";
                  break;
              case "DEL":
                  inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
                  break;
              default:
                  if (!isNaN(lastValue) || lastValue === ".") {
                      inputValue.innerText += target.innerText;
                  }
                  break;
          }
      }
  });
});
