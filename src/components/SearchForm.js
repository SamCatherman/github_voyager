import React from 'react';

const SearchForm = props => (
<div className="col-md-4">
  <input type='text'
    name='search'
    placeholder='search for a github user...'
    value={props.value}
    onChange={props.handleInputChange}/>
    <br />
    <br />
  <button className='button' type='submit' onClick={props.handleFormSubmit}>Find User</button>
</div>
)

export default SearchForm;
