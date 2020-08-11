import { h, Component } from 'preact';
import { Home } from './Home';
import { Post } from './Post';

class Content extends Component {
  state: any = {};

  constructor() {
    super();
  }
  componentDidMount() {
    console.log(this.state, 'didMount');
    window.addEventListener('hashchange', this.changeContent.bind(this), false);
    this.changeContent();
  }
  changeContent() {
    const locationNoHash = location.hash.replace('#', '');
    console.log(locationNoHash, locationNoHash.match(/\/post\/*/g));
    if (locationNoHash === '/') {
      this.setState({ content: <Home /> });
    } else if (locationNoHash.match(/\/post\/*/g)) {
      this.setState({ content: <Post path={'/assets/content' + locationNoHash} /> });
    }
  }
  render() {
    console.log(this.state, 'render');
    return <div>{this.state.content}</div>;
  }
}

export { Content };
