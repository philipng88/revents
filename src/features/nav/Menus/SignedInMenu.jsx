import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const SignedInMenu = ({ signOut }) => {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/default-user.png' />
      <Dropdown pointing='top left' text='Username'>
        <Dropdown.Menu>
          <Dropdown.Item text='Create Event' icon='plus' />
          <Dropdown.Item text='My Events' icon='calendar' />
          <Dropdown.Item text='My Network' icon='users' />
          <Dropdown.Item text='My Profile' icon='user' />
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