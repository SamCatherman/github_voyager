import React from 'react';

const SearchForm = props => (
<div>
  <input type='text'
    name='search'
    placeholder='find a github user...'
    value={props.value}
    onChange={props.handleInputChange}/>
  <button className='button' type='submit' onClick={props.handleFormSubmit}>Find User</button>
</div>
)

export default SearchForm;
