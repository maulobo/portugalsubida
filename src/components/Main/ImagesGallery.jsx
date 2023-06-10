import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import "./style.css";
import gallery1 from "../Images/gallery1.webp";
import gallery2 from "../Images/gallery2.webp";
import gallery3 from "../Images/gallery3.webp";
import gallery4 from "../Images/gallery4.webp";
import gallery5 from "../Images/gallery5.webp";
import gallery6 from "../Images/gallery6.webp";
import gallery7 from "../Images/gallery7.webp";
import gallery8 from "../Images/gallery8.webp";

const itemData = [
  {
    img: gallery1,
    title: "Kitchen",
    rows: 2,
    cols: 2,
  },
  {
    img: gallery2,
    title: "Balcony",
  },
  {
    img: gallery3,
    title: "Park",
  },
  {
    img: gallery4,
    title: "Livin",
    cols: 2,
  },
  {
    img: gallery5,
    title: "Room",
    cols: 2,
  },
  {
    img: gallery6,
    title: "Front",
    rows: 2,
    cols: 2,
  },
  {
    img: gallery7,
    title: "Backyard",
  },
  {
    img: gallery8,
    title: "Build",
  },
];

const ImagesGallery = () => {
  return (
    <>
      <ImageList className="una" variant="quilted" cols={4} rowHeight={170}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 2}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="hoverImg"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default ImagesGallery;
