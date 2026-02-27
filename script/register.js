let length = /[A-Za-z\d@$!%*?&]{8,}/
let uppercase = /(?=.*[A-Z])/
let lowercase = /(?=.*[a-z])/
let digit = /(?=.*\d)/
let special = /(?=.[@$!%?&])/
let forName = /^.{2,}$/
let forEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
let forAge = /^(?:[1-9][0-9]?|1[0-1][0-9]|100)$/;

let passwordInput = document.querySelector('.password');
let confirmPasswordInput = document.querySelector('.confirm-password');

let passwordMessages = {
    length: document.querySelector('.charLi'),
    uppercase: document.querySelector('.upLi'),
    lowercase: document.querySelector('.lowLi'),
    digit: document.querySelector('.numLi'),
    special: document.querySelector('.specialLi'),
    match: document.querySelector('.matchLi')
};

let inputnames = document.querySelectorAll('input[type = "text"]')
inputnames.forEach(inp => {
    inp.addEventListener('input', () => {
        if (forName.test(inp.value)) {
            inp.style.borderColor = "rgba(0, 255, 0, 0.6)"
            inp.style.boxShadow = '0 0 8px rgba(0, 255, 0, 0.6)';
            inp.setAttribute('name', 'false');
        } else {
            inp.style.borderColor = "rgba(255, 0, 0, 0.6)"
            inp.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.6)';
            inp.setAttribute('name', 'true');
        }
    })
});

let ageInputs = document.querySelectorAll('input[type="number"]');
ageInputs.forEach(inp => {
    inp.addEventListener('input', () => {
        if (forAge.test(inp.value)) {
            inp.style.borderColor = "rgba(0, 255, 0, 0.6)"
            inp.style.boxShadow = '0 0 8px rgba(0, 255, 0, 0.6)';
            inp.setAttribute('age', 'false');
        } else {
            inp.style.borderColor = "rgba(255, 0, 0, 0.6)"
            inp.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.6)';
            inp.setAttribute('age', 'true');
        }
    });
});

let emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(inp => {
    inp.addEventListener('input', () => {
        if (forEmail.test(inp.value)) {
            inp.style.boxShadow = '0 0 8px rgba(0, 255, 0, 0.6)';
            inp.style.borderColor = 'rgba(0, 255, 0, 0.6)';
            inp.setAttribute('email', 'false');
        } else {
            inp.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.6)';
            inp.style.borderColor = 'rgba(255, 0, 0, 0.6)';
            inp.setAttribute('email', 'true');
        }
    });
});

let passwordInputs = document.querySelectorAll("input[type=password]")
passwordInputs.forEach(inp => {
    inp.addEventListener('input', () => {
        if (length.test(inp.value)) {
            passwordMessages.length.style.color = '#00ff00';
        } else {
            passwordMessages.length.style.color = 'red';
        }
        if (uppercase.test(inp.value)) {
            passwordMessages.uppercase.style.color = '#00ff00';
        } else {
            passwordMessages.uppercase.style.color = 'red';
        }
        if (lowercase.test(inp.value)) {
            passwordMessages.lowercase.style.color = '#00ff00';
        } else {
            passwordMessages.lowercase.style.color = 'red';
        }
        if (digit.test(inp.value)) {
            passwordMessages.digit.style.color = '#00ff00';
        } else {
            passwordMessages.digit.style.color = 'red';
        }
        if (special.test(inp.value)) {
            passwordMessages.special.style.color = '#00ff00';
        } else {
            passwordMessages.special.style.color = 'red';
        }

        if (
            length.test(inp.value) &&
            uppercase.test(inp.value) &&
            lowercase.test(inp.value) &&
            digit.test(inp.value) &&
            special.test(inp.value)
        ) {
            inp.style.boxShadow = '0 0 8px rgba(0, 255, 0, 0.6)';
            inp.style.borderColor = 'rgba(0, 255, 0, 0.6)';
            inp.setAttribute('password', 'false');
        } else {
            inp.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.6)';
            inp.style.borderColor = 'rgba(255, 0, 0, 0.6)';
            inp.setAttribute('password', 'true');
        }
    });
});

if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', () => {
        if (confirmPasswordInput.value && confirmPasswordInput.value === passwordInput.value) {
            passwordMessages.match.style.color = '#00ff00';
            confirmPasswordInput.style.boxShadow = '0 0 8px rgba(0, 255, 0, 0.6)';
            confirmPasswordInput.style.borderColor = 'rgba(0, 255, 0, 0.6)';
            confirmPasswordInput.setAttribute('aria-invalid', 'false');
        } else {
            passwordMessages.match.style.color = 'red';
            confirmPasswordInput.style.boxShadow = '0 0 8px rgba(255, 0, 0, 0.6)';
            confirmPasswordInput.style.borderColor = 'rgba(255, 0, 0, 0.6)';
            confirmPasswordInput.setAttribute('aria-invalid', 'true');
        }
    });
}