import React from 'react';
import Form from '../../components/Form/Form';
import Users from '../../components/Users/Users';
import UsersRepos from '../../components/UsersRepos/UserRepos';
import './SearchResult.css'




const SearchResult = () => {

    return (
        <div className="result-page">
            
            <div className="result-page__search">
                <div className="result-page__title">
                    <h1 className="result-page__title--bold">Github</h1>
                    <h1 className="result-page__title--italic">Search</h1>
                </div>
                <div className="result-page__form">
                    <Form />
                </div>

            </div>
           
            <div className="result-page__result">
                <div className="result-page__Users">
                    <Users />
                </div>
                <div className="result-page__UsersRepos">

                    <UsersRepos />
                </div>
            </div>

        </div>



    );
}



export default SearchResult;