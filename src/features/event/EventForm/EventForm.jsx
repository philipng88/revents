import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { createEvent, updateEvent } from '../eventActions';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return { event };
};

const actions = { createEvent, updateEvent };

class EventForm extends Component {
  state = { ...this.props.event };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      };
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <Form.Field>
            <label>Event Title</label>
            <input
              type='text'
              name='title'
              onChange={this.handleInputChange}
              value={title}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              type='date'
              name='date'
              onChange={this.handleInputChange}
              value={date}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              type='text'
              name='city'
              onChange={this.handleInputChange}
              value={city}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              type='text'
              name='venue'
              onChange={this.handleInputChange}
              value={venue}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              type='text'
              name='hostedBy'
              onChange={this.handleInputChange}
              value={hostedBy}
              required
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type='button'>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(mapState, actions)(EventForm);
