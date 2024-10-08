const colorNames = {
  whiteLilac: "#FBFBFE",
  white: "#FFFFFF",
  mineShaft: "#252525",
  scienceBlue: "#0366D6",
  transparentBlue: "#0367d833",
  tranparentDarkBlue: "#2189ff44",
  slateGray: "#6E7E91",
  darkGrey: "#363636B8",
  dodgerBlue: "#2188FF",
  dodgerBlue10: "#2189ffc9",
  mercury: "#E5E5E5",
  iron: "#D1D5DA4D",
  iron10: "#D1D5DA1A",
  lightBlue: "#0366D633",
  darkBlue: "#0366D680",
};

const breakpoints = {
  breakpoint: {
    tabletMax: "991px",
    mobileMax: "767px",
  }
};

const boxShadow = {
  shadow: "0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305",
  button: {
    lightHover: " -2px -2px 0px 0px #8CC2FF, 2px 2px 0px 0px #8CC2FF, -2px 2px 0px 0px #8CC2FF, 2px -2px 0px 0px #8CC2FF",
    lightActive: " 0px 2px 0px 0px #14462033 inset",
    darkHover: "-2px -2px 0px 0px #6D93BE, 2px 2px 0px 0px #6D93BE, -2px 2px 0px 0px #6D93BE, 2px -2px 0px 0px #6D93BE",
    darkActive: "0px 2px 0px 0px #14462033 inset",
  }
};

export const lightTheme = {
  ...breakpoints,
  background: {
    main: colorNames.whiteLilac,
    section: colorNames.white,
  },
  text: {
    header: colorNames.mineShaft,
    paragraph: colorNames.slateGray,
    blue: colorNames.scienceBlue,
  },
  divider: colorNames.mercury,
  shadow: boxShadow.shadow,
  button: {
    background: colorNames.scienceBlue,
    text: colorNames.white,
    border: colorNames.iron,
    hoverBorder: colorNames.iron,
    hoverShadow: boxShadow.button.lightHover,
    activeBorder: colorNames.iron,
    activeShadow: boxShadow.button.lightActive,
  },
  tile: {
    background: colorNames.white,
    border: colorNames.iron,
    header: colorNames.scienceBlue,
    description: colorNames.slateGray,
    linkTitle: colorNames.slateGray,
    link: colorNames.scienceBlue,
    underline: colorNames.transparentBlue,
    hover: colorNames.lightBlue,
    linkHover: colorNames.scienceBlue,
  },
  themeButton: {
    background: colorNames.mercury,
    border: colorNames.iron,
  },
  sun: colorNames.white,
};

export const darkTheme = {
  ...breakpoints,
  background: {
    main: colorNames.mineShaft,
    section: colorNames.darkGrey,
  },
  text: {
    header: colorNames.white,
    paragraph: colorNames.white,
    blue: colorNames.dodgerBlue,
  },
  divider: colorNames.iron10,
  shadow: boxShadow.shadow,
  button: {
    background: colorNames.dodgerBlue,
    text: colorNames.white,
    border: colorNames.iron10,
    hoverBorder: colorNames.iron,
    hoverShadow: boxShadow.button.darkHover,
    activeBorder: colorNames.iron,
    activeShadow: boxShadow.button.darkActive,
  },
  tile: {
    background: colorNames.darkGrey,
    border: colorNames.iron10,
    header: colorNames.white,
    description: colorNames.white,
    linkTitle: colorNames.white,
    link: colorNames.dodgerBlue10,
    underline: colorNames.tranparentDarkBlue,
    hover: colorNames.darkBlue,
    linkHover: colorNames.dodgerBlue,
  },
  themeButton: {
    background: colorNames.darkGrey,
    border: colorNames.white,
  },
  sun: colorNames.mineShaft,
};