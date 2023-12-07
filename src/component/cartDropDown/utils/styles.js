const styles = {
  cart: {
    position: "absolute",
    top: "50px",
    padding: "10px",
    right: 0,
    zIndex: 3000,
    width: "350px",
    height: "500px",
  },
  header: {
    height: "10%",
  },
  main: {
    height: "60%",
    overflow: "auto",
  },
  footer: {
    height: "30%",
  },
  total: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px",
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 0px",
  },
  actionButton: {
    borderRadius: "50px",
    color: "black",
    borderColor: "black",
  },
};

export default styles;
