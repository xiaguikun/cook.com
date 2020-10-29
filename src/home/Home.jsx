import React, { Component } from 'react';

import {Cook} from './cook/index';

import { TabBar } from 'antd-mobile';

import cookImg from '@img/img11.jpg';
import cookActiveImg from '@img/img1.jpg';
import shareImg from '@img/img22.jpg';
import shareActiveImg from '@img/img2.jpg';
import messageImg from '@img/img33.jpg';
import messageActiveImg from '@img/img3.jpg';
import mineImg from '@img/img44.jpg';
import mineActiveImg from '@img/img4.jpg';

class Home extends Component {
    state = { 
        selectedTab: 'cook',
        hidden: false,
        fullScreen: true,
     }
    render() {
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
                        selected={this.state.selectedTab === 'cook'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'cook',
                        });
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
                        selected={this.state.selectedTab === 'share'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'share',
                        });
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
                        selected={this.state.selectedTab === 'message'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'message',
                        });
                        }}
                    >
                        {/* {this.renderContent('Friend')} */}
                        <div>message</div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: mineImg }}
                        selectedIcon={{ uri: mineActiveImg}}
                        key="my"
                        selected={this.state.selectedTab === 'mine'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'mine',
                        });
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