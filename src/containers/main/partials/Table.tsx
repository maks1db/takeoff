import React, { FC } from 'react';

import { ContactEntity, contactModel } from '../../partials';

const keys = Object.keys(contactModel);

export const Head: FC = () => (
    <>
        <thead>
            <tr>
                {keys.map(x => (
                    <th key={x}>{contactModel[x].name}</th>
                ))}
            </tr>
        </thead>
    </>
);

export const Row: FC<ContactEntity & { onClick: (path: string) => void}> = ({ id, onClick, ...rest }) => (
    <tr onClick={() => onClick(`/contact/${id}`)}>
        {keys.map(x => (
            <td key={x}>{rest[x]}</td>
        ))}
    </tr>
);
