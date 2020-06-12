import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import ListBook from './components/ListBook';
import SearchBook from './components/SearchBook'


class App extends Component{


  render(){
    return(
      <div>
        <Route exact path="/" render={()=>(
            <ListBook
              // books={this.state.books}
            />
        )}>
          </Route>
        <Route exact path="/search" component={SearchBook}>
          </Route>
      </div>
    )
  }
}

export default App;