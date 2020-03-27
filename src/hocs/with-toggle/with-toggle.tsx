import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectingProps {
  isActive: boolean;
  onToggleClick: () => void;
};

type State = {
  isActive: boolean
};

const withToggle = (Component) => {
  type InitialProps = React.ComponentProps<typeof Component>;
  type Props = Subtract<InitialProps, InjectingProps>;

  class WithToggle extends React.PureComponent<Props, State> {
    props: Props;
    state: State;

    constructor(props) {
      super(props);
      this.state = {
        isActive: false
      };
      this._handleToggleClick = this._handleToggleClick.bind(this);
    }

    _handleToggleClick() {
      this.setState({
        isActive: !this.state.isActive
      });
    }

    render() {
      const {isActive} = this.state;
      return (
        <Component
          {...this.props}
          isActive={isActive}
          onToggleClick={this._handleToggleClick}
        />
      );
    }
  }

  return WithToggle;
};

export default withToggle;
