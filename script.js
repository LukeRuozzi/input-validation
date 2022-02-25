const email = document.getElementById('email');
const fieldWrapper = document.getElementsByClassName('field')[0];

email.addEventListener('keyup', (e) => {
  const text = e.target.value;

  const emailPattern = new RegExp(/\S+@\S+\.[a-z]{2,3}/gm);
  const valid = emailPattern.test(text);

  //console.log(text, valid)

  if (valid) {
    fieldWrapper.classList = 'field field-valid';
  } else {
    fieldWrapper.classList = 'field';
  }

});