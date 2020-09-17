import React from 'react';

export default function User(props) {
    const { user } = props
    const { name, email, password, checkbox } = user
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Accepted Terms? {checkbox ? "Yes" : "No"} </p>
        </div>
    )
}