import React from 'react';
import {withRouter} from 'react-router-dom';

import { NavBar, Icon } from 'antd-mobile';

const DetailHead =withRouter(
    (props) => {
        // console.log(props)
        const goBack=()=>{
            props.history.goBack()
        }
        return (
            <>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={goBack}
                >
                    {props.location.state.title}
                </NavBar>
            </>
        );
    }
)

export default DetailHead;




// import React from 'react';
// import {withRouter,useLocation} from 'react-router-dom';

// import { NavBar, Icon } from 'antd-mobile';

// const DetailHead =withRouter(
//     (props) => {
//         // console.log(props)
//         const location=useLocation();
//         const title=location.state ? location.state.title : '详情页'
//         const goBack=()=>{
//             props.history.goBack()
//         }
//         return (
//             <>
//                 <NavBar
//                 mode="light"
//                 icon={<Icon type="left" />}
//                 onLeftClick={goBack}
//                 >
//                     {title}
//                 </NavBar>
//             </>
//         );
//     }
// )

// export default DetailHead;