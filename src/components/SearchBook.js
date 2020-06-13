import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import * as BookAPI from '../BookAPI'



class SearchBook extends Component{
    state={
        query:'',
        books:[],
    }


    // componentDidMount(){
    //     BookAPI.search("art")
    //     .then((test)=>{
    //         console.log(test)
    //     })
    // }

    // updateQuery = (query) => {
    //     this.setState(() => ({
    //         query: query.trim()
    //     }))       
    // }      
       
    searchBook = (query) => {
        this.setState(() => ({
            query:  query
        }))
        BookAPI.search(query)
        .then((book)=>{
                book !== undefined &&(this.setState(()=>({   //Gaurd function as the array becomes undefined otherwise
                    books:book
                })))
        })
        
    }
    updateShelf = (bookId,newShelf) =>{       
        BookAPI.update(bookId,newShelf)
        .then((book)=>{
            console.log("done")
            
        })
    }

    render(){
        const result = this.state.query === ""? [] : this.state.books
        console.log(this.state.query, result,this.state.books)
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">

                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.searchBook(event.target.value)}
                        />

                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  { 
                  
                    result.error===undefined ?(
                    result.map((book) => (
                      <li key={book.id}>
                      <div className="book">
                      <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(`+book.imageLinks.thumbnail+`)` }}></div>
                          <div className="book-shelf-changer">
                          <select value={"move"} onChange={(event) => this.updateShelf(book,event.target.value)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                          </select>
                          </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.author}</div>
                      </div>
                  </li>
                  )
                  )):
                  (<div>Not Found</div>)
                  }
                    
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBook;