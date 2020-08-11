import { h, Component } from 'preact';
import { HttpClient } from '../core/http-client';
const http = new HttpClient();
import 'code-prettify';

declare var PR: any;

import { mkComp } from '../core/utils';

const PostBody = mkComp('post-container');

class Post extends Component {
  state: any;
  props: any;
  createMarkup(content) {
    return { __html: content };
  }
  componentDidMount() {
    http.get(this.props.path.concat('.html'), result => {
      this.setState({ content: result });
      document.querySelector('title').innerText = 'Parsing HTML tags with Regex | tiagolisalves';
    });
  }
  componentDidUpdate() {
    console.time('init');
    PR.prettyPrint();
    console.timeEnd('init');
  }
  render() {
    return <PostBody dangerouslySetInnerHTML={this.createMarkup(this.state.content)}></PostBody>;
  }
}

export { Post };
