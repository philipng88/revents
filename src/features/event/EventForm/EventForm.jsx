import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

export default class EventForm extends Component {
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.createEvent(this.state);
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autocomplete='off'>
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
          <Button onClick={cancelFormOpen} type='button'>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
