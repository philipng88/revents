import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: 'Sat May 02 2020',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Claude',
    hostPhotoURL: '/assets/default-user.png',
    attendees: [
      {
        id: 'a',
        name: 'Lisa',
        photoURL: '/assets/default-user.png'
      },
      {
        id: 'b',
        name: 'Chadd',
        photoURL: '/assets/default-user.png'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: 'Sat May 09 2020',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: '/assets/default-user.png',
    attendees: [
      {
        id: 'b',
        name: 'Lorenzo',
        photoURL: '/assets/default-user.png'
      },
      {
        id: 'a',
        name: 'Moriah',
        photoURL: '/assets/default-user.png'
      }
    ]
  }
];

export default class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false
  };

  handleIsOpenToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/default-user.png';
    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false
    }));
  };

  render() {
    const { events, isOpen } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleIsOpenToggle}
            positive
            content='Create Event'
          />
          {isOpen && (
            <EventForm
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleIsOpenToggle}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
