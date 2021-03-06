import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { Urls } from 'conf/urls.js';

export class AuthContainer extends React.Component {
  render() {
    const {
      authenticated = false,
      children,
    } = this.props;
    
    if (authenticated) {
      return children;
    }

    return <Redirect to={Urls.SIGNIN} />;
  }
}

export function mapStateToProps({
  auth: {
    id = null,
  } = {},
}) {
  return {
    authenticated: !!id,
  };
}

const ConnectedAuthContainer = withRouter(
  connect(mapStateToProps)(AuthContainer)
);

/**
 * HOC that ensures the user is authenticated before rendering the component
 */
export default function requireAuth(WrappedComponent) {
  return (props) => (
    <ConnectedAuthContainer>
      <WrappedComponent {...props} />
    </ConnectedAuthContainer>
  );
}
