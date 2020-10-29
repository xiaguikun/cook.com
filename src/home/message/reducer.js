const defaultState={
    messageList:[],
    urlPrefix:''
}

const reducer=(state=defaultState,action)=>{
    action = action || {type:''}
    switch(action.type){
        case 'getMessageData':
            return {
                ...state,
                messageList:action.messageList,
                urlPrefix:action.urlPrefix
            }
        default:
            return state;
    }
}

export {reducer} ;