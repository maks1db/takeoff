import React, { FC } from 'react';

import { ContactEntity, contactModel } from '../../partials';
import { parseModel } from './helpers';

const { keys, names } = parseModel(contactModel);

export const Head: FC = () => (
    <>
        <thead>
            <tr>
                {names.map(x => (
                    <th key={x}>{x}</th>
                ))}
            </tr>
        </thead>
    </>
);

export const Row: FC<ContactEntity> = ({ id, ...rest }) => (
    <tr>
        {keys.map(x => (
            <td key={x}>{rest[x]}</td>
        ))}
    </tr>
);
