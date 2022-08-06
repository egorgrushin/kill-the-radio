import * as objectHash from 'object-hash';

const users = [
	{
		id: '4',
		username: '70000000004',
		phone: '70000000004',
		firstName: 'John',
		lastName: 'Smith',
		passwordHash: objectHash.sha1('1111'),
		roleId: 4,
	},
	{
		id: '1',
		username: '70000000001',
		phone: '70000000001',
		firstName: 'Emily',
		lastName: 'Orange',
		passwordHash: objectHash.sha1('1111'),
		roleId: 1,
	}
];

export default users;
