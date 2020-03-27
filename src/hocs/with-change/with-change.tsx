import * as React from 'react';
import {Subtract} from 'utility-types';

type Ref = React.RefObject<HTMLInputElement | HTMLTextAreaElement>;

interface InjectingProps {
  value: string;
  onChange: (evt: React.ChangeEvent) => void;
  inputRef: Ref;
};

interface State {
  value: string;
};

const withChange = (Component) => {
  type InitialProps = React.ComponentProps<typeof Component>;
  type Props = Subtract<InitialProps, InjectingProps>;

  class WithChange extends React.PureComponent<Props, State> {
    props: InjectingProps;
    state: State;

    constructor(props) {
      super(props);
      this.state = {
        value: ``
      };

      this._handleChange = this._handleChange.bind(this);
    }

    _handleChange({currentTarget}) {
      this.setState({
        value: currentTarget.value
      });
    }

    render() {
      const {value} = this.state;

      return (
        <Component
          {...this.props}
          value={value}
          onChange={this._handleChange}
        />
      );
    }
  }

  return React.forwardRef((props: InitialProps, ref: Ref) => {
    return <WithChange {...props} inputRef={ref} />;
  });
};

export default withChange;
