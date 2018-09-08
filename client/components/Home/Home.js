import React, {Component} from 'react';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {getData} = this.props;
    getData();
  }

  render(){
    const {content} = this.props;
    return (
      <div>
        <h2>HOME</h2>
        <p>{content.value}</p>
      </div>
    )
  }

}

export default Home;
