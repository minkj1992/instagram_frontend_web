import 'styled-components';
import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        maxWidth: string;
        bgColor: string;
        blackColor: string;
        darkGreyColor: string;
        lightGreyColor: string;
        redColor: string;
        blueColor: string;
        darkBlueColor: string;
        boxBorder: string;
        borderRadius: string;
        whiteBox: string;
    }
}

export const BOX_BORDER = '1px solid #e6e6e6';
export const BORDER_RADIUS = '4px';

const theme: DefaultTheme = {
    maxWidth: '935px',
    bgColor: '#FAFAFA',
    blackColor: '#262626',
    darkGreyColor: '#999',
    lightGreyColor: '#c7c7c7',
    redColor: '#ED4956',
    blueColor: '#3897f0',
    darkBlueColor: '#003569',
    boxBorder: '1px solid #e6e6e6',
    borderRadius: '4px',
    whiteBox: `border:${BOX_BORDER};
             border-radius:${BORDER_RADIUS};
             background-color:white;
            `,
};

export default theme;
