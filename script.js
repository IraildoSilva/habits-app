
const form = document.querySelector('.form-habits')
const nlwSetup = new NLWSetup(form);
const dayRegister = document.querySelector('.day-register');

dayRegister.addEventListener('click', register);
form.addEventListener('change', save);

function register() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, 5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert('Dia já resgistrado 🚫');
    return
  };

  nlwSetup.addDay(today);
};

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
  console.log(localStorage);
};

const data = JSON.parse(localStorage.getItem('NLWSetup@habits'));

nlwSetup.setData(data);
nlwSetup.load();





