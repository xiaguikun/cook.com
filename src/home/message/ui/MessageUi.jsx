import React from 'react';

import {Container} from './styledComponent';
import Msg from './Msg';

const MessageUi = (props) => {
    return (
        <Container>
            <header>动态</header>
            <Msg {...props}></Msg>
        </Container>
    );
}

export default MessageUi;