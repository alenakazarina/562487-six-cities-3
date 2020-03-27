import * as React from 'react';
import {Subtract} from 'utility-types';

type InjectingProps = {
  rating: number,
  text: string,
  onChange: (evt: React.ChangeEvent) => void;
};

interface State {
  rating: number,
  text: string
};

const withRating = (Component) => {
  type InitialProps = React.ComponentProps<typeof Component>;
  type Props = Subtract<InitialProps, InjectingProps>;

  class WithRating extends React.PureComponent<Props, State> {
    props: Props;
    state: State;

    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        text: ``
      };
      this._handleChange = this._handleChange.bind(this);
    }

    componentDidUpdate({reviewsCount}) {
      if (reviewsCount < this.props.reviewsCount) {
        this.setState({
          rating: 0,
          text: ``
        });
      }
    }

    _handleChange({currentTarget}) {
      switch (currentTarget.name) {
        case `rating`:
          this.setState({
            rating: parseInt(currentTarget.value, 10)
          });
          break;
        case `review`:
          this.setState({
            text: currentTarget.value
          });
          break;
      }
    }

    render() {
      const {
        rating,
        text
      } = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          text={text}
          onChange={this._handleChange}
        />
      );
    }
  }

  return WithRating;
};

export default withRating;
