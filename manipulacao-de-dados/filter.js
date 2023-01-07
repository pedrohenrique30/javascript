// Manipulando arrays
// filter()

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter((age) => {
    return age % 2 == 0;
});

console.log(evenAges);