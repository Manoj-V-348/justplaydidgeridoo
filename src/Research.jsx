import React from "react";

import "./index.css";
import "./Research.css";

import worksDisplay1 from "./assets/Images/Research/workDisplay1.jpeg";
import worksDisplay2 from "./assets/Images/Research/workDisplay2.jpeg";
import journalDetails1 from "./assets/Images/Research/journalDetail1.jpeg";
import journalDisplay2 from "./assets/Images/Research/journalDisplay1.jpeg";
import journalDisplay3 from "./assets/Images/Research/journalDisplay2.jpeg";
import journalDisplay4 from "./assets/Images/Research/journalDisplay3.jpeg";
import description from "./assets/Images/Research/descriptionImg.jpeg";

import Footer from "./components/Footer.jsx";

function Research() {
  return (
    <>
      <div className="research--page--container">
        <div className="works--carousel" id="works">
          <p className="works--text mofia">Works</p>
        </div>

        <div className="works--display--container center--elements vertical--flex">
          <div className="work--image--container center--elements vertical--flex">
            <img src={worksDisplay1} alt="Work 1" />
            <p className="mofia">" Work at various dept "</p>
          </div>
          <p className="poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            rerum necessitatibus distinctio nesciunt, alias error sapiente
            aliquam laboriosam praesentium sequi veniam nulla obcaecati a quidem
            mollitia placeat eaque, cum ipsam!
          </p>
        </div>

        <div className="works--display--container center--elements vertical--flex">
          <div className="work--image--container">
            <img src={worksDisplay2} alt="Work 2" />
            <p className="mofia">" Work at various dept "</p>
          </div>
          <p className="poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            rerum necessitatibus distinctio nesciunt, alias error sapiente
            aliquam laboriosam praesentium sequi veniam nulla obcaecati a quidem
            mollitia placeat eaque, cum ipsam!
          </p>
        </div>

        <div className="works--display--container2 center--elements horizontal--flex">
          <div className="work--image--container2">
            <img src={worksDisplay2} alt="Work 2" />
            <p className="mofia">" Work at various dept "</p>
          </div>
          <p className="poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            rerum necessitatibus distinctio nesciunt, alias error sapiente
            aliquam laboriosam praesentium sequi veniam nulla obcaecati a quidem
            mollitia placeat eaque, cum ipsam!
          </p>
        </div>

        <p className="description poppins-regular">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          rerum necessitatibus distinctio nesciunt, alias error sapiente aliquam
          laboriosam praesentium sequi veniam nulla obcaecati a quidem mollitia
          placeat eaque, cum ipsam!
        </p>

        <p className="workshops--text mofia">Workshops</p>

        <div className="workshop--details--container poppins-regular vertical--flex">
          <h1>At Morning Star</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            ut quo cumque officia accusantium dolores. Natus dolorum voluptate
            quis, error pariatur similique blanditiis consequatur quod inventore
            aliquid voluptas nostrum ullam?
          </p>
          <div className="workshop--images--container horizontal--flex">
            <div className="workshop--image"></div>
            <div className="workshop--image"></div>
            <div className="workshop--image">
              <p className="see--more">see more...</p>
            </div>
          </div>
        </div>

        <div className="workshop--details--container poppins-regular vertical--flex">
          <h1>Transgender Com</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            ut quo cumque officia accusantium dolores. Natus dolorum voluptate
            quis, error pariatur similique blanditiis consequatur quod inventore
            aliquid voluptas nostrum ullam?
          </p>
          <div className="workshop--images--container horizontal--flex">
            <div className="workshop--image"></div>
            <div className="workshop--image"></div>
            <div className="workshop--image">
              <p className="see--more">see more...</p>
            </div>
          </div>
        </div>

        <div className="workshop--details--container poppins-regular vertical--flex">
          <h1>Musical School</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            ut quo cumque officia accusantium dolores. Natus dolorum voluptate
            quis, error pariatur similique blanditiis consequatur quod inventore
            aliquid voluptas nostrum ullam?
          </p>
          <div className="workshop--images--container horizontal--flex">
            <div className="workshop--image"></div>
            <div className="workshop--image"></div>
            <div className="workshop--image">
              <p className="see--more">see more...</p>
            </div>
          </div>
        </div>

        <div className="works--carousel journal--carousel" id="journals">
          <p className="works--text mofia">Journals</p>
        </div>

        <div className="journal--details--container vertical--flex poppins-regular">
          <h1>Journal</h1>
          <div className="journal--image--details horizontal--flex">
            <img src={journalDetails1} alt="journal1" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              unde quibusdam, quaerat minus nostrum vel, temporibus eum possimus
              itaque expedita, vitae quisquam quasi tempora laboriosam alias.
              Temporibus esse cum ipsa.
            </p>
          </div>
          <div className="journal--image--details journal--image--details2 horizontal--flex">
            <img src={journalDisplay2} alt="journal2" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              unde quibusdam, quaerat minus nostrum vel, temporibus eum possimus
              itaque expedita, vitae quisquam quasi tempora laboriosam alias.
              Temporibus esse cum ipsa.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            consequatur pariatur corrupti debitis, quibusdam sunt similique
            autem exercitationem eos sequi? Corrupti eveniet atque a, ratione
            eius dolores quae! Modi, optio.
          </p>
        </div>

        <div className="journal--details--container vertical--flex poppins-regular">
          <h1>Hindu Articles</h1>
          <div className="journal--image--details horizontal--flex">
            <img src={journalDisplay3} alt="journal3" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              unde quibusdam, quaerat minus nostrum vel, temporibus eum possimus
              itaque expedita, vitae quisquam quasi tempora laboriosam alias.
              Temporibus esse cum ipsa.
            </p>
          </div>
          <div className="journal--image--details journal--image--details2 horizontal--flex">
            <img src={journalDisplay4} alt="journal4" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              unde quibusdam, quaerat minus nostrum vel, temporibus eum possimus
              itaque expedita, vitae quisquam quasi tempora laboriosam alias.
              Temporibus esse cum ipsa.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            consequatur pariatur corrupti debitis, quibusdam sunt similique
            autem exercitationem eos sequi? Corrupti eveniet atque a, ratione
            eius dolores quae! Modi, optio.
          </p>
        </div>

        <div className="horizontal--flex last--description poppins-regular">
          <img src={description} alt="description" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            aperiam consequatur libero asperiores porro consectetur dolores
            voluptatum doloribus minus accusamus iusto magni quod dicta autem
            impedit, soluta consequuntur ipsum non. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Deserunt, nesciunt repellat deleniti
            fuga vel rem mollitia perferendis quasi doloribus ducimus tenetur, a
            minus ipsa laborum quo vero harum! Rem, exercitationem!
          </p>
        </div>

        <p className="poppins-regular center--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est
          quos similique! Architecto non aperiam provident, quod maiores
          pariatur commodi ratione, similique fuga nesciunt molestiae iusto
          facere earum ipsam dolore! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas ullam delectus quia id quaerat deleniti culpa!
          Temporibus possimus, expedita, quasi cum laboriosam neque repellat
          explicabo voluptas, dolores voluptate quia quam!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Research;
