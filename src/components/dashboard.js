import React, { Component } from 'react';
import axios from 'axios';
import { promised } from 'q';

class Dashboard extends Component{
  constructor(){
    super();
    this.state={
      desserts:[]
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3000").then(response=>{
      this.setState({
        desserts: response.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  render() {
    let list = this.state.desserts.map(item => {
      return (
        <div  key={item.title}>
          <p>
            {item.title}
          </p>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default Dashboard;