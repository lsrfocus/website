//
// From https://github.com/FormidableLabs/nuka-carousel/blob/master/src/default-controls.js
// as of 0d1a8008bb20b4e19afeb3d797f798197ac6a355.
//
// Vendor file. See https://github.com/FormidableLabs/nuka-carousel/blob/master/LICENSE.
//

/* eslint-disable padded-blocks, prefer-rest-params, react/prop-types, react/no-multi-comp, react/jsx-no-bind */

import React from 'react';
import { Icon, IconButton } from 'material-ui';

export class PreviousButton extends React.Component {
  constructor() {
    super(...arguments);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.props.previousSlide();
  }
  render = () => {
    const disabled =
      (this.props.currentSlide === 0 && !this.props.wrapAround) ||
      this.props.slideCount === 0;
    return (
      <IconButton
        disabled={disabled}
        onClick={this.handleClick}
        aria-label="Previous testimonial"
      >
        <Icon>keyboard_arrow_left</Icon>
      </IconButton>
    );
  }
}

export class NextButton extends React.Component {
  constructor() {
    super(...arguments);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.props.nextSlide();
  }
  render = () => {
    const disabled =
      this.props.currentSlide + this.props.slidesToScroll >=
      this.props.slideCount && !this.props.wrapAround;
    return (
      <IconButton
        disabled={disabled}
        onClick={this.handleClick}
        aria-label="Next testimonial"
      >
        <Icon>keyboard_arrow_right</Icon>
      </IconButton>
    );
  }
}

export class PagingDots extends React.Component {
  getIndexes(count, inc) {
    const arr = [];
    for (let i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  }

  getListStyles() {
    return {
      position: 'relative',
      margin: 0,
      top: '4.8rem',
      padding: 0,
    };
  }

  getListItemStyles() {
    return {
      listStyleType: 'none',
      display: 'inline-block',
    };
  }

  getButtonStyles(active) {
    return {
      border: 0,
      background: 'transparent',
      color: '#444',
      cursor: 'pointer',
      padding: 10,
      outline: 0,
      fontSize: 24,
      opacity: active ? 1 : 0.4,
    };
  }

  render = () => {
    const indexes = this.getIndexes(
      this.props.slideCount,
      this.props.slidesToScroll,
    );
    return (
      <ul style={this.getListStyles()}>
        {indexes.map((index) => {
          return (
            <li style={this.getListItemStyles()} key={index}>
              <button
                style={this.getButtonStyles(this.props.currentSlide === index)}
                onClick={this.props.goToSlide.bind(null, index)}
              >
                &bull;
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
