import React, {
  Component
} from 'react';


import { Button, List } from 'antd-mobile';
const Item = List.Item;
//class
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.addData = this.addData.bind(this);
    this.state = {
      warrior: ['cookle','dat','byecile'],
      solders: [{
          year: 2017,
          month: ['December', 'October']
        }, {
          year: 2016,
          month: ['December', 'October']
        }, {
          year: 2015,
          month: ['December', 'October']
        }]
    }
  }


  componentDidMount() {
    console.log("组件已经挂载");
      this.setState ({
      solders: [{
          year: 2019,
          month: ['November', 'October']
        }, {
          year: 2020,
          month: ['January', 'October']
        }, {
          year: 2021,
          month: ['Fabruary', 'October']
        }]
      })

  }



  addData(){
    console.log(this)
    this.setState({
      warrior:[...this.state.warrior,'kwayi22'+(Math.random()).toFixed(2)]
    })
  }


  render() {
    const listData = this.state.solders.map((x) => {
        return x
      });
    const monthData = listData.map((item, index) => {
        return item.month
      });


    return (
      <div>
          <h1>{this.props.boss}</h1>
          <h2>{this.state.warrior.map((v, index)=><div key={index}>{v}</div>)}</h2>
          <Button type="primary" onClick = {this.addData}>点击事件</Button>
          {/*<button onClick = {()=>this.addData()}>点击事件2</button>*/}
           <List>

          {monthData.map((v, index)=><Item key={index}>{v}</Item>)}
           </List>
        </div>
    )
  }

}

//函数的形式传递组件
function Troop(props) {
  return <h2>骑兵连连长{props.k},冲啊！</h2>
}
class App extends Component {
  render() {
    return (
      <div className="App">
   
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child boss="girl so cute"/>
        <Troop k="big boy"/>
      </div>
    );
  }
}

export default App;