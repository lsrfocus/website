// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';
import Carousel from 'nuka-carousel';

import decorators from './vendor/controls';
import './styles.css';

const testimonials = [
  {
    quote: 'Kevin is an anti-entropy machine. He solves problems creatively, with intelligence and ease. A special type of person: Kevin is collaborative, patient, and fiercely productive.',
    attribution: 'Oscar Fossum, WeCount',
    date: 'December 2017',
  },
  {
    quote: 'Kevin is meticulous in his thinking when solving difficult problems. I was impressed with the clarity of thought he exhibited. Kevin is really process oriented and has shown great leadership skills.',
    attribution: 'Karnesh Mehra, Yahoo',
    date: 'June 2016',
  },
  {
    quote: 'Kevin was instrumental in establishing our project management systems, deciding on the best languages and software to use, and tactfully engaging with volunteer teammates to complete tasks.',
    attribution: 'Oscar Fossum, WeCount',
    date: 'December 2017',
  },
  {
    quote: 'Kevin was concerned with not only the business operations of the company but also the social and ethical aspects. I would love to work with him in the future.',
    attribution: 'Torehan Sharman, Cribspot',
    date: 'January 2018',
  },
];

type Props = {
};

class Testimonials extends Component<Props> {

  render() {
    return (
      <div className="Testimonials page">
        <div className="title">Testimonials</div>
        <Carousel
          wrapAround
          decorators={decorators}
        >
          {testimonials.map((testimonial, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="section" key={index}>
              <div className="quote">{`"${testimonial.quote}"`}</div>
              <div className="attribution">{testimonial.attribution}</div>
              <div className="date">{testimonial.date}</div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

}

const styles = () => ({
});

export default R.compose(
  withStyles(styles),
)(Testimonials);
