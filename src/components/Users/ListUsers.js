import React from 'react';

import Card from '../UI/Card';
import styles from './ListUsers.module.css';

const ListUsers = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(users => (
                    <li key={users.id}>
                        {users.name} ({users.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
};

export default ListUsers