const items = [ 1, 3, 2, 3, 1, 3, 10 ];

const rta = items.reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 1;
	} else {
		obj[item] = obj[item] + 1;
	}
	return obj;
}, {});

console.log(rta);

const data = [
	{
		name: 'Nicolas',
		level: 'low'
	},
	{
		name: 'Zulema',
		level: 'medium'
	},
	{
		name: 'Santiago',
		level: 'low'
	},
	{
		name: 'Valentina',
		level: 'medium'
	},
	{
		name: 'Pedro',
		level: 'hight'
	},
	{
		name: 'Nicolas',
		level: 'hight'
	}
];

const rta1 = data.map((item) => item.level).reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 1;
	} else {
		obj[item] = obj[item] + 1;
	}
	return obj;
}, {});

console.log(rta1);

// Reto

const numbers = [ 1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 9, 10 ];
const ranges = [ '1-5', '6-8', '9-10' ];

const result = numbers.reduce((acum, item) => {
	if (item <= 5) {
		!acum[ranges[0]] ? (acum[ranges[0]] = 1) : (acum[ranges[0]] += 1);
	} else if (item >= 6 && item <= 8) {
		!acum[ranges[1]] ? (acum[ranges[1]] = 1) : (acum[ranges[1]] += 1);
	} else {
		!acum[ranges[2]] ? (acum[ranges[2]] = 1) : (acum[ranges[2]] += 1);
	}
	return acum;
}, {});

console.log(result);
