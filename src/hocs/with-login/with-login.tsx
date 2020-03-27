import * as React from 'react';
import {Subtract} from 'utility-types';

type InjectingProps = {
  userLogin: string;
  userPassword: string;
  onChange: (evt: React.ChangeEvent) => void;
}

interface State {
  userLogin: string;
  userPassword: string;
}

const withLogin = (Component) => {
  type InitialProps = React.ComponentProps<typeof Component>;
  type Props = Subtract<InitialProps, InjectingProps>;

  class WithLogin extends React.PureComponent<Props, State> {
    props: Props;
    state: State;

    constructor(props) {
      super(props);
      this.state = {
        userLogin: ``,
        userPassword: ``
      };
      this._handleChange = this._handleChange.bind(this);
    }

    componentDidUpdate({reviewsCount}) {
      if (reviewsCount < this.props.reviewsCount) {
        this.setState({
          userLogin: ``,
          userPassword: ``
        });
      }
    }

    _handleChange({currentTarget}) {
      switch (currentTarget.name) {
        case `email`:
          this.setState({
            userLogin: currentTarget.value
          });
          break;
        case `password`:
          this.setState({
            userPassword: currentTarget.value
          });
          break;
      }
    }

    render() {
      const {
        userLogin,
        userPassword
      } = this.state;

      return (
        <Component
          {...this.props}
          userLogin={userLogin}
          userPassword={userPassword}
          onChange={this._handleChange}
        />
      );
    }
  }

  return WithLogin;
};

export default withLogin;
