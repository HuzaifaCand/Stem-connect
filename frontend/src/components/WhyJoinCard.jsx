const WhyJoinCard = ({
  icon,
  title,
  subtitle,
  isLeft = true,
  isTop = true,
  isHandshake = false,
}) => {
  return (
    <div className="bg-accent bg-opacity-20 p-24 shadow-md relative">
      <div
        className={`absolute left-0 w-full bg-primaryBlue h-2 ${
          isTop ? "top-0" : "bottom-0"
        }`}
      />
      <div
        className={`absolute top-0 w-2 h-full bg-primaryBlue ${
          isLeft ? "left-0" : "right-0"
        }`}
      />
      <div className="text-center">
        <div className="flex justify-center">
          <img
            className={`object-contain ${
              isHandshake ? "w-32 h-32" : "w-24 h-24 mb-6"
            }`}
            src={icon}
            alt={title}
          />
        </div>
        <h2 className="text-primaryBlue text-3xl font-bold mb-2">{title}</h2>
        <h3 className="text-secondaryBlue">{subtitle}</h3>
      </div>
    </div>
  );
};

export default WhyJoinCard;
