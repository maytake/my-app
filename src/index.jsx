import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import NotFound from './containers/404.jsx'

import './static/css/common.less'



class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
	    count:0,
	    data:["张三然","李慧思","赵思然","孙力气","钱流量"]
	  }
  }

   handleChange(){
    this.setState({count:this.state.count+2});
  }
  render(){
    return (
      <div>
        <NotFound/>
  			<ul>  
          {  
              this.state.data.map(username =>{
                  return (<li key={username}>{username}</li>)
              })  
          }  
        </ul>
         <h2>当前计数是：{this.state.count}</h2>	
         <button onClick={this.handleChange.bind(this)}>点击</button>
      </div>
    )

  }

}



render(<MyComponent/>,document.getElementById("root"));
