import React from 'react'

class SearchBar extends React.Component {
    onSubmitForm = (event) => {
        // Agar halaman tidak me-refresh/reload
        event.preventDefault()
        this.props.onSearch(this.keyword.value)

        // Akses Unsplash API
        // Setelah melakukan request, akan running function 'then'
        // 'then' menerima function dengan satu parameter 'res'
        // 'res' akan berisi respon dari API
        // Data yang kita mau akan berada di property 'data' dari object 'res'
        // Data akan ada di 'res.data'
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitForm} className="form-group">
                    <h1 className="text-center text-primary">Image Search</h1>
                    <input ref={(input)=>{this.keyword = input}} className="form-control" type="text"/>
                </form>
            </div>
        )
    }
}

export default SearchBar