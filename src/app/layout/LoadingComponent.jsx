import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent = ({ inverted = true }) => {
  return (
    <Dimmer inverted={inverted} active={true}>
      <Loader size='massive' content='Loading...' />
    </Dimmer>
  );
};

export default LoadingComponent;
