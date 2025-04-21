import ContextDetails from "../About/ContextDetails";
import OurBeliefDetails from "../About/OurBeliefDetails";
import OurCommitmentDetails from "../About/OurCommitmentDetails";
import OurStoryDetails from "../About/OurStoryDetails";
import RoadmapDetails from "../About/RoadmapDetails";
import "./WhoWeAre.css";

function WhoWeAreContents() {
return (
<>
<div className="container whoweare">
<h1>WHO WE ARE</h1>
<div>
  <h2>Our Commitment</h2>
  <OurCommitmentDetails />
</div>
<div>
  <h2>Our RoadMap</h2>
  <RoadmapDetails />
</div>
<div>
  <h2>Our Context</h2>
  <ContextDetails />
</div>
<div>
  <h2>Our Belief</h2>
  <OurBeliefDetails />
</div>
<div>
  <h2>Our Story</h2>
  <OurStoryDetails />
</div>
</div>
</>
);
}
export default WhoWeAreContents;
