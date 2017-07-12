import React, {Component} from 'react';

export class Link extends Component {
  handleClick = evt => {
    evt.preventDefault();
    history.pushState(null, '', this.props.to)
  };

  render() {
    return (
      <a
        href='#'
        onClick={this.handleClick}
      >
        {this.props.children}
        <style jsx>{`
         a{
          padding-left: 3px;
          padding-right: 3px;
          color: orange;
          }
        `}</style>
      </a>
    )
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired
};