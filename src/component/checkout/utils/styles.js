const styles = {
  box: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
    margin: { xs: "20px", md: "60px 10%" },
  },
};

const billingFromStyles = {
  box: { width: { xs: "initial", md: "50%" } },
  inputField: {
    margin: "10px 0",
    width: { xs: "100%", md: "80%" },
  },

  title: {
    color: "#B88E2F",
    fontWeight: "700",
  },
  from: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#B88E2F",
    margin: "10px 0",
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
      margin: "8px 0",
      border: "2px solid #B88E2F",
      color: "#B88E2F",
    },
  },
};

const billingTable = {
  totalAmount: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#B88E2F",
    border: "none",
  },
  main: {
    width: { xs: "initial", md: "40%" },
    padding: "10px",
    paddingBottom: "40px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  checkout: { color: "#000", borderColor: "#000" },
  container: { width: "100%" },
  header: { fontWeight: "bold", fontSize: "18px", border: "none" },
  cell: {
    border: "none",
    color: "#9F9F9F",
  },
  titleCell: {
    border: "none",
    color: "#9F9F9F",
    fontWeight: 600,
  },
  totalCell: {
    border: "none",
  },
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export { billingTable, billingFromStyles };

export default styles;
