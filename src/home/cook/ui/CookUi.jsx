import React from 'react';

import {array,string} from 'prop-types';

import {Container,DivLine} from '../ui/StyledComponents.js';
import Grid from './Grid';
import Menu from './Menu';
import Swiper from './Swiper';
import Recommed from './recommed';

const CookUi = (props) => {
    // console.log(props);
    return (
        <>
            <Container>
                <header>菜谱大全</header>
                <Swiper bannerList={props.bannerList} bannerPrefix={props.bannerPrefix}></Swiper>
                <Grid></Grid>
                <DivLine></DivLine>
                <Menu menuList={props.menuList} menuPrefix={props.menuPrefix}></Menu>
                <Recommed recommendList={props.recommendList}  recommendUrlPrefix={props.recommendUrlPrefix}></Recommed>
            </Container>
        </>
    );
}

CookUi.propTypes={
    bannerList:array,
    bannerPrefix:string
}

export default CookUi;