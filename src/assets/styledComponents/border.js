import styled from 'styled-components';

const border=(Comp)=>{
    const newComp=styled(Comp)`
        position:relative;
        border-radius:${({radius})=>radius};

        &::after{
            content:'';
            pointer-events:none;
            position:absolute;
            top:0;
            left:0;
            z-index:999;
            border-color:${({color})=>color || '#ccc'};
            border-style:${({style})=>style || 'solid'};
            border-width:${({width})=>width || '1px'};
            
            transform-origin:0 0;
            @media (max--moz-device-pixel-ratio: 1.49),(-webkit-max-device-pixel-ratio: 1.49),(max-device-pixel-ratio: 1.49),(max-resolution: 143dpi),(max-resolution: 1.49dppx) {
                width: 100%;
                height: 100%;
                transform: scale(1);
                /* if radius != 0
                border-radius radius * 1 */
                border-radius: ${({radius}) => radius !== 0 ? radius * 1 : 0}px
            }

            @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49),(-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),(min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),(min-resolution: 144dpi) and (max-resolution: 239dpi),(min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
                width: 200%;
                height: 200%;
                transform: scale(.5);
                /* if radius != 0
                border-radius radius * 2 */
                border-radius: ${({radius}) => radius !== 0 ? radius * 2 : 0}px
            }

            @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5),(min-resolution: 240dpi), (min-resolution: 2.5dppx) {
                width: 300%;
                height: 300%;
                transform: scale(.3333333);
                /* if radius != 0
                border-radius radius * 3 */
                border-radius: ${({radius}) => radius !== 0 ? radius * 3 : 0}px
            }

        }
    `
    return newComp;
}

export default border;