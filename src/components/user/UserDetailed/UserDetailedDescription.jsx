import React from 'react';
import { Grid, Header, Icon, Item, List, Segment } from 'semantic-ui-react';
import format from 'date-fns/format';

const UserDetailedDescription = ({ profile }) => {
  let createdAt;
  if (profile.createdAt) {
    createdAt = format(profile.createdAt.toDate(), 'd MMM yyy');
  }
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon='smile' content='About Me' />
            <p>
              Member Since: <strong>{createdAt}</strong>
            </p>
            <p>{profile.about}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon='heart outline' content='Interests' />
            {profile.interests ? (
              <List>
                {profile.interests &&
                  profile.interests.map((interest, index) => (
                    <Item key={index}>
                      <Icon name='heart' color='red' />
                      <Item.Content>{interest}</Item.Content>
                    </Item>
                  ))}
              </List>
            ) : (
              ''
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
