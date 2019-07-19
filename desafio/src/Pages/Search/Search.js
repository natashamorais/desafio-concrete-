import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import './Search.css'



const Search = () => {


    return (
        <div className="search-page">
            <div className="search-page__search">
                <div className="search-page__title">
                   <h1 className="search-page__title--bold">Github</h1>
                   <h1 className="search-page__title--italic">Search</h1>
                </div>
                <div className="search-page__input">
                    <Form />
                </div>

            </div>

        </div>




    );


}
export default Search;