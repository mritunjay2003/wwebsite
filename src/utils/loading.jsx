import { useSelector } from "react-redux";

//Components
import { Backdrop, CircularProgress } from "@mui/material";

const Loading = () => {
  //States
  const loading = useSelector((state) => state.loading.loading);

  return (
    <Backdrop sx={{ zIndex: 5000 }} open={!!loading}>
      <CircularProgress thickness={5} size={70} sx={{ color: "#B88E2F" }} />
    </Backdrop>
  );
};
export default Loading;
