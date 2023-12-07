import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import CartRow from "./cartRow";

//Styles
import { cartTableStyle } from "../utils/styles";

//Reducers
import { getCartReducer } from "../../../reducers/cart/cartSlice";

const CartTable = () => {
  const columns = [
    { id: "Product", label: "Product", minWidth: 170 },
    { id: "Price", align: "right", label: "Price", minWidth: 100 },
    {
      id: "Quantity",
      label: "Quantity",
      minWidth: 170,
      align: "right",
    },
    {
      id: "Sub Total",
      label: "Sub Total",
      minWidth: 170,
      align: "right",
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 170,
      align: "center",
    },
  ];

  //States
  const cartList = useSelector((state) => state.carts.cart);
  const ref = useRef(true);
  const products = useSelector((state) => state.products);

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  //Helpers
  const dispatch = useDispatch();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Callbacks
  useEffect(() => {
    if (ref.current && products.length > 0) {
      ref.current = false;
      dispatch(getCartReducer());
    }
  }, [ref, products]);

  return (
    <TableContainer sx={cartTableStyle.container}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                sx={cartTableStyle.header}
                key={column.id}
                align={column.align}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? cartList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : cartList
          ).map((row) => (
            <CartRow key={row.id} row={row} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[4, 8, 16, { label: "All", value: -1 }]}
              colSpan={3}
              count={cartList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              sx={cartTableStyle.cell}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
export default CartTable;
