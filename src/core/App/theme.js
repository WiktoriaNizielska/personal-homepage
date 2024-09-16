const colorNames = {
  whiteLilac: "#FBFBFE",
  white: "#FFFFFF",
  mineShaft: "#252525",
  scienceBlue: "#0366D6",
  slateGray: "#6E7E91",
  darkGrey: "#363636B8",
  dodgerBlue: "#2188FF",
  mercury: "#E5E5E5",
};

const breakpoints = {
  mobile: "767px",
};

const boxShadow = {
  lightShadow: "0px 16px 58px 0px #090A3308",
  darkShadow: "",
};

export const lightTheme = {
  ...breakpoints,
  background: {
    main: colorNames.whiteLilac,
    section: colorNames.white,
  },
  text: {
    black: colorNames.mineShaft,
    grey: colorNames.slateGray,
    blue: colorNames.scienceBlue,
  },
  divider: colorNames.mercury,
  shadow: boxShadow.lightShadow,
};

export const darkTheme = {
  ...breakpoints,
  background: {
    main: colorNames.mineShaft,
    section: colorNames.darkGrey,
  },
  text: {
    white: colorNames.white,
    blue: colorNames.dodgerBlue,
  },
  divider: colorNames.mercury,
};