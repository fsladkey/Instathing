import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends Component {

        componentWillMount () {
            this.checkAuth(!!this.props.currentUser.id);
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth(!!nextProps.currentUser.id);
        }

        checkAuth (isAuthenticated) {
            if (!isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                browserHistory.push({
                  pathname: '/',
                  query: { next: redirectAfterLogin },
                });
            }
        }

        render () {
            return (
                <div>
                    {!!this.props.currentUser.id ?
                      <Component {...this.props}/> :
                      null
                    }
                </div>
            );

        }
    }

    function mapStateToProps({ session }) {
        return { currentUser: session };
    }

    return connect(mapStateToProps)(AuthenticatedComponent);
}
