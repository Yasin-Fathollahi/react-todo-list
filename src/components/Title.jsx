import sunImage from '../assets/images/icon-sun.svg';
import moonImage from '../assets/images/icon-moon.svg';

export default function Title({ theme, onSetTheme }) {
  function switchTheme() {
    onSetTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className="title-theme-box">
      <p className="list-title">todo</p>
      <button onClick={switchTheme} className="btn-theme">
        <img
          src={theme === 'light' ? sunImage : moonImage}
          alt="change theme button - sun"
        />
      </button>
    </div>
  );
}
