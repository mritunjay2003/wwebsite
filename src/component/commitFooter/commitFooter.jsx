import { Box, CardMedia, Typography } from "@mui/material";
import { License, Shipping, Warranty, HighQuality } from "../../assets";

const CommitFooter = () => {
  const commit = [
    {
      image: License,
      title: "24 / 7 Support",
      subTitle: "Dedicated support",
    },
    {
      image: Shipping,
      title: "Free Shipping",
      subTitle: "Order over 150 $",
    },
    {
      image: Warranty,
      title: "Warranty Protection",
      subTitle: "Over 2 years",
    },
    {
      image: HighQuality,
      title: "High Quality",
      subTitle: "crafted from top materials",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: { xs: "auto", md: "80px 40px" },
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#FAF3EA",
      }}
      className={"CommitFooter"}
    >
      {commit.map((item, index) => (
        <Box
          sx={{ display: "flex", gap: 2, padding: { xs: "20px", md: "auto" } }}
          key={index}
        >
          {" "}
          <CardMedia
            sx={{ width: "61px", height: "62px" }}
            alt="green iguana"
            image={item.image}
          />{" "}
          <Box>
            <Typography
              gutterBottom
              variant="p"
              sx={{ fontWeight: 600, fontSize: 16 }}
              component="div"
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.subTitle}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CommitFooter;
