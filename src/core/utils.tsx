import { h, render } from 'preact';

const mkComp = className => props => (
  <div
    className={className}
    onClick={props.onClick}
    dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
  >
    {props.children}
  </div>
);

export { mkComp };
