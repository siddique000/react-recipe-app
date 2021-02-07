import React from 'react'

const Form = ({ search, updateSearch, getSearch }) => {
   return (
      <form onSubmit={getSearch} className="search-form">
         <div className="form-row">
            <div className="col-auto m-0">
               <input
                  className="form-control"
                  type="text"
                  value={search}
                  onChange={updateSearch}
                  placeholder="search"
               />
               <small class="form-text text-muted" style={{ color: '#fff' }}>Enter your search item</small>
            </div>
            <div className="col-auto m-0">
               <button className="btn btn-warning search-button" type="submit" style={{}}>
                  Search
               </button>
            </div>
         </div>
      </form>
   )
}

export default Form
