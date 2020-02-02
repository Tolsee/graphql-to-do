import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

// TODO
// Theme is not complete yet
// Starting with what's in hand
export const theme = {
    colors: {
        grey_1: '#ffffff',
        grey_2: '#fafafa',
        grey_3: '#f5f5f5',
        grey_4: '#e8e8e8',
        grey_5: '#d9d9d9',
        grey_6: '#bfbfbf',
        grey_7: '#8c8c8c',
        grey_8: '#595959',
        grey_9: '#262626',
        grey_10: '#000000',

        // Theme colors
        primary: '#40a9ff'
    },
    spacing: {
        'first': '8px',
        'second': '12px',
        'third': '16px',
        'fourth': '24px'
    }
};

const mode: any = {
    night: {
        background: '#121212',
        textColor: theme.colors.grey_2,
        textLight: theme.colors.grey_7,
        boardBackground: theme.colors.grey_9,
        cardBackground: '#404040'
    },
    day: {
        background: '#fbfbfb',
        textColor: '#000000',
        textLight: theme.colors.grey_6,
        boardBackground: '#e2e2e2',
        cardBackground: theme.colors.grey_2
    }
};

// TODO: Look for this colors
/*
background: #f0f0f7;
board: #fff;
card: #f0f0f7
 */
// 'day' | 'night'
export function getCurrentTheme(modeText: string) {
    return {
        ...theme,
        ...mode[modeText]
    };
}
