var x = 2;
var y = 4;
function calculateSquire(num) {
    var result = num * num;
    return result;
}

calculateSquire(2);


const circleRadius =[3, 6, 8, 5];
const calculateArea = (radius) => {
    const output = []
    radius.forEach((r) => {
        output.push(Math.PI * (r * r));

    }
)
return output;
};

console.log(calculateArea(circleRadius))


const calculateCircum = (radius) => {
    const output = []
    radius.forEach((r) => {
        output.push(2 * Math.PI * r );

    }
)
return output;
};

console.log(calculateCircum(circleRadius))

const calculateDiameter = (radius) => {
    const output = []
    radius.forEach((r) => {
        output.push(2 * r );

    }
)
return output;
};

console.log(calculateDiameter(circleRadius))


const circleRadius =[3, 6, 8, 5];

const area = (r) => Math.PI * (r * r);
const circumference = (r) => 2 * Math.PI * r;
const diameter = (r) => 2 * r;

const calculate = (radius, callback) => radius.map((r) => callback(r));

const areaOfCircle = calculate(circleRadius, circumference);
console.log(areaOfCircle);
