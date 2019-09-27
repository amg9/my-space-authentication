import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import { AuthConsumer, } from '../providers/AuthProvider';

export const DeleteAccount = (props) => (
  <>
    <Header>Are you sure you want to delete your account?</Header>
    <Button onClick={() => props.auth.deleteAccount(props.history)}>Delete Account</Button>
  </>
);

const ConnectedDeleteAccount = (props) => (
  <AuthConsumer>
    { auth => ( 
      <DeleteAccount {...props} auth={auth} /> 
    )}
  </AuthConsumer>
);

export default ConnectedDeleteAccount;