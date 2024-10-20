import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";

import frame874 from "../assets/images/Frame 874.png";
import frame875 from "../assets/images/Frame 875.png";
import frame876 from "../assets/images/Frame 876.png";
import frame877 from "../assets/images/Frame 877.jpg";
// import frame878 from "../assets/images/Frame 878.jpg";
import frame879 from "../assets/images/Frame 879.png";

import x from "../assets/images/x-white.png";
import lind from "../assets/images/lind-white.png";
import insta from "../assets/images/insta-white.png";

export const footerLinkItem = [
  {
    name: "Support",
    links: [
      {
        title: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
      },
      {
        title: "exclusive@gmail.com.",
        path: "mailto:exclusive@gmail.com",
      },
      {
        tile: "+88015-88888-9999",
        path: "tel:+88015-88888-9999",
      },
    ],
  },
  {
    name: "Account",
    links: [
      {
        title: "My Account",
        path: "#",
      },
      {
        title: "Login / Register",
        path: "#",
      },
      {
        title: "Cart",
        path: "#",
      },
      {
        title: "Wishlist",
        path: "#",
      },
      {
        title: "Shop",
        path: "#",
      },
    ],
  },
  {
    name: "Quick Link",
    links: [
      {
        title: "Privacy Policy",
        path: "#",
      },
      {
        title: "Terms Of Use",
        path: "#",
      },
      {
        title: "Contact",
        path: "#",
      },
    ],
  },
];

export const productCard = [
  {
    name: "Dog Food-No Discount",
    color: ["red", "blue"],
    price: 123,
    image: img1,
    rating: 3.5,
    isNew: true,
    discountPrice: "20%",
  },
  {
    name: "Dslr camera-No Discount",
    color: ["red", "blue"],
    price: 123,
    image: img2,
    new: "new",
    rating: 3,
    isNew: true,
    discountPrice: "15%",
  },
  {
    name: "Laptop-no discount",
    color: ["red", "blue"],
    price: 123,
    image: img3,
    rating: 4,
    isNew: false,
    discountPrice: "10%",
  },
  {
    name: "Curology product set",
    color: ["red", "blue"],
    price: 123,
    image: img4,
    rating: 2,
    isNew: true,
    discountPrice: "15%",
  },
  {
    name: "Kids car-with color choosing",
    color: ["red", "blue"],
    price: 123,
    image: img5,
    rating: 4,
    isNew: true,
    discountPrice: "5%",
  },
  {
    name: "Soccer boat-color choosing",
    color: ["red", "blue"],
    price: 123,
    image: img6,
    new: "new",
    rating: 4,
    isNew: false,
  },
  {
    name: "Gaming control-color choosing",
    color: ["red", "blue"],
    price: 123,
    image: img7,
    rating: 1,
    isNew: true,
    discountPrice: "15%",
  },
  {
    name: "Man jacket-color choosing",
    color: ["red", "blue"],
    price: 123,
    image: img8,
    rating: 2,
    isNew: true,
  },
];

export const memberCard = [
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    // icon: ["twitter", "instagram", "linkedIn"],
    icon: [
      { name: "x", icn: x, link: "#" },
      { name: "instagrm", icn: insta, link: "#" },
      { name: "linkedIn", icn: lind, link: "#" },
    ],
    image: frame874,
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    icon: [
      { name: "x", icn: x, link: "#" },
      { name: "instagrm", icn: insta, link: "#" },
      { name: "linkedIn", icn: lind, link: "#" },
    ],
    image: frame875,
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    icon: [
      { name: "x", icn: x, link: "#" },
      { name: "instagrm", icn: insta, link: "#" },
      { name: "linkedIn", icn: lind, link: "#" },
    ],
    image: frame876,
  },
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    icon: [
      { name: "x", icn: x, link: "#" },
      { name: "instagrm", icn: insta, link: "#" },
      { name: "linkedIn", icn: lind, link: "#" },
    ],
    image: frame877,
  },
  {
    name: "Emily Mark",
    position: "Founder & Chairman",
    icon: [
      { name: "x", icn: x, link: "#" },
      { name: "instagrm", icn: insta, link: "#" },
      { name: "linkedIn", icn: lind, link: "#" },
    ],
    image: frame879,
  },
];
