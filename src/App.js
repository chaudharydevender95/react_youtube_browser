import React, { Component } from 'react';
import './App.css';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data:{}
    }
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.updateState = this.updateState.bind(this);
  };

  add() {
    var arr = this.state.data;
    var i = Object.keys(arr).length;
    arr[i] = {"name":undefined};
    // console.log(arr);
    this.setState({ data: arr });
  }

  delete() {
    var arr = this.state.data;
    var i = arr.length;
    arr.pop(i);
    this.setState({ data: arr });
  }

  updateState(e){
    var data = this.state.data;
    // data[e.target.id]["name"] = e.target.value;
    data[e.target.value] = data[e.target.id];
    delete data[e.target.id];
    this.setState({data:data});
    
    // console.log(e.target);
  }


  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <Header />
        {Object.keys(this.state.data).map((key, i) => {
          var props = {"key":key,"data":this.state.data[key]} 
          return (
          <DocumentInput myDataProps = {props} 
            updateStateProp = {e=>this.updateState(e)} count={i} key={i} />)
        })}
        <button onClick={this.add}>Add</button>
        <button onClick={this.delete}>Delete</button>
        {/* {this.state.data.map((doc)=><h4>{doc}</h4>)} */}
      </div>
    );
  }
}

class DocumentInput extends Component {
  
  render() {
    // console.log(this.props.myDataProps);
    return (
      <div className="Space">
        {/* <input onChange = {e=>this.props.updateStateProp(e)} id={this.props.myDataProps.key} ref="" /><br /> */}
        {/* <h3>{this.props}</h3> */}
      </div>
    );
  }
}


class Header extends Component {
  render() {
    return (<div></div>);
  }
}

export default App;
