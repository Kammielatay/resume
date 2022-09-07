import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.components";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Projects",
      imageUrl: "",
    },
    {
      id: 2,
      title: "Skills",
      imageUrl: "",
    },
    {
      id: 3,
      title: "About",
      imageUrl: "",
    },
    {
      id: 4,
      title: "Contact me",
      imageUrl: "",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} /> ;
    </div>
  );
};

export default Home;
