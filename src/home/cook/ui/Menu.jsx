import React from 'react';

import {Grid} from 'antd-mobile';

import {DivMenu,DivItem} from './StyledComponents';




const Menu=(props)=> {
    // const [state,stState]=useState({
    //     menuState:[]
    // })
        // console.log(this.props);
        return (
            <DivMenu>
               <div className="title">菜谱</div>
                <Grid data={props.menuList}
                activeStyle={false}
                columnNum={2}
                renderItem={dataItem => (
                   <div className='box' key={dataItem.id}>
                        <div className='oneBox'>
                            <img src={props.menuPrefix+dataItem.url}  alt="" />
                        </div>
                        <div className='itemBox'>
                            <DivItem color={dataItem.bgColor}>
                                <p>{dataItem.title}</p>
                                <p>{dataItem.content}</p>
                            </DivItem>
                        </div>
                   </div>
                )}
                />
            </DivMenu>
        );
    }
    

export default Menu;