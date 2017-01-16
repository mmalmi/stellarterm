const React = window.React = require('react');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="so-back HeaderBack">
      <div className="so-chunk Header">
        <nav className="Header__nav">
          <a className="Header__nav__item" href="#">Stellarterm</a>
          <a className="Header__nav__item" href="#trading">Trading</a>
          <a className="Header__nav__item" href="#account">Account</a>
        </nav>
      </div>
    </div>
  }
}
