import triangle from "../../assets/bg-triangle.svg";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissors from "../../assets/icon-scissors.svg";
import Icon from "./Icon";

const Body = () => {
  return (
    <div className="relative w-full h-full">
      <div className="h-max w-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-20">
        <Icon
          image={rock}
          background="rock"
          positions={["bottom-0 left-0 right-0"]}
        />
        <Icon image={paper} background="paper" positions={["top-0 left-0"]} />
        <Icon
          image={scissors}
          background="scissors"
          positions={["top-0 right-0"]}
        />
        <img
          src={triangle}
          alt="triangle background"
          className="h-100 w-100 object-contain"
        />
      </div>
    </div>
  );
};

export default Body;
