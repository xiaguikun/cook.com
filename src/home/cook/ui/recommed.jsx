import React, { useState } from 'react';
import {DivRecommed} from './StyledComponents';
import memoize from 'memoize-one';
import {useHistory} from 'react-router-dom'

const Recommed=(props)=> {
const history=useHistory();

    const [state,setState]=useState({
      type:1
    })

    

   const filter=memoize(
        (list,type)=>{
              return list.filter(item=>{
                return item.type===type
              })
        }
   )
  const handleClick=(num)=>()=>{
    setState({
      type:num
    })
  }
  const toDetail=(id,title)=>()=>{
   history.push('/detail/'+id,{title:title})
}
    // console.log(this.props);
    const filterList=filter(props.recommendList,state.type)
    // console.log(filterList);
    return (
      <DivRecommed>
          <nav>
            <li className={state.type===1 ? 'active' : null} onClick={handleClick(1)}>推荐</li>
            <li className={state.type===2 ? 'active' : null} onClick={handleClick(2)}>日常</li>
            <li className={state.type===3 ? 'active' : null} onClick={handleClick(3)}>最热</li>
          </nav>
          <section>
            {
              filterList.map((item)=>{
                  return (
                    <div key={item.id} onClick={toDetail(item.id,item.title)}>
                        <img src={props.recommendUrlPrefix+item.url} alt=""/>
                        <p>{item.title}</p>
                    </div>
                  )
              })
            }
          </section>
      </DivRecommed>
    );
  }

export default Recommed;