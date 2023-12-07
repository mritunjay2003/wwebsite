import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

//Styles
import { billingTable } from "../utils";

const CartCard = ({ cart, total }) => {
  const columns = [
    { id: "Product", label: "Product", minWidth: 170 },
    { id: "Sub Total", align: "right", label: "Sub Total", minWidth: 100 },
  ];

  return (
    <Paper elevation={0} sx={billingTable.main}>
      <TableContainer sx={billingTable.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={billingTable.header}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow key={row.name}>
                <TableCell sx={billingTable.titleCell} scope="row">
                  {row.title}
                </TableCell>
                <TableCell sx={billingTable.cell} align="right">
                  {row.price}
                </TableCell>
              </TableRow>
            ))}
            <TableRow key={"total"}>
              <TableCell sx={billingTable.titleCell} scope="row">
                Total
              </TableCell>
              <TableCell sx={billingTable.totalAmount} align="right">
                {`RS . ${total}`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider sx={{ width: "100%" }} />
      <Typography variant="caption">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </Typography>
      <Button variant="outlined" type={"submit"} sx={billingTable.checkout}>
        Place Order
      </Button>
    </Paper>
  );
};

export default CartCard;
