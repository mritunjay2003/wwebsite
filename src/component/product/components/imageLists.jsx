import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const initialData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    rows: 5,
    cols: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
];
const ImageListComponent = ({ imageList }) => {
  const itemData = initialData.map((item, i) => ({
    ...item,
    img: imageList[i],
  }));

  return (
    <ImageList
      sx={{ width: { xs: "100%", md: 500 }, height: "fit-content" }}
      variant="quilted"
      cols={5}
      gap={25}
      rowHeight={70}
    >
      {itemData.map((item, index) => (
        <ImageListItem
          key={`${item.img}-${index}`}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 100, item.rows, item.cols)}
            style={{ borderRadius: "10px", objectFit: "fill" }}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageListComponent;
