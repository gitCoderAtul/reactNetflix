const checkValidData = (email,password)=>{ 
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);  
    if(!isEmailValid){
        return ' Email Id is not valid '
    }
    if(!isPasswordValid){
        return ' Password is not valid '
    }
    return null;
}
const checkValidDataSignUp = (displayName,email,password)=>{
    const isUserValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(displayName)
    checkValidData(email,password)
    if (!isUserValid) return 'Enter valid User name is not valid ';
    
    return null;
}
export {checkValidData,checkValidDataSignUp};