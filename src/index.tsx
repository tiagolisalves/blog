import { h, render, Component } from 'preact';
import { Header } from './components/Header';
import { createGlobalStyle } from 'styled-components';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import './assets/styles.scss';

class App extends Component {
  componentDidMount() {
    window.location.hash = window.location.hash || '/';
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div
          style="width: 173px;
    margin: 0px auto;
          position: relative;
          top: 30px;

    "
        >
          <a
            href="https://stackoverflow.com/users/6105824/tiagolisalves?tab=profile"
            target="_blank"
          >
            <img
              src="assets/icons8-stack-overflow.svg"
              alt=""
              style="position: relative;
            bottom: 3px;"
              srcset=""
            />
          </a>
          <a href="https://github.com/tiagolisalves" target="_blank">
            <img src="assets/icons8-github.svg" style="height: 32px;" alt="" srcset="" />
          </a>
          <a href="https://www.instagram.com/tiagolisalves/" target="_blank">
            <img
              src="assets/icons8-instagram.svg"
              style="height: 36px;    position: relative;
            top: 2px;"
              alt=""
              srcset=""
            />
          </a>
          <a href="https://www.linkedin.com/in/tiago-lisboa-alves-7aa44a115/" target="_blank">
            <img
              src="assets/icons8-linkedin.svg"
              style="position: relative;
            bottom: 3px;
            height: 26px;
            margin-right: 7px;"
              alt=""
              srcset=""
            />
          </a>
          <a href="mailto:tiagolisalves@gmail.com" target="_blank">
            <img
              src="assets/iconfinder_mail_115714.svg"
              style="width: 41px;
            position: relative;
            top: 5px;"
              alt=""
              srcset=""
            />
          </a>
        </div>

        <Content></Content>
      </div>
    );
  }
}
render(<App />, document.querySelector('#blog-container'));
