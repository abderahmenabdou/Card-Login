let cardName = document.getElementById("card-name");
let cardNumber = document.getElementById("card-number");
let month = document.getElementById("month");
let year = document.getElementById("year");
let cvc = document.getElementById("cvc");

let txtNumber = document.getElementById("txt-number");
let txtName = document.getElementById("txt-name");
let txtMonth = document.getElementById("txt-month");
let txtYear = document.getElementById("txt-year");
let txtCvc = document.getElementById("txt-cvc");

let submit = document.getElementById("submit");
let form = document.getElementById("form");
let final = document.querySelector(".final");

let tName = document.getElementById("tName");
let tNumber = document.getElementById("tNumber");
let tCvc = document.getElementById("tCvc");

cardName.oninput = function () {
  txtName.textContent = cardName.value;
};
cardNumber.oninput = function () {
  txtNumber.textContent = cardNumber.value;
};
month.oninput = function () {
  txtMonth.textContent = `${month.value} /`;
};
year.oninput = function () {
  txtYear.textContent = year.value;
};
cvc.oninput = function () {
  txtCvc.textContent = cvc.value;
};

submit.addEventListener("click", () => {
  if (cardName.value !== "") {
    txtName.textContent = cardName.value;
  } else {
    tName.classList.remove("text");
    cardName.style.borderColor = "red";
  }

  if (cardNumber.value !== "") {
    txtNumber.textContent = cardNumber.value;
  } else {
    tNumber.classList.remove("text");
    cardNumber.style.borderColor = "red";
  }

  if (month.value !== "") {
    txtMonth.textContent = `${month.value} /`;
  } else {
    month.style.borderColor = "red";
  }

  if (year.value !== "") {
    txtYear.textContent = year.value;
  } else {
    year.style.borderColor = "red";
  }
  if (cvc.value !== "") {
    txtCvc.textContent = cvc.value;
  } else {
    tCvc.classList.remove("text");
    cvc.style.borderColor = "red";
  }

  wrongData();
  trueData();
  clearData();
});

// clear data
function clearData() {
  cardName.value = "";
  cardNumber.value = "";
  month.value = "";
  year.value = "";
  cvc.value = "";
}

let continu = document.getElementById("continue");

continu.addEventListener("click", () => {
  form.style.display = "block";
  final.style.display = "none";

  txtName.textContent = "name card";
  txtNumber.textContent = "number card";
  txtMonth.textContent = "MM /";
  txtYear.textContent = "YY";
  txtCvc.textContent = "000";
});

function wrongData() {
  if (
    cardName.value === "" &&
    cardNumber.value === "" &&
    month.value === "" &&
    year.value === "" &&
    cvc.value === ""
  ) {
    tName.classList.remove("text");
    cardName.style.borderColor = "red";
    tNumber.classList.remove("text");
    cardNumber.style.borderColor = "red";
    month.style.borderColor = "red";
    year.style.borderColor = "red";
    tCvc.classList.remove("text");
    cvc.style.borderColor = "red";
  }
}

function trueData() {
  if (
    cardName.value !== "" &&
    cardNumber.value !== "" &&
    month.value !== "" &&
    year.value !== "" &&
    cvc.value !== ""
  ) {
    form.style.display = "none";
    final.style.display = "block";
    clearData();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const cardNumberError = document.getElementById("tNumber");

  cardNumber.addEventListener("input", () => {
    let value = cardNumber.value.replace(/\s+/g, "");
    let formattedValue = "";

    // Check for non-digit characters
    if (/\D/.test(value)) {
      cardNumberError.textContent = "Please enter digits only.";
      cardNumberError.style.display = "block";
      cardNumber.classList.add("invalid");
    } else {
      cardNumberError.style.display = "none";
      cardNumber.classList.remove("invalid");

      // Format the value with spaces every 4 digits
      for (let i = 0; i < value.length; i += 4) {
        formattedValue += value.slice(i, i + 4) + " ";
      }

      cardNumber.value = formattedValue.trim();
    }
  });

  cardNumber.addEventListener("blur", () => {
    let value = cardNumber.value.replace(/\s+/g, "");

    if (value.length !== 16) {
      cardNumberError.textContent = "Card number must be 16 digits long.";
      cardNumberError.style.display = "block";
      cardNumber.classList.add("invalid");
    } else {
      cardNumberError.style.display = "none";
      cardNumber.classList.remove("invalid");
    }
  });
});
