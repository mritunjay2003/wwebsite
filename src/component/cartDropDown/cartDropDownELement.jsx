import { useDispatch, useSelector } from "react-redux";

//Components
import { CardMedia, Typography } from "@mui/material";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

//Reducers
import { removeFromCartReducer } from "../../reducers/cart/cartSlice";

const CartElement = ({ name, price, count, image, id }) => {
  //States
  const products = useSelector((state) => state.products);

  //Helper
  const dispatch = useDispatch();
 
  const handleRemove = async () => {
    dispatch(removeFromCartReducer({ id, products }));
  };
  return (
    <div
      className="card-element"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <CardMedia
        image={image}
        alt={"no"}
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "10px",
          // objectFit: "fill",
          textAlign: "center",
        }}
      />
      <div className="details" style={{ width: "50%" }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="caption">
          {`${count} x `}
          <b style={{ color: "#B88E2F" }}>{price}</b>
        </Typography>
      </div>
      <div className="action">
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={handleRemove}
          icon={faCircleXmark}
        />
      </div>
    </div>
  );
};
export default CartElement;
