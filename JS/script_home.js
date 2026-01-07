
// change theme
const form_theme = document.getElementById('form-theme');
const body = document.body;

// Leer el tema guardado en localStorage o usar 'auto'
const savedTheme = localStorage.getItem('theme') || 'auto';
body.setAttribute('data-bs-theme', savedTheme);


// Manejar el clic del botón
form_theme.addEventListener('change', function(event) {
    // console.log(event.target.value);

    let newTheme = event.target.value;

    body.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Guarda la preferencia
});


// change language
const form_language = document.getElementById('form-lang');

const savedLanguage = localStorage.getItem('lan') || 'es';
changeLanguage(savedLanguage);

form_language.addEventListener('change', function(event) {
    changeLanguage(event.target.value);

    localStorage.setItem('lan', event.target.value);
});



async function changeLanguage(lang) {
    const response = await fetch(`../lang/${lang}.json`);
    const data = await response.json();

    // Itera sobre todos los elementos con data-key
    document.querySelectorAll('[data-section]').forEach(element => {
        const section = element.getAttribute('data-section');
        const value = element.getAttribute('data-value');
        if (data[section] && data[section][value]) {
            element.innerHTML = data[section][value];
        }
    });
}