import {passwordStrength} from 'check-password-strength';

const randomNum = (min, max ) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generatePwd = (hasNumbers, hasSymbols, hasLowerCase, hasUpperCase, count) => {
    let password = "";
    const numbers = "0123456789".split('').sort(() => Math.random() - 0.5);
    const lowercase = "abcdefghijklmnopqrstuvwxyz".split('').sort(() => Math.random() - 0.5);
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').sort(() => Math.random() - 0.5);
    const symbols = `!"#$%&'()*+,-./:;<=>?@[]^_\`{|}~`.split('').sort(() => Math.random() - 0.5);

    const pickFromArray = [];
    if(hasLowerCase) pickFromArray.push(lowercase);
    if(hasUpperCase) pickFromArray.push(uppercase);
    if(hasNumbers) pickFromArray.push(numbers);
    if(hasSymbols) pickFromArray.push(symbols);


    pickFromArray.sort(() => Math.random() - 0.5);

    for(let i = 0; i < count; i++){
        let randomIndex = randomNum(0, pickFromArray.length - 1);
        password += pickFromArray[randomIndex][randomNum(0, pickFromArray[randomIndex].length - 1)];
    }

    return {password, passwordStrength: passwordStrength(password).value};
   
}