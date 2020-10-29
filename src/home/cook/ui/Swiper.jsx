import React, { Component } from 'react';

import { Carousel } from 'antd-mobile';
import {SwiperStyle} from './StyledComponents'


class Swiper extends Component {
    // state = { 
    //     bannerList:[],
    //     prefix:''
    //  }
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
                        {/* <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2552442348,1035717741&fm=26&gp=0.jpg" alt=""/>
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3356844394,2271561381&fm=26&gp=0.jpg" alt=""/>
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3227879884,1891776658&fm=26&gp=0.jpg" alt=""/>
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2288668572,4154019469&fm=26&gp=0.jpg" alt=""/> */}
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