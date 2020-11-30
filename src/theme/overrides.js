import shadows from "./shadows";

export default {
  // MuiAppBar: {
  //   root: {
  //     boxShadow: "none",
  //   },
  // },
  // MuiFab: {
  //   root: {
  //     boxShadow: "none",
  //   },
  //   sizeMedium: {
  //     height: "50px",
  //     width: "50px",
  //     minHeight: "50px",
  //     minWidth: "50px",
  //   },
  //   sizeSmall: {
  //     height: "30px",
  //     width: "30px",
  //     minHeight: "30px",
  //     minWidth: "30px",
  //   },
  // },
  // MuiGrid: {
  //   "spacing-xs-16": {
  //     margin: "0px",
  //     width: "100%",
  //   },
  // },
  // MuiDialog: {
  //   root: {
  //     zIndex: 900,
  //   },
  // },
  // MuiTooltip: {
  //   tooltip: {
  //     borderRadius: "0px",
  //     fontSize: "12px",
  //     fontWeight: 600,
  //     letterSpacing: "0.92px",
  //     padding: "5px 7px",
  //     backgroundColor: palette.secondary.main,
  //   },
  //   popper: {
  //     opacity: 1,
  //   },
  // },
  // MuiDivider: {
  //   root: {
  //     height: "1px",
  //     background: palette.secondary.main,
  //   },
  // },
  // },
  // MuiCard: {
  //   root: {
  //     boxShadow: "none",
  //     border: `1px solid ${palette.grey[200]}`,
  //   },
  // },
  // MuiCardMedia: {
  //   root: {
  //     border: "none",
  //   },
  // },
  // MuiCardContent: {
  //   root: {
  //     padding: "13px",
  //   },
  // },
  MuiButton: {
    root: {
      boxShadow: "none",
      borderRadius: "4px",
      lineHeight: "initial",
      minWidth: "initial",
      padding: 0,
      textTransform: "initial",
    },
    text: {
      padding: 0,
    },
  },
  MuiPaper: {
    elevation8: {
      boxShadow: shadows.lg,
    },
    elevation16: {
      borderRadius: "40px 40px 0 0",
      boxShadow: shadows.lg,
    },
  },
  // MuiInputBase: {
  //   root: {
  //     background: `${palette.grey[200]}`,
  //   },
  // },
};
