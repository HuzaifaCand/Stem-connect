import WhyJoinCard from "./WhyJoinCard";
import handshake from "../assets/icons/Handshake.png";
import book from "../assets/icons/Book.png";
import list from "../assets/icons/List.png";
import network from "../assets/icons/Network.png";
import { Link } from "react-router-dom";

const WhyJoinComponent = () => {
  return (
    <section className="my-8 py-4">
      <div className="text-center mb-4">
        <h1 className="text-primaryBlack font-bold text-center text-5xl mb-4">
          Why Join STEM Connect
        </h1>
        <h3 className="text-secondaryBlack text-xl">
          Access Unique Features Made to Improve Your Experience In STEM
        </h3>
      </div>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
          <WhyJoinCard
            title="Contribute to Mutual STEM Success"
            subtitle="Support the Community by Sharing Knowledge and Resources and Achieve Quicker Results"
            icon={handshake}
            isHandshake={true}
          />
          <WhyJoinCard
            title="Improve Your Extracurriculars"
            subtitle="Participate in and Easily Set Up Initiatives That Showcase Your STEM Talents and Achievements"
            icon={list}
            isLeft={false}
          />
          <WhyJoinCard
            title="Network with Others in STEM"
            subtitle="Engage with STEM Professionals and Students to Share Ideas and Opportunities"
            icon={network}
            isTop={false}
          />
          <WhyJoinCard
            title="Find Extensive STEM Resources"
            subtitle="Access a Wealth of STEM Resources to Support Your Learning and Projects"
            icon={book}
            isTop={false}
            isLeft={false}
          />
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/login"
            className="bg-secondaryBlue text-primaryWhite text-xl rounded-lg shadow-md font-semibold py-3 px-24"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinComponent;
