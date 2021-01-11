const faker = require('faker');
const { range, always } = require('ramda');

const USERS_COUNT = 10;
const CONTACTS_COUNT = 5000;

const mock = {
    users: range(0, USERS_COUNT).map(() => ({
        login: faker.name.firstName(),
        password: faker.internet.password(),
        token: faker.random.uuid(),
    })),
    contacts: range(1, CONTACTS_COUNT).map(id => ({
        id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        country: faker.address.country(),
        image: faker.image.animals(),
        age: faker.random.number(18, 60),
    })),
    status: { status: 'ok' },
};

module.exports = always(mock);
