import React, { Component } from 'react';

import MessageUi from '../ui/MessageUi';


import {connect} from 'react-redux';
import {getMessageList} from '../actionCreator';

const mapStateToProps=(state)=>{
    return {
        messageList:state.messageReducer.messageList,
        urlPrefix:state.messageReducer.urlPrefix
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getMessage(){
            dispatch(getMessageList())
        }
    }
}

@connect(mapStateToProps,mapDispatchToProps)
class Message extends Component {
    state = {  }
    render() {
        // console.log(this.props);
        return (
            <MessageUi {...this.props}></MessageUi>
        );
    }
    componentDidMount(){
        // console.log(this.props);
        this.props.getMessage();

        // axios.get('http://rootbk.cn:5000/api/messages/list')
        // .then((res)=>{
        //     console.log(res);
        // })
    }
}

export default Message;