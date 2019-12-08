export const colors = {
  white: '#ffffff',
  lite_00: '#ededed',
  lite_01: '#dedede',
  dark_00: '#333333',
  red_00: '#bd0f26',
  red_01: '#e02f2f',
  lite_blue: '#e3f7ff',
  lite_pink: '#ffe0f9',
};

export const gradients = {
  lite_blue_pink(angle = 0) {
    return `linear-gradient(${angle}deg, ${colors.lite_blue}, ${colors.lite_pink})`;
  },
};

export const screenSize = {
  md: '768px',
  lg: '1200px',
};

export const mediaQueries = {
  md: `(min-width: ${screenSize.md})`,
  lg: `(min-width: ${screenSize.lg})`,
};
