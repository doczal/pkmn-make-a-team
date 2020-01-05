export const colors = {
  white: '#ffffff',
  lite_00: '#ededed',
  lite_01: '#dedede',
  lite_02: '#cccccc',
  dark_00: '#333333',
  dark_01: '#444444',
  red_00: '#bd0f26',
  red_01: '#e02f2f',
  blue_00: '#33ace8',
  lite_blue: '#e3f7ff',
  lite_pink: '#ffe0f9',
  smoke: 'rgba(0, 0, 0, 0.1)',
};

export const zindex = {
  z10: 10,
  z20: 20,
  z30: 30,
  z40: 40,
  z50: 50,
};

export const gradients = {
  lite_blue_pink(angle = 0) {
    return `linear-gradient(${angle}deg, ${colors.lite_blue}, ${colors.lite_pink})`;
  },
};

export const screenSize = {
  md: '768px',
  lg: '1100px',
};

export const mediaQueries = {
  md: `(min-width: ${screenSize.md})`,
  lg: `(min-width: ${screenSize.lg})`,
};

export const shadows = {
  default: `0 2px 10px ${colors.smoke}`,
};
