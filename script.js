const email = document.getElementById('email');
const fieldWrapper = document.getElementsByClassName('field')[0];

email.addEventListener('keyup', (e) => {
  const text = e.target.value;
  const valid = text === 'pippo';

  console.log(text, valid)

  if (valid) {
    fieldWrapper.classList = 'field field-valid';
  } else {
    fieldWrapper.classList = 'field';
  }

});