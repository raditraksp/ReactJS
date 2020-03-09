import React from 'react'

class SearchBar extends React.Component {
    
    onSubmitForm = (event) => {
        // Agar halaman tidak me-refresh/reload
        event.preventDefault()
        alert(event)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitForm} className="form-group">
                    <h1 className="text-center text-primary">Image Search</h1>
                    <input className="form-control" type="text"/>
                </form>
            </div>
        )
    }
}

export default SearchBar