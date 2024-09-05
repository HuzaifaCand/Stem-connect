import { Link } from "react-router-dom";

const Hero = ({
  title,
  subtitle,
  isHome = false,
  button,
  hasButton,
  buttonLink,
}) => {
  return (
    <>
      <section className="bg-primaryBlue py-36 mb-4 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-primaryWhite text-3xl font-semibold sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-4 mb-6 text-2xl text-primaryWhite">{subtitle}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-6 bg-secondaryBlue"></div>
        {isHome && (
          <div className="flex space-x-4 justify-center">
            <Link
              to="/login"
              className="bg-accent text-primaryWhite rounded-lg font-semibold py-3 px-12"
            >
              Join Now
            </Link>
            <Link
              to="/community"
              className="bg-secondaryBlue text-primaryWhite rounded-lg font-semibold py-3 px-12"
            >
              View Community
            </Link>
          </div>
        )}
        {hasButton && (
          <div className="text-center">
            <div className="flex justify-center">
              <Link
                to={buttonLink}
                className="bg-secondaryBlue px-16 py-3 rounded-lg font-semibold text-primaryWhite"
              >
                {button}
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
