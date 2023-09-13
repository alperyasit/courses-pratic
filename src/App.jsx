import "./App.css";
import "bulma/css/bulma.css";
import { Course } from "./Course";

import StarWars from "./img/starwars.jpg";
import The100 from "./img/the100.jpeg";
import Interstaller from "./img/interstaller.jpeg";
import UnderTheDome from "./img/underthedome.jpg";

function App() {
  return (
    <>
      <section className="hero is-warning">
        <div className="hero-body">
          <p className="title">Movies</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                img={StarWars}
                title="Star Wars"
                description="Star Wars is a multi-genre mythology and multimedia franchise created by George Lucas in 1976. Comprising movies, novels, comics, video games, toys, and numerous television series, the Star Wars franchise employs archetypal motifs common to religions, classical mythology, and political climax, as well as musical motifs of those same aspects.

                As one of the foremost examples of the space opera subgenre of science fiction, Star Wars has become part of mainstream popular culture, as well as being one of the highest-grossing series of all time.[2]
                
                In 2012, The Walt Disney Company bought the rights to the franchise from George Lucas for 4.05 billion dollars. Since then, Disney has split off Star Wars into two main categories, those being Star Wars Legends and Star Wars Canon, with Canon being the official story of the franchise.
                "
              />
            </div>
            <div className="column">
              <Course
                img={The100}
                title="The 100"
                description="The 100 is an American post-apocalyptic Sci-Fi Dystopian drama television series developed by Jason Rothenberg and is loosely based on the book series of the same name by Kass Morgan. The series follows a group of Delinquents, who have been sent down to Earth to see if it is survivable or not. For the first time in nearly a century, humans have returned to planet Earth, but they realize they're not alone.

                The series premiered on The CW in the United States on March 19, 2014, attracting 2.73 million viewers on the original airing. In August 2019, it was announced that the series would come to an end with the seventh season. The last season premiered on May 20, 2020 and concluded on September 30, 2020.
                
                The series is loosely based on The 100, the first novel in the hundred series by Kass Morgan. Some characters are original characters and do not appear in the books. A few also have their personalities switched or shared. The TV series is also considered to be ahead of the book series in events. Many of the events that happen in the TV show may not happen in the books."
              />
            </div>
            <div className="column">
              <Course
                img={Interstaller}
                title="Interstaller"
                description="Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.

                Brothers Christopher and Jonathan Nolan wrote the screenplay, which had its origins in a script Jonathan developed in 2007 and was originally set to be directed by Steven Spielberg. Kip Thorne, a Caltech theoretical physicist and 2017 Nobel laureate in Physics,[4] was an executive producer, acted as a scientific consultant, and wrote a tie-in book, The Science of Interstellar. Cinematographer Hoyte van Hoytema shot it on 35 mm movie film in the Panavision anamorphic format and IMAX 70 mm. Principal photography began in late 2013 and took place in Alberta, Iceland, and Los Angeles. Interstellar uses extensive practical and miniature effects, and the company Double Negative created additional digital effects.
                
                Interstellar premiered in Los Angeles on October 26, 2014. In the United States, it was first released on film stock, expanding to venues using digital projectors. The film received generally positive reviews from critics and grossed over $677 million worldwide ($715 million after subsequent re-releases), making it the tenth-highest-grossing film of 2014. It has been praised by astronomers for its scientific accuracy and portrayal of theoretical astrophysics.[5][6][7] Interstellar was nominated for five awards at the 87th Academy Awards, winning Best Visual Effects, and received numerous other accolades."
              />
            </div>
            <div className="column">
              <Course
                img={UnderTheDome}
                title="Under The Dome"
                description="Under the Dome is an American science-fiction mystery drama television series. It premiered on CBS on June 24, 2013[1] and concluded on September 10, 2015.[2] The series was developed by Brian K. Vaughan and based on Stephen King's 2009 novel of the same name.

                Under the Dome tells the story of the residents of the fictional small town of Chester's Mill, when a massive, transparent and indestructible dome suddenly cuts them off from the rest of the world. Military forces, the government, and the media start positioning themselves outside the barrier in an attempt to break it down. As this happens, the residents trapped inside find their own ways to survive with diminishing resources and rising tensions. A small group of people inside the dome unravel the complicated mysteries to figure out what the dome is, where it came from, and when (and if) it will go away.
                
                Under the Dome was an instant success for the network. The premiere in June 2013 broke the record as the most-watched summer drama premiere on any television network since 1992.[3] The show continued to enjoy high viewership ratings throughout its first season,[4] but the second and third seasons of the series had significant declines in viewership.[5] Initially, Under the Dome had a positive critical reception,[6][7] which changed into mixed reviews as the series progressed.[8][9]
                
                Under the Dome came to a conclusion in September 2015. Over the three seasons, 39 episodes were produced. Executive producer and showrunner Neal Baer stated in an interview after the finale aired: I'm very happy with this ending. I feel very satisfied. We made it so there could be another [season]… but it wasn't necessary."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
