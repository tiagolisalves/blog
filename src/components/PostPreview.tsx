import { h, Component } from 'preact';
import { mkComp } from '../core/utils';

const PostTitleContainer = mkComp('post-title-container');
const PostTitle = mkComp('post-title link');
const PostDate = mkComp('post-date');
const PostDateContainer = mkComp('post-date-container');
const PostSubTitle = mkComp('post-sub-title');
const ContinueLink = mkComp('continue-link');
const PostLink = mkComp('link');

class PostPreview extends Component {
  props: any;
  handleClick() {
    console.log('click');
    window.location.hash = '/' + this.props.post.path.replace('.adoc', '');
  }
  createMarkup(content) {
    return { __html: content };
  }
  render() {
    return (
      <div>
        <PostTitleContainer>
          <PostTitle onClick={this.handleClick.bind(this)}>{this.props.post.title}</PostTitle>
        </PostTitleContainer>
        <PostDateContainer>
          <PostDate>{this.props.post.date}</PostDate>
        </PostDateContainer>
        <PostSubTitle
          dangerouslySetInnerHTML={this.createMarkup(this.props.post.subtitle)}
        ></PostSubTitle>
        <ContinueLink>
          <PostLink onClick={this.handleClick.bind(this)}>continue...</PostLink>
        </ContinueLink>
      </div>
    );
  }
}
export { PostPreview, PostTitle };
