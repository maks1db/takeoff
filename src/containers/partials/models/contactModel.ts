import { ContactEntity } from '../types';

type ModelType = { [K in keyof ContactEntity]: { name: string, type: string }};

export default {
    firstName: {
        name: 'First name',
        type: 'text',
    },
    lastName: { name: 'Last name', type: 'text' },
    phone: { name: 'Phone', type: 'text' },
    country: { name: 'Country', type: 'text' },
    age: { name: 'Age', type: 'number' },
} as ModelType;
