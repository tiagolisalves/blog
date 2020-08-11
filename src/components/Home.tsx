import { h, Component } from 'preact';
import { setPostsStorage, getPostsStorage } from '../core/post-storage';
import { PostPreview } from './PostPreview';
import { mkComp } from '../core/utils';
import { Post } from './Post';

const PostContainer = mkComp('post-container');

class Home extends Component {
  state: any;
  componentDidMount() {
    document.querySelector('title').innerText = 'Software Development Blog | tiagolisalves';
    setPostsStorage();
    this.setState({ posts: getPostsStorage() });
  }
  render() {
    console.log(this.state.posts);
    return (
      <div>
        {(this.state.posts || []).map(post => (
          <PostContainer>
            <PostPreview post={post}></PostPreview>
          </PostContainer>
        ))}
      </div>
    );
  }
}

export { Home };
