import React, { Component } from 'react';
import { Grid } from 'antd-mobile';

import icon1 from '@img/pic1.jpg'
import icon2 from '@img/pic2.jpg'
import icon3 from '@img/pic3.jpg'
import icon4 from '@img/pic4.jpg'

class GridComp extends Component {
    state = { 
        data1:[
            {
                icon:icon1,
                title:'早餐'
            },
            {
                icon:icon2,
                title:'午餐'
            },
            {
                icon:icon3,
                title:'晚餐'
            },
            {
                icon:icon4,
                title:'夜宵'
            }
        ]
     }
    render() {
        return (
            <>
                <Grid data={this.state.data1}
                    columnNum={4}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon} style={{ width: '36px', height: '36px' }} alt="" />
                            <div style={{ color: 'black', fontSize: '14px', marginTop: '8px' }}>
                            <span>{dataItem.title}</span>
                            </div>
                        </div>
                    )}
                    hasLine={false}
                />
            </>
        );
    }
}

export default GridComp;