import {TAB_CHANGE} from './actionType';

const changeTabData=(tab)=>{
    return {
        type:TAB_CHANGE,
        tab:tab
    }
}

export {
    changeTabData
}