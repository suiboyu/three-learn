import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <Link to={"/island"}>漂浮的小岛</Link>
      <Link to={"/scroll-room"}>滚动的房子</Link>
      <Link to={"/halloween"}>万圣节</Link>
      <Link to={"/table-configurator"}>变动的桌子</Link>
    </div>
  );
};

export default Home;
