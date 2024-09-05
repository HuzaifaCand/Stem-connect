import Hero from "../components/Hero";
import CommunityCard from "../components/CommunityCard";
import SpeechBubble from "../assets/icons/SpeechBubble.png";
import QuestionMark from "../assets/icons/QuestionMark.png";
import List from "../assets/icons/List.png";
import MemberDirectory from "../components/MemberDirectory.jsx";

const Community = () => {
  return (
    <>
      <Hero
        title="STEM Connect Community"
        subtitle="Network: Connect with Members, Share Ideas, Create Surveys, and Help Out!"
      />
      <section className="my-4 py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 p-4">
            <CommunityCard
              title="Ask A Question"
              icon={SpeechBubble}
              page="/ask"
              subtitle="Get Support From The Community!"
            />
            <CommunityCard
              title="Join A Discussion"
              icon={QuestionMark}
              page="/forums"
              subtitle="Help Out Your Peers!"
            />
            <CommunityCard
              title="Create A Survey"
              icon={List}
              page="/create-survey"
              subtitle="Gather Information For Your Idea!"
            />
          </div>
        </div>
      </section>
      <MemberDirectory />
    </>
  );
};

export default Community;
