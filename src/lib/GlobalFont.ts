import { createGlobalStyle } from "styled-components";
import Font_L from "../assets/fonts/Pretendard-Light.woff2";
import Font_M from "../assets/fonts/Pretendard-Medium.woff2";
import Font_R from "../assets/fonts/Pretendard-Regular.woff2";
import Font_B from "../assets/fonts/Pretendard-SemiBold.woff2";
import Font_BM from "../assets/fonts/Pretendard-Bold.woff2";
import Eng_Font_I from "../assets/fonts/times-new-roman-italic.ttf";
import Eng_Font from "../assets/fonts/times-new-roman.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "Pretendard-Light";
        src: local("Pretendard-Light"), url(${Font_L}) format('woff2'); 
        font-weight: medium;
    }
    @font-face {
        font-family: "Pretendard-Regular";
        src: local("Pretendard-Regular"), url(${Font_R}) format('woff2');
        font-weight: regular;
    }
    @font-face {
        font-family: "Pretendard-Medium";
        src: local("Pretendard-Medium"), url(${Font_M}) format('woff2'); 
        font-weight: medium;
    }

    @font-face {
        font-family: "Pretendard-Bold";
        src: local("Pretendard-Bold"), url(${Font_B}) format('woff2');
        font-weight: bold;
    }
    @font-face {
        font-family: "Pretendard-Bolder";
        src: local("Pretendard-Bolder"), url(${Font_BM}) format('woff2');
        font-weight: bold;
    }
    @font-face {
        font-family: 'times-new-roman';
        src: local('Eng_Font'), local('Eng_Font');
        font-style: normal;
        src: url(${Eng_Font}) format('truetype');
  }
    @font-face {
        font-family: 'times-new-roman-italic';
        src: local('Eng_Font_I'), local('Eng_Font_I');
        font-style: normal;
        src: url(${Eng_Font_I}) format('truetype');
  }

`;
// export const fonts = {
//   H1: {
//     fontFamily: 'AppleSDGothicNeoB',
//     fontSize: width * 23,
//     color: colors['$gray-2'],
//   },
