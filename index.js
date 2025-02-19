//console.log(validatePassword("helloworld","hello"));
//console.log(validatePassword("helloworld","helloworld"));
//console.log(validatePassword("hello123","hello123"));
//console.log(validatePassword("HELLO123","HELLO123"));
//console.log(validatePassword("Hello123","Hello123"));

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass123"));

function validatePassword(str1,str2){

    // check parameter 1
    if(str1 == str2){
        // check parameter 2
        if(str1.length >= 8){
            // check parameter 3
            var x = false; // num
            var y = false; // uppercase
            var z = false; // lowercase

            for(let i = 0; i < str1.length; i++){
                if(!isNaN(str1[i])){ // check if number
                    x = true; 
                }else{ // if not an number, check other 2 parameters
                    
                    if(str1[i] == str1[i].toUpperCase() ){ // check if uppercase
                        y = true;
                    }
    
                    if(str1[i] == str1[i].toLowerCase()){ // check if lowercase
                        z = true;
                    }
                }
            }

            if(x == true && y == true && z == true){
                return true;
            }else{
                return false; // at least 1 of the parameters is not met
            }
        }else{
            return false; // not at least 8 characters
        }
    }else{
        return false; // passwords don't match
    }
}

function reversePassword(password){
    var newString = "";

    for(let i = password.length-1; i >= 0; i--){
        newString = newString + password[i]
    }

    return newString;
}

function storePassword(name,password1,password2){
    var pass = "";
    const user = {
        name: name
    }
    if(validatePassword(password1,password2)){ // store if password is valid
        pass = reversePassword(password1);
        user.newpassword = pass;
    }else{
        user.newpassword = password1;
    }

    return user;
}