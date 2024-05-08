const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "0123456789";
const symbolset = "!@#+%&/(";

const passbox = document.getElementById("pass-box");
const totalchar = document.getElementById("totalchar");
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const numberinput = document.getElementById("numbers");
const symbolinput = document.getElementById("symbols");

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatePassword = (password = "") => {
  if (upperinput.checked) {
    password += getRandomData(upperset);
  }
  if (lowerinput.checked) {
    password += getRandomData(lowerset);
  }
  if (numberinput.checked) {
    password += getRandomData(numberset);
  }
  if (symbolinput.checked) {
    password += getRandomData(symbolset);
  }
  if (password.length < totalchar.value) {
    return generatePassword(password);
  }
  passbox.innerText = truncatestring(password, totalchar.value);
};

document.getElementById("generate-btn").addEventListener("click", function () {
  generatePassword();
});
generatePassword();

function truncatestring(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}