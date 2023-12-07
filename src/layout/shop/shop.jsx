import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Components
import { Pagination } from "@mui/material";
import CardComponent from "../../component/card/card";
import { FilterBar } from "../../component";
import styles from "./utils/styles";
import { useParams } from "react-router-dom";

const Shop = () => {
  //states
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.products);
  const [filterProduct, setFilterProduct] = useState([]);
  const initialNoOfElement = 9;
  const [noOfElement, setNoOfElement] = useState(initialNoOfElement);

  const { category } = useParams();
  //constants

  const pageCount = Math.floor(filterProduct.length / noOfElement);
  const low = (currentPage - 1) * noOfElement;
  const high = Number(low) + Number(noOfElement);

  //helpers

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  const handleSortBy = (query) => {
    const sortBy = query.target.value;
    const sortProduct = [...filterProduct];
    sortProduct.sort((a, b) =>
      sortBy === "low" ? a.price - b.price : b.price - a.price
    );

    setFilterProduct(sortProduct);
  };

  const handleShow = (event) => {
    if (event.target.value === "0") {
      setNoOfElement(initialNoOfElement);
      return;
    }
    setNoOfElement(event.target.value);
  };

  useEffect(() => {
    if (["men", "kid", "women"].includes(category)) {
      const result = products.filter((item) => item.category === category);
      setFilterProduct(result);
    } else {
      setFilterProduct(products);
    }
  }, [category, products]);

  return (
    <div id="shop">
      <FilterBar
        low={low}
        high={high}
        total={filterProduct.length}
        category={"all"}
        show={noOfElement}
        handleShow={handleShow}
        handleSortBy={handleSortBy}
      />
      <div id="shop-list" style={styles.main}>
        {filterProduct.slice(low, high).map((item) => (
          <CardComponent
            key={item._id}
            id={item._id}
            title={item.title}
            image={item.image}
            price={item.price}
            subTitle={item.subTitle}
          />
        ))}
      </div>
      <Pagination
        sx={styles.pagination}
        color="primary"
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default Shop;
