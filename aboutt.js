import React from "react";
import"./aboutt.css"
import Footer from "./footer";
class About extends React.Component{
    render(){
        return(
            <div className="suni">
                <section className="nayam">
                    <article className="bala">
                <main className="naven">
                    <main className="naven1">
                    <img src="https://images.pexels.com/photos/4861373/pexels-photo-4861373.jpeg?auto=compress&cs=tinysrgb&w=800"width="100px"height="100px"/>

                    </main>
          <h4 className="hip">Enriching and Fun Early Years<br/>
Matter Preschool Curriculum</h4>
<p className="mahi">Our curriculum focuses on the holistic development of the child and is suitably<br/>
mapped to age-appropriate objectives and outcomes. Based on Dr. Howard
Gardner's Theory of Multiple Intelligences and Experiential Learning, the
KLAY curriculum empowers the child to be able to establish a routine, follow
directions, make friends and work independently.
</p>
</main>

<br/><br/>
<section className="pera">
<main className="naven2">
                    <img src="https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=800"width="100px"height="100px"/>

                    </main>
    <h4 className="hip1">Socio-emotional & Physical<br/>
Development</h4>
<p className="mahi1">A multi-sensory environment that includes group activities, role plays, story time and drama that have been
curated to meet the child's social, emotional, physical and emotional milestones. We make them ‘Big School
Ready'!</p>
</section>
<br/><br/>

<nav className="anil">
<main className="naven3">
                    <img src="https://busytoddler.com/wp-content/uploads/2019/02/stickerlineupwall8.jpg"width="100px"height="100px"/>

                    </main>
    <h4 className="hip2">Milestones Tracking and<br/>
Regular Assessments</h4>
<p className="mahi2">180 degree evaluation, milestone tracking and regular assessments every
term, to let you know of your child’s progress. We also help counsel with
strategies, should a child require a more focused stimulation.</p>
<br/><br/><br/><br/>
<Footer></Footer>
</nav>
</article>
</section>
            </div>
        )
    }
}
export default About;
