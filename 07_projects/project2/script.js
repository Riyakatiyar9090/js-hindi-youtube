const formdata = document.querySelector("form");
console.log(formdata);

formdata.addEventListener("submit", function (e) {
  e.preventDefault(); // to stop form to submit on server as we want ans on console and we havn't connected it to server.

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const ans = document.querySelector("#guide");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      ans.innerHTML = `<span>Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      ans.innerHTML = `<span>Under Weight</span>`;
    } else {
      ans.innerHTML = `<span>Over Weight</span>`;
    }
  }
});
