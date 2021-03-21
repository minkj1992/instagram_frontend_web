import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        accentColor: string;
        lightGreyColor: string;
        boxBorder: string;
        bgColor: string;
        blackColor: string;
        blueColor: string;
    }
}

// declare module 'styled-components' {
//     export interface DefaultTheme {
//         maxWidth: string;
//         bgColor: string;
//         blackColor: string;
//         darkGreyColor: string;
//         lightGreyColor: string;
//         redColor: string;
//         blueColor: string;
//         darkBlueColor: string;
//         boxBorder: string;
//         borderRadius: string;
//         whiteBox: string;
//     }
// }
