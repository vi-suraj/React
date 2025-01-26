import reactImg from "../assets/react-core-concepts.png";
const content = ["Fundamental", "Crucial", "Core"];

const randomContent = () => content[Math.floor(Math.random() * content.length)];

function Header() {
  const description = randomContent();
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

export default Header;
