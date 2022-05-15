// //gra papier nozyczki kamien

const button = document.querySelector(".button__js");
const userCounter = document.querySelector(".userCounter__js");
const computerCounter = document.querySelector(".computerCounter__js");
const remover = document.querySelector(".remove__js");

newArray = ["papier", "nożyczki", "kamień"];
let userValue = 0;
let computerValue = 0;

const startGame = function (userMessage) {
  userMessage = document.querySelector(".gameBox__js").value;
  let number = Math.floor(Math.random() * 3 + 0);
  result = newArray[number];
  console.log(`Wylosowałem: ${result}`);
  console.log(`Ty dałeś: ${userMessage}`);
  if (result === "papier" && userMessage === "nożyczki") {
    Swal.fire({
      icon: "info",
      title: "Wylosowałem :",
      text: `${result} !`,
    }).then(() => {
      Swal.fire(
        "Wygrałeś ! 💪",
        `Dałeś ${userMessage},<br> ja miałem ${result}`,
        "success"
      );
    });
    userValue++;
    userCounter.innerHTML = userValue;
  } else if (result === "papier" && userMessage === "kamień") {
    Swal.fire({
      icon: "info",
      title: "Wylosowałem :",
      text: `${result} !`,
    }).then(() => {
      Swal.fire(
        "Przegrałeś ! 😏",
        `Dałeś ${userMessage},<br> ja miałem ${result}`,
        "error"
      );
    });
    computerValue++;
    computerCounter.innerHTML = computerValue;
  } else if (result === "nożyczki" && userMessage === "papier") {
    Swal.fire({
      icon: "info",
      title: "Wylosowałem :",
      text: `${result} !`,
    }).then(() => {
      Swal.fire(
        "Przegrałeś ! 😏",
        `Dałeś ${userMessage},<br> ja miałem ${result}`,
        "error"
      );
    });
    computerValue++;
    computerCounter.innerHTML = computerValue;
  } else if (result === "nożyczki" && userMessage === "kamień") {
    Swal.fire({
      icon: "info",
      title: "Wylosowałem :",
      text: `${result} !`,
    }).then(() => {
      Swal.fire(
        "Wygrałeś ! 💪",
        `Dałeś ${userMessage},<br> ja miałem ${result}`,
        "success"
      );
    });
    userValue++;
    userCounter.innerHTML = userValue;
  } else if (result === "kamień" && userMessage === "papier") {
    Swal.fire({
      icon: "info",
      title: "Wylosowałem :",
      text: `${result} !`,
    }).then(() => {
      Swal.fire(
        "Wygrałeś ! 💪",
        `Dałeś ${userMessage},<br> ja miałem ${result}`,
        "success"
      );
    });
    userValue++;
    userCounter.innerHTML = userValue;
  } else if (result === "kamień" && userMessage === "nożyczki") {
    Swal.fire({
      icon: "info",
      title: "Wylosowałem :",
      text: `${result} !`,
    }).then(() => {
      Swal.fire(
        "Przegrałeś ! 😏",
        `Dałeś ${userMessage},<br> ja miałem ${result}`,
        "error"
      );
    });
    computerValue++;
    computerCounter.innerHTML = computerValue;
  } else {
    Swal.fire({
      icon: "info",
      title: "Wylosowałem :",
      text: `${result} !`,
    }).then(() => {
      Swal.fire(
        "Mamy remis ! 😎 ",
        `Dałeś ${userMessage}, ja również miałem ${result}`,
        "info"
      );
    });
  }
};
button.addEventListener("click", startGame);
remover.addEventListener("click", () => {
  userCounter.innerHTML = 0;
  computerCounter.innerHTML = 0;
  userValue = 0;
  computerValue = 0;
});
