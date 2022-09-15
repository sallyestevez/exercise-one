// var cool = "hi";
let morecool = 123;
const anotherCool = [];

// the following do the same thing (one is a variable and the other is a function)
function coolFunction() {
    return false;
}

const coolArrowFunction = () => false;

// objects
const coolObject = {
    hi: 'hello',
    coolNumber: 123,
    coolArray: []
}

function hi() {
    return coolObject.coolNumber;
}

// very bad Json
const coolJson = [
    {
        hi: 'hi',
    },
    {
        hi: 'hello',
    },
    coolObject
]