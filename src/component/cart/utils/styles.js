const styles = {
  box: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
    margin: { xs: "20px", md: "60px 10%" },
  },
};

const cartCardStyle = {
  main: {
    width: { xs: "initial", md: "25%" },
    padding: "10px",
    paddingBottom: "40px",
    display: "flex",
    height: "250px",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F9F1E7",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    alignItems: "center",
  },
  total: {
    padding: "4px 16px",
    color: "#B88E2F",
    fontWeight: "BOLD",
    fontSize: "20px",
  },
  checkout: { color: "#000", borderColor: "#000" },
  text: {
    padding: "4px 16px",
    fontWeight: "600",
    fontSize: "14px",
  },
};

const cartTableStyle = {
  container: {
    width: { xs: "100%", md: "70%" },
    maxHeight: { md: "480px" },
    overflow: { md: "auto" },
  },
  header: { backgroundColor: "#F9F1E7", border: "none" },
  imageCell: {
    border: "none",
    display: "flex",
    color: "#9F9F9F",
    gap: 2,
    alignItems: "center",
  },
  cell: {
    border: "none",
    color: "#9F9F9F",
  },
  input: {
    maxWidth: "60px",
    backgroundColor: "#fff",
    "& .MuiInputBase-input": {
      padding: "8px 16px",
    },
  },
  totalCell: {
    border: "none",
  },
  actionCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export { cartCardStyle, cartTableStyle };

export default styles;
