import React,{Component} from 'react'
// import PropType from 'prop-types';
import * as BookAPI from '../BookAPI'
import { Link } from 'react-router-dom'


class ListBook extends Component{
    // static PropType = {
    //     books: PropType.array.isRequired
    // }

    state={
        currentlyReading:[],
        wantToRead:[],
        read:[]
    }
        
    componentDidMount(){
        this.getAllBooks()
    }

    updateShelf = (bookId,newShelf) =>{       
        BookAPI.update(bookId,newShelf)
        .then((book)=>{
            this.getAllBooks()
        })
    }

    getAllBooks = ()=>{
        BookAPI.getAll()
        .then((book)=>{
            this.setState(() => ({
                currentlyReading: book.filter((book)=>(
                    book.shelf === "currentlyReading"
                )),
                wantToRead: book.filter((book)=>(
                    book.shelf === "wantToRead"
                )),
                read: book.filter((book)=>(
                    book.shelf === "read"
                ))
            })
            )
        })
        
    }
    

    render(){
      
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid"> 
                                {console.log(this.state.currentlyReading)}                              
                                    {this.state.currentlyReading.map((book)=>(
                                        <li key={book.id}>
                                            <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(`+book.imageLinks.thumbnail+`)` }}></div>
                                                <div className="book-shelf-changer">
                                                <select value={book.shelf} onChange={(event) => this.updateShelf(book,event.target.value)}>
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
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want To Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid"> 
                                {console.log(this.state.currentlyReading)}                              
                                    {this.state.wantToRead.map((book)=>(
                                        <li key={book.id}>
                                            <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(`+book.imageLinks.thumbnail+`)` }}></div>
                                                <div className="book-shelf-changer">
                                                <select value={book.shelf} onChange={(event) => this.updateShelf(book,event.target.value)}>
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
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid"> 
                                {console.log(this.state.currentlyReading)}                              
                                    {this.state.read.map((book)=>(
                                        <li key={book.id}>
                                            <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(`+book.imageLinks.thumbnail+`)` }}></div>
                                                <div className="book-shelf-changer">
                                                <select value={book.shelf} onChange={(event) => this.updateShelf(book,event.target.value)}>
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
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to ="/search">
                        <button>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBook;