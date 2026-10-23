const array = [1, 2, 1, "muhazzib", true, undefined];
console.log(array, "array");

const set = new Set(array);
const student = { student: "Ali" };
set.add("bilal");
set.add(student);
set.add(true);

console.log(set.has(student), "set before delete");

set.delete(student);

console.log(set.size, "Set Size===");
console.log(set.has(student), "set after delete ===");
console.log(set, "set");

for (setValue of set) {
  console.log(setValue, "setValueaetValue");
}

set.forEach((setValue) => {
  console.log(setValue);
});

console.log(Array.from(set), "convert back to array");

// const students = ["muhazzib", "bilal", "hamid", ]

// Map

const map = new Map();
map.set(true, "This is Boolean");
const alertUser = () => alert();
map.set(alertUser, true);
map.set("muhazzib", 3);
map.set(NaN, true);
console.log(map.get(NaN));
console.log(map.size);


for ([key, value] of map) {
    console.log(key, "keykeykey");
    console.log(value, "valuevaluevalue");
}
