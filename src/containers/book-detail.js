import React, { Component} from 'react';

import { connect} from 'react-redux';

class BookDetail extends Component{

  render(){
    return(
      <div>BookDetail!!</div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activebook
  }
}

export default connect(mapStateToProps)(BookDetail);

