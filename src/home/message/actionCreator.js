import {getMessage} from '@utils/api';

const getMessageData=(data)=>{
    return {
        type:'getMessageData',
        messageList:data.result,
        urlPrefix:data.urlPrefix
    }
}

const getMessageList=()=>{
    return async(dispatch)=>{
        const res=await getMessage();
        // console.log(res);
        dispatch(getMessageData(res.data))
    }
}

export {
    getMessageList,
    getMessageData
}