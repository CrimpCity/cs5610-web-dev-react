// const array = [2, 5, 9];
let items = [
    { id: 'abc', name: 'oh' },
    { id: 'efg', name: 'em' },
    { id: 'hij', name: 'ge' }
];
console.log(items);

// const index = array.indexOf(5);
// if (index > -1) {
//     array.splice(index, 1); // 2nd parameter means remove one item only
// }

// // array = [2, 9]
// console.log(array); 

items.splice(items.findIndex(function (i) {
    return i.id === "abc";
}), 1);

console.log(items); 