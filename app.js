function validationPassword(){
    let userPass = document.querySelector("#password").value;
    let error = document.querySelector("#error");
    let isCapital = false;
    let issmall = false;
    let isNumber = false;
    let isChar = false;

    let SpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|", "`", "~", "\\"]

if(userPass.trim() == ""){
    error.innerText = "user input is Empty!!";
    return;
}

if(userPass.length < 8){
    error.innerText = "Password Should be Greater than (8) Digits";
    return;
}

    for(let i = 0; i < userPass.length; i++){
        if(userPass[i] >= 'A' && userPass[i] <= 'Z'){
            isCapital = true;
        }
        else if(userPass[i] >= 'a' && userPass[i] <= 'z'){
            issmall = true;
        }
        else if(userPass[i] >= '0' && userPass[i] <= '9'){
            isNumber = true;
        }
        else if(SpecialChar.includes(userPass[i])){
            isChar = true;
        }
    }

    if(isCapital && issmall && isNumber && isChar){
        error.innerText = "Valid Password!";
    }
    else{
        error.innerText = "Invalid Password";
    }
}
