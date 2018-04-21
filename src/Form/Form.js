import React from 'react';

const Form = ({users, saveButtonClick}) =>(

        <div>
            <h1>Enter personal details</h1>
            <label>Full Name</label>
            <input type="text" id="name"/>
            <input type="submit" onClick={() =>{saveButtonClick(document.getElementById('name').value)}}/>
            <div>Users list:</div>
            {
                createUserList(users)
            }

        </div>
    );

const createUserList = (users) =>{
    return users.map(
        (user) => {
            return (<li>{user.name}</li>);
        }
    );
}
export default Form;
