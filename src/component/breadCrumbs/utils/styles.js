const styles = {
  main: { position: "relative" },
  image: { width: "100%", height: "260px", opacity: "0.5" },
  content: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "260px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};
export default styles;
