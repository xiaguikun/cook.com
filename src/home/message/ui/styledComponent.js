import styled from 'styled-components';

const Container=styled.div`
    /* background:white; */
    header{
        width:100%;
        height: 50px;
        background:#D5543F;
        color:white;
        text-align:center;
        line-height:50px;
        font-size:16px;
    }
`

const MsgComp=styled.div`
    width:100%;
    .msg{
        background:white;
        margin-bottom:35px;
        .top{
            display:flex;
            padding-top:10px;
            img{
                width: 60px;
                height: 60px;
                border-radius:50%;
            }
            section{
                margin-left:15px;
                p:first-child{
                    font-size:14px;
                    color:black;
                    font-weight:600;
                }
                p:last-child{
                    font-size:12px;
                    color:black
                }
            }
        }
        .middle{
            img{
                width:96%;
                height: 150px;
                margin-left:2%;
            }        
        }
        .bottom{
            width:100%;
            p{
                margin-left:2%;
            }
            p:first-child{
                font-size:14px;
                font-weight:600;
            }
            p:last-child{
                letter-spacing:1px;
                padding-bottom:10px;
            }
            /* margin-bottom:45px; */
        }
        &:last-child{
            margin-bottom:0;            
        }
    }
`

export {
    Container,
    MsgComp
}