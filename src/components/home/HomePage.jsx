import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Container, Header, Image, Button } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button as={Link} to='/events' size='huge' inverted>
          Get started
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
