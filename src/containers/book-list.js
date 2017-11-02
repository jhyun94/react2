import React, { Component} from 'react';
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { selectBook} from '../actions/index';


class BookList extends Component {

  renderList(){
    return this.props.books.map( (book) => {
      return (
        <li key={book.title} className="list-group-item"> {book.title} </li>
      )  
    })
  }

  render(){
    return (
      <div>
        <ul className="list-group col-md-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    books: state.books
  }
}

function mapDispatchtoProps(dispatch){
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(BookList);
