import "./App.css";
import Profile from "./components/Profile";
import Form from "./components/From";
import LinkButtons from "./components/LinkButtons";
const App: React.FC = () => {
  return (
    <div>
      <Profile
        imageUrl="./Images/Profile.png"
        bio="Welcome to the world of Tulsi Virtul Introduction! As a web developer, I
        am able to crafting the digital experiences that power the internet.
        With a strong foundation in both front-end and back-end technologies, I
        have the power to bring designs to life and create dynamic, interactive
        websites and web applications.
        On the front end, I utilized languages like HTML, CSS, and JavaScript to
        build the user interface and ensure a seamless, visually appealing
        experience for my users. From layout and styling to animations and
        interactivity, my expertise in these languages will shape how users
        engage with my creations.
        Meanwhile, on the back end, I worked with languages like Python,PHP, or
        JavaScript (Node.js) to develop server-side logic, manage databases, and
        handle the behind-the-scenes functionality of my web applications.
        Understanding server-client communication, databases, and server-side
        frameworks will be key as I build robust and scalable web solutions.With
        my diverse skill set spanning both front-end and back-end technologies,
        I have the flexibility and capability to tackle a wide range of projects
        and contribute to every stage of the web development process."
      />
      <Form />
      <div className="container">
        <LinkButtons
          url="https://www.linkedin.com/in/tulsikalola2a888b191/"
          label="Linkdln"
        />
        <LinkButtons url="https://github.com/TULSI2012" label="Github" />
        <LinkButtons url="./Images/tulsiresume.pdf" label="Resume" />
      </div>
    </div>
  );
};

export default App;
