import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const SignedInMenu = ({ signOut, profile, auth }) => {
  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src={profile.photoURL || '/assets/user.png'}
      />
      <Dropdown pointing='top left' text={profile.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to={'/createEvent'}
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My Events' icon='calendar' />
          <Dropdown.Item text='My Network' icon='users' />
          <Dropdown.Item
            as={Link}
            to={`/profile/${auth.uid}`}
            text='My Profile'
            icon='user'
          />
          <Dropdown.Item
            as={Link}
            to='/settings'
            text='Settings'
            icon='setting'
          />
          <Dropdown.Item
            onClick={signOut}
            text='Sign Out'
            icon='sign out alternate'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};
