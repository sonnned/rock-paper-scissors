const Icon = ({
  image,
  positions,
  background,
}: {
  image: string;
  positions: string[];
  background: string;
}) => {
  const positions_string = positions.join(" ");
  return (
    <div
      className={`content-container absolute ${positions_string} flex justify-center items-center`}
    >
      <div className={`h-max w-max rounded-full bg-${background}`}>
        <div className="flex justify-center items-center h-36 w-36 bg-white shadow-lg rounded-full m-6 shadow-icon">
          <img src={image} alt={`${background} icon`} />
        </div>
      </div>
    </div>
  );
};

export default Icon;
