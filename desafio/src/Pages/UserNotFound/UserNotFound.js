import React from 'react';
import Form from '../../components/Form/Form';
import './UserNotFound.css'

const UserNotFound = () => {

    return (

        <div className="notfound-page">
            <div className="notfound-page__search">
                <div className="notfound-page__title">
                    <h1 className="notfound-page__title--bold">Github</h1>
                    <h1 className="notfound-page__title--italic">Search</h1>
                </div>
                <div className="notfound-page__form">
                    <Form />
                </div>
            </div>

            <div className="notfound-page__message">
                <h2> User not found :( </h2>
            </div>
        </div>
    );


}


export default UserNotFound;