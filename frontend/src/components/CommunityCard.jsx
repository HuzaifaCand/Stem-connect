import { Link } from "react-router-dom";
const CommunityCard = ({ title, subtitle, icon, page }) => {
  return (
    <Link
      to={page}
      className="relative bg-accent bg-opacity-10 text-primaryBLue hover:bg-opacity-50 p-4 py-16 text-center"
    >
      <div className="flex justify-center">
        <img src={icon} alt={title} className="w-12 h-12 mb-4 object-contain" />
      </div>
      <h1 className="font-bold text-3xl mb-2">{title}</h1>
      <p>{subtitle}</p>
      <div className="absolute bg-primaryBlue top-0 left-0 h-2 w-full" />
      <div className="absolute bg-primaryBlue bottom-0 left-0 h-2 w-full" />
    </Link>
  );
};

export default CommunityCard;
