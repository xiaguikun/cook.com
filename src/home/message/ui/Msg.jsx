import React from 'react';
import {MsgComp} from './styledComponent';

const Msg = (props) => {
    console.log(props);
    return (
        <MsgComp>
            {
                props.messageList.map((item,index)=>{
                    let time=new Date(item.time);
                    let years=time.getFullYear();
                    let month=time.getMonth();
                    let day=time.getDate();
                    return (
                        <div key={index} className="msg">
                            <div className='top'>
                                <section>
                                    <img src={props.urlPrefix+item.avatarUrl} alt=""/>
                                </section>
                                <section>
                                    <p>{item.author}</p>
                                    <p>
                                        <span>{years}-</span>
                                        <span>{month}-</span>
                                        <span>{day}</span>
                                    </p>
                                </section>
                            </div>
                            <div className="middle">
                                <img src={props.urlPrefix+item.imgUrl} alt=""/>
                            </div>
                            <div className="bottom">
                                <p>{item.title}</p>
                                <p>{item.describe}</p>
                            </div>
                        </div>
                    )
                })
            }
        </MsgComp>
    );
}

export default Msg;