import React, { Component } from 'react';
import {DivRecommed} from './StyledComponents';
import memoize from 'memoize-one';
import {withRouter} from 'react-router-dom';

@withRouter
class recommed extends Component {
  state = { 
    type:1
   }

   filter=memoize(
        (list,type)=>{
              return list.filter(item=>{
                return item.type===type
              })
        }
   )
  handleClick=(num)=>()=>{
    this.setState({
      type:num
    })
  }
  toDetail=(id,title)=>()=>{
    this.props.history.push('/detail/'+id,{title:title})
}
  render() {
    // console.log(this.props);
    const filterList=this.filter(this.props.recommendList,this.state.type)
    // console.log(filterList);
    return (
      <DivRecommed>
          <nav>
            <li className={this.state.type===1 ? 'active' : null} onClick={this.handleClick(1)}>推荐</li>
            <li className={this.state.type===2 ? 'active' : null} onClick={this.handleClick(2)}>日常</li>
            <li className={this.state.type===3 ? 'active' : null} onClick={this.handleClick(3)}>最热</li>
          </nav>
          <section>
            {
              filterList.map((item)=>{
                  return (
                    <div key={item.id} onClick={this.toDetail(item.id,item.title)}>
                        <img src={this.props.recommendUrlPrefix+item.url} alt=""/>
                        <p>{item.title}</p>
                    </div>
                  )
              })
            }
          </section>
      </DivRecommed>
    );
  }
}

export default recommed;