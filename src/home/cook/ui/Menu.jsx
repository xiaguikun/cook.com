import React, { Component } from 'react';

import {Grid} from 'antd-mobile';

import {DivMenu} from './StyledComponents';




class Menu extends Component {
    state = { 
        data1:[
            {"id":1,"url":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3090166712,3437029159&fm=26&gp=0.jpg","title":"新手食谱","content":"一日三餐有营养"},
            {"id":2,"url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3585335427,1390350488&fm=26&gp=0.jpg","title":"美味素食","content":"健康清淡味道好"},
            {"id":3,"url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2810960232,3982720133&fm=26&gp=0.jpg","title":"老火靓汤","content":"营养健康又滋补"},
            {"id":4,"url":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3229237617,706180356&fm=26&gp=0.jpg","title":"品质食谱","content":"品质营养必不可少"}
        ],
        menuState:[]
     }
    render() {
        // console.log(this.props);
        return (
            <DivMenu>
               <div className="title">菜谱</div>
                <Grid data={this.props.menuList}
                columnNum={2}
                renderItem={dataItem => (
                   <div className='box' key={dataItem.id}>
                        <div className='oneBox'>
                            <img src={this.props.menuPrefix+dataItem.url}  alt="" />
                        </div>
                        <div className='itemBox'>
                            <p className={'p'+dataItem.id}>{dataItem.title}</p>
                            <p className={'p'+dataItem.id}>{dataItem.content}</p>
                        </div>
                   </div>
                )}
                />
                {/* <Grid data={this.state.data1}
                columnNum={2}
                renderItem={dataItem => (
                   <div className='box'>
                        <div className='oneBox'>
                            <img src={dataItem.url}  alt="" />
                        </div>
                        <div className='itemBox'>
                            <p>{dataItem.title}</p>
                            <p>{dataItem.content}</p>
                        </div>
                   </div>
                )}
                /> */}
            </DivMenu>
        );
    }
    
}

export default Menu;