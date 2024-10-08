// use for add event listner to button for genpass
document.querySelector('.gp').addEventListener('click',generatePassword);

function generatePassword() {
    // it store the value in length given by user
    const lenght = parseInt(document.getElementById('lenght').value);

    // .checked is used for check chek box or radio button checked or not
    const includeUpper = document.getElementById('upper').checked;
    const includeLower = document.getElementById('lower').checked;
    const includeNumber = document.getElementById('number').checked;
    const includeSymbol = document.getElementById('symbol').checked;

    // define a charecter set for genret password
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialSymbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    // creat password for user given input
    let charset = ''
    if (includeUpper)charset += upperCaseLetters;
    if (includeLower)charset += lowerCaseLetters;
    if (includeNumber)charset += numbers;
    if (includeSymbol)charset += specialSymbols;

    // in this check at lest one case selected
    if (charset === '') {
        alert('please select at lest one case');  
        return;
    }
    // check the length valid or not 
    if( isNaN(lenght) || lenght <= 0){
        alert('please input right no');
        return;
    }
    // genpass
    let password = ''
    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('text').value = password;
}