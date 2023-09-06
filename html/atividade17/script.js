const login = document.getElementById('ilogin')
const pass = document.getElementById('ipassword')
const formu = document.getElementById('iformulario')
const enviar = document.getElementById('ientrar')

enviar.addEventListener('click', (event) => {
    event.preventDefault();

    if (login.value == ''){
        alert('Login em branco')
        login.classList = 'erro'
    }

    if (pass.value == '') {
        alert('Digite a senha')
        pass.classList = 'erro'
    }


})