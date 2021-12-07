const words = [ 'spray', 'limit', 'elite', 'exuberant' ];

const newArray = [];
for (let index = 0; index < words.length; index++) {
	const item = words[index];

	if (item.length >= 6) {
		newArray.push(item);
	}
}

console.log('newArray', newArray);
console.log('original', words);

const result = words.filter((item) => item.length >= 6); //Filter
console.log('result', result);
console.log('original', words);

const orders = [
	{
		customerName: 'Nicolas',
		total: 60,
		delivered: true
	},
	{
		customerName: 'Zulema',
		total: 120,
		delivered: false
	},
	{
		customerName: 'Santiago',
		total: 180,
		delivered: true
	},
	{
		customerName: 'Valentina',
		total: 240,
		delivered: true
	},
	{
		customerName: 'Nicolas',
		total: 800,
		delivered: false
	}
];

const result2 = orders.filter((item) => item.delivered && item.total >= 100);
console.log('resultado2', result2);

const search = (query) => {
	return orders.filter((item) => {
		return item.customerName.includes(query);
	});
};
// console.log(search('Nico'));
// console.log(search('a'));
console.log(search('sregdfdsgdfsgd')); // []
