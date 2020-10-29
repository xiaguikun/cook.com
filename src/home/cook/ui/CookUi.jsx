import React from 'react';

import {Container,DivLine} from '../ui/StyledComponents.js';
import Grid from '../ui/Grid';
import Menu from '../ui/Menu';
import Swiper from '../ui/Swiper';

const CookUi = (props) => {
    // console.log(props);
    return (
        <>
            <Container>
                <header>菜谱大全</header>
                {/* <Swiper ></Swiper> */}
                <Swiper bannerList={props.bannerList} bannerPrefix={props.bannerPrefix}></Swiper>
                <Grid></Grid>
                <DivLine></DivLine>
                {/* <Menu ></Menu> */}
                <Menu menuList={props.menuList} menuPrefix={props.menuPrefix}></Menu>
            </Container>
        </>
    );
}

export default CookUi;