import React, { Component } from 'react';

import {CSSTransition} from 'react-transition-group';

import 'animate.css';
import './style.css';



const withAnimate = (Comp) => {
    return (
        class extends Component{
            render(){
                // console.log(this.props);
                return(
                    <>
                        <CSSTransition
                            timeout={600} 
                            classNames={'my-node'}
                            in={!!this.props.match}
                            // classNames={{
                            //     enter: 'animate__animated',
                            //     enterActive: 'animate__bounceInRight',
                            //     exit: 'animate__animated',
                            //     exitActive: 'animate__bounceOutRight'
                            // }}
                                mountOnEnter
                                unmountOnExit
                                >
                                    <Comp></Comp>
                        </CSSTransition>
                    </>
                )
            }
        }
    );
}

export default withAnimate;