/*--------------------------------
Reusable Variables ---------------
----------------------------------
*/

const form = document.querySelector('form');
const table = document.querySelector('.table-target');
const number2 = document.getElementById('number2');
const number1 = document.getElementById('number');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const numberOne = e.target.number.value;
  const numberTwo = e.target.number2.value;
  e.target.number.value = '';
  e.target.number2.value = '';

  const template = `
        <table>
          <thead>
              <tr>
                <th>Number</th>
                <th>Multiplier</th>
                <th>Result</th>
              </tr>
          </thead>
          
          <tbody>
           ${Array.from({ length: numberTwo }, (emp, i) => i + 1)
      .map(function (ind, i) {
        return `
              <tr>
                <td>${numberOne}</td>
                <td>${i + 1}</td>
                <td>${numberOne * (i + 1)}</td>
              </tr>
            `
      }).join("")}
              
          </tbody >
        </table >
  `

  table.innerHTML = template;
})