export default function validationPassword(password) {
    let validationPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if (validationPassword.test(password)) {
        return true;
    }else{
        return false;
    }
}