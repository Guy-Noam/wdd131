let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Sally'];

console.log(names);

names.push('Sally');

console.log(names);

console.log(names.length);

names.pop();
console.log(names);

names.shift();
console.log(names);

names.unshift('Guy');
console.log(names);

names.splice(2, 1);
console.log(names);

result = names.join('-');
console.log(result);

names.forEach(function(name) {
    console.log(name);
});