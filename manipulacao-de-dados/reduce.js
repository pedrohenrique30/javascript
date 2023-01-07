// manipulando array
// reduce()

const ages = [14, 22, 40, 58, 87];

const sumOfAges = ages.reduce((age, item) => {
  return item + age;
}, 0);
