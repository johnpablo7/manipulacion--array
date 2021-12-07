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
	}
];

console.log('original', orders);

const result = orders.map((item) => item.total);
console.log('resultado', result);

// const result2 = orders.map((item) => {
// 	item.tax = 0.19;
// 	return item;
// });

// console.log('resultado 2', result2);
// console.log('original', orders);

const result3 = orders.map((item) => {
	return {
		...item,
		tax: 0.19
	};
});

console.log('resultado 3', result3);
console.log('original', orders);

// Modificar el original en otro objeto en memoria
const result4 = orders.map((item) => {
	return {
		...item,
		total: item.total + 5
	};
});
console.log('resultado 4:', result4);
console.log('original:', orders);
