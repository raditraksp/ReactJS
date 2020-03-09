import React from 'react'
import axios from 'axios'

class SearchBar extends React.Component {
    state = {images:[]}
    onSubmitForm = (event) => {
        // Agar halaman tidak me-refresh/reload
        event.preventDefault()

        // Akses Unsplash API
        // Setelah melakukan request, akan running function 'then'
        // 'then' menerima function dengan satu parameter 'res'
        // 'res' akan berisi respon dari API
        // Data yang kita mau akan berada di property 'data' dari object 'res'
        // Data akan ada di 'res.data'
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: "Client-ID G84QOf2dzxRrKcCG2Go8up5or7PQoSwac-1d432ijGc"
                },
                params: {
                    query: 'nigga',
                    per_page: 15
                }
            }).then(
                // setState digunakan untuk meng-update 'state'
                (res) => {this.setState({ images: res.data })}
                )
        
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