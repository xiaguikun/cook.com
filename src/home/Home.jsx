import React, { Component } from 'react';

import {connect} from 'react-redux';
import {Cook} from './cook/index';
import {Message} from './message/index';

import { TabBar } from 'antd-mobile';
import {changeTabData} from './actionCreator';

import cookImg from '@img/img11.jpg';
import cookActiveImg from '@img/img1.jpg';
import shareImg from '@img/img22.jpg';
import shareActiveImg from '@img/img2.jpg';
import messageImg from '@img/img33.jpg';
import messageActiveImg from '@img/img3.jpg';
import mineImg from '@img/img44.jpg';
import mineActiveImg from '@img/img4.jpg';


const mapStateToProps=(state)=>{
    return {
        selectedTab:state.homeReducer.selectedTab
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        changeTab(tab){
            dispatch(changeTabData(tab))
        }
    }
}

@connect(mapStateToProps,mapDispatchToProps)
class Home extends Component {
    state = { 
        // selectedTab: this.props.selectedTab,
        hidden: false,
        fullScreen: true,
     }
    render() {
        // console.log(this.props);
        return (
            <>
                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition='bottom'
                    >
                    <TabBar.Item
                        key="Life"
                        icon={<div style={{
                        width: '30px',
                        height: '30px',
                        background: `url(${cookImg}) center center /  28px 28px no-repeat`}}
                        />
                        }
                        selectedIcon={<div style={{
                        width: '30px',
                        height: '30px',
                        background: `url(${cookActiveImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        selected={this.props.selectedTab === 'cook'}
                        onPress={() => {
                        // this.setState({
                        //     selectedTab: 'cook',
                        // });
                        this.props.changeTab('cook')
                        sessionStorage.setItem('tab','cook')
                        }}
                        data-seed="logId"
                    >
                        {/* {this.renderContent('Life')} */}
                        <Cook></Cook>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${shareImg}) center center /  28px 28px no-repeat`}}
                        />
                        }
                        selectedIcon={
                        <div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${shareActiveImg}) center center /  28px 28px no-repeat`}}
                        />
                        }
                        key="Koubei"
                        selected={this.props.selectedTab === 'share'}
                        onPress={() => {
                        // this.setState({
                        //     selectedTab: 'share',
                        // });
                        this.props.changeTab('share')
                        sessionStorage.setItem('tab','share')
                        }}
                        data-seed="logId1"
                    >
                        {/* {this.renderContent('Koubei')} */}
                        <div>share</div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${messageImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        selectedIcon={
                        <div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${messageActiveImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        key="Friend"
                        selected={this.props.selectedTab === 'message'}
                        onPress={() => {
                        // this.setState({
                        //     selectedTab: 'message',
                        // });
                        this.props.changeTab('message')
                        sessionStorage.setItem('tab','message')
                        }}
                    >
                        {/* {this.renderContent('Friend')} */}
                        <Message></Message>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: mineImg }}
                        selectedIcon={{ uri: mineActiveImg}}
                        key="my"
                        selected={this.props.selectedTab === 'mine'}
                        onPress={() => {
                        // this.setState({
                        //     selectedTab: 'mine',
                        // });
                        this.props.changeTab('mine')
                        sessionStorage.setItem('tab','mine')
                        }}
                    >
                        {/* {this.renderContent('My')} */}
                        <div>mine</div>
                    </TabBar.Item>
                    </TabBar>
                </div>
            </>
        );
    }
}

export default Home;