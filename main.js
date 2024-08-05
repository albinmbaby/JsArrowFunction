const enterStringValue = (input) => {
    let result = "";
    let uppercase = input.toUpperCase();

    for(let i = 0; i < input.length; i++){
        result += `${i}${uppercase[i]}`;
    }

    return result;

}

let input = prompt("Enter a String");
let disply = enterStringValue(input);
document.write(disply);