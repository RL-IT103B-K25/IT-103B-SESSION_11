console.log("Declaration:", addDeclaration(10, 20));

function addDeclaration(a, b) {
    return a + b;
}

const addExpression = function (a, b) {
    return a + b;
};

console.log("Expression:", addExpression(10, 20));

const addArrow = (a, b) => {
    return a + b;
};

console.log("Arrow:", addArrow(10, 20));

const multiply = (a, b) => a * b;

console.log("Implicit return:", multiply(5, 4));

const smartHome = {
    name: "Smart Home",

    showName: function () {
        console.log("Function Expression this:", this.name);
    },

    showNameArrow: () => {
        console.log("Arrow this:", this.name);
    }
};

smartHome.showName();
smartHome.showNameArrow();

function sumDeclaration() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(
    "Declaration arguments:",
    sumDeclaration(10, 20, 30)
);

const sumArrow = (...numbers) => {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
};

console.log(
    "Arrow parameters:",
    sumArrow(10, 20, 30)
);

const devices = [
    {
        id: "DEV01",
        name: "Điều hòa",
        powerWatts: 1500
    },
    {
        id: "DEV02",
        name: "Quạt",
        powerWatts: 60
    }
];

const findDeviceById = (list, id) => {

    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i];
        }
    }

    return null;
};


const calculateTotalPower = (list) => {

    let totalPower = 0;

    for (let i = 0; i < list.length; i++) {
        totalPower += list[i].powerWatts;
    }

    return totalPower;
};


console.log(
    "Thiết bị DEV01:",
    findDeviceById(devices, "DEV01")
);

console.log(
    "Tổng công suất:",
    calculateTotalPower(devices),
    "W"
);