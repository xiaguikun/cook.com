import React, { Component } from 'react';

import { Carousel } from 'antd-mobile';
import {SwiperStyle} from './StyledComponents'


class Swiper extends Component {
    render() {
        // console.log(this.props);
        return (
            <SwiperStyle>
                    {/* {
                        this.props.bannerList.length ?  */}
                        <Carousel
                        autoplay={true}
                        infinite
                        key={this.props.bannerList.length}
                        // dots={true}
                        >
                        {
                            this.props.bannerList.map((item) =>{
                                return (
                                    <img src={this.props.bannerPrefix+item.url} alt="" key={item.id}/>
                                )
                            })
                        }
                        </Carousel>
                        {/* :null
                    } */}
            </SwiperStyle>
        );
    }
    componentDidMount(){
        // console.log(this.props);
        // this.setState({
        //     bannerList:this.props.bannerList,
        //     prefix:this.props.prefix
        // })
    }
}

export default Swiper;