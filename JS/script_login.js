const email_valid = 'ismael@gmail.com';
const password_valid = '111';

let login_btn = document.getElementById('login');
let email = document.getElementById('email');
let password = document.getElementById('password');
let advice = document.getElementById('advice');


login_btn.addEventListener('click', function(){
    // console.log(email.value);
    // console.log(password.value);

    if (email.value == email_valid && password.value == password_valid){
        sessionStorage.setItem('session', 'yes');
        window.location = '/M3_week_1_JS/windows/home.html';
        // window.location = '../windows/home.html';
        // window.location.href = 'https://ismael-vasco.github.io/M3_week_1_JS/windows/home.html';
        // window.location.href = 'Ismael-Vasco/M3_week_1_JS/windows/home.html';
    }
    advice.style.display = 'block';

});
// Authomatic translate with google
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en'
    }, 'google_translate_element');
}
