import '../css/Home.css';
import NavBar from '../components/navigation/NavBar';

export default function Home() {
  return (
    <div className="Home">

      <NavBar />

      <div className="SectionContainer">
        <div className="Container">
          <div className="Description">
            <h1>Hello, I'm Neal</h1>
            <p>A software engineer dedicated to making the world a better place one line of code at a time.</p>
          </div>

          <div className="ImageContainer">
            <img src="https://via.placeholder.com/700" alt="Placeholder" />
          </div>
        </div>
      </div>

      <h2 className="S-Header">Skills</h2>

      <div className="Section">
        <div className="Container">
          <div className="Description">
            <p>I have a vast experience in the following web technologies:</p>
            <div className="ImageContainer">
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="Image"/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="Image"/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="Image"/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="Image"/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="Image"/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="Image"/>
            </div>
          </div>
          <div className="ImageContainer">
            <img src="https://via.placeholder.com/600" alt="Placeholder" className="Image"/>
          </div>
        </div>
      </div>

    </div>
  );
}
