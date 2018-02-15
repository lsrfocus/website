// @flow

import { Component } from 'react';
import { withRouter } from 'react-router-dom';

type Props = {
  location: any,
};

/**
 * Scroll to top when the route changes.
 *
 * See https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
 */
class ScrollToTop extends Component<Props> {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }

}

export default withRouter(ScrollToTop);
