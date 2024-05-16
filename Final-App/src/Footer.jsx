import React, { useState, useEffect } from 'react';
import './index.css'
const Footer = () => {
  const statements = [
    "At GeoGamer, our mission is simple: to connect gamers with the best video game stores in their local area. We understand the excitement of discovering a new game or revisiting a beloved classic, and we believe that the right store can enhance that experience.",
    "Empowering Gamers: We're passionate about empowering gamers to find the perfect place to shop for their gaming needs. Whether you're a casual player looking for the latest releases or a hardcore enthusiast searching for rare finds, GeoGamer is here to guide you.",
    "Supporting Local Communities: We recognize the importance of local businesses in gaming communities. By promoting nearby video game stores, we aim to support these establishments and contribute to the vibrancy of gaming culture at a grassroots level.",
    "Curating Quality: Quality matters to us. We strive to curate a selection of stores that offer not only a wide range of products but also exceptional service and expertise. Every store featured on GeoGamer has been carefully vetted to ensure a positive shopping experience for our users.",
    "Building Connections: Beyond facilitating transactions, GeoGamer is about building connections. We want to foster a sense of community among gamers and provide a platform for sharing recommendations, reviews, and experiences.",
    "Join us on our mission to elevate the gaming experience. Whether you're a seasoned veteran or just starting your gaming journey, GeoGamer is your trusted companion in the world of video game retail."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % statements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Mission Statement</h1>
      <h3>{statements[index]}</h3>
    </div>
  );
};

export default Footer;
