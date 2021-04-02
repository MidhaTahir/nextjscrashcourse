import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web Dev</span> Me :D
      </h1>
      <p className={headerStyles.description}>Keeping up to date</p>
    </div>
  );
};

export default Header;
