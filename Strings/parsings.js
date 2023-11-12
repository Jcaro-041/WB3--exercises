
function parseAndDiplayName(firstName, last){
    function getFirstName(fullName){
        let end = fullName.indexOf(" ");
        return fullName.substring(0, end);
    }
    
    function getLastName(fullName){
        let end = fullName.indexOf(" ");
        return fullName.substring(end+1);
    }
    
    let firstName = getFirstName(fullName);
    
    let lastName = getLastName(fullName);

    let fullName = "Brenda Kaye";
fullName = "Ian Auston";
fullName = "Siddalee Grace";
}

console.log(`Name: ${fullName}`);

console.log(`First name: ${firstName}`);
console.log(`Last name: ${lastName}`);