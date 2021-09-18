import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button'
import styles from './AddUser.module.css';


const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };


    // htmlFor good practice to use with labels and inputs
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label> 
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label> 
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;