//
// From https://github.com/FormidableLabs/nuka-carousel/blob/master/src/decorators.js
// as of 609516deb87db6da97534ec09806155f70991d89.
//
// Vendor file. See https://github.com/FormidableLabs/nuka-carousel/blob/master/LICENSE.
//

/* eslint-disable padded-blocks, react/prop-types, react/sort-comp, react/no-multi-comp */

import React, { Component } from 'react';

const DefaultDecorators = [
  {
    component: class extends Component {
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround)}
            onClick={(e) => this.handleClick(e)}
          >
            {'<'}
          </button>
        );
      }
      handleClick(e) {
        e.preventDefault();
        this.props.previousSlide();
      }
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer',
        };
      }
    },
    position: 'CenterLeft',
  },
  {
    component: class extends Component {
      render() {
        return (
          <button
            style={this.getButtonStyles(
              this.props.currentSlide + this.props.slidesToScroll
              >= this.props.slideCount && !this.props.wrapAround,
            )}
            onClick={(e) => this.handleClick(e)}
          >
            {'>'}
          </button>
        );
      }
      handleClick(e) {
        e.preventDefault();
        this.props.nextSlide();
      }
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer',
        };
      }
    },
    position: 'CenterRight',
  },
  {
    component: class extends Component {
      render() {
        const self = this;
        const indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
        return (
          <ul style={self.getListStyles()}>
            {
              indexes.map((index) => {
                return (
                  <li style={self.getListItemStyles()} key={index}>
                    <button
                      style={self.getButtonStyles(self.props.currentSlide === index)}
                      onClick={() => self.props.goToSlide(index)}
                    >
                      &bull;
                    </button>
                  </li>
                );
              })
            }
          </ul>
        );
      }
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
          top: -10,
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
    },
    position: 'BottomCenter',
  },
];

export default DefaultDecorators;
