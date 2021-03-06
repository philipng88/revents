import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { createEvent, updateEvent, cancelToggle } from '../eventActions';
import { TextInput } from '../../../app/common/form/TextInput';
import { TextArea } from '../../../app/common/form/TextArea';
import { SelectInput } from '../../../app/common/form/SelectInput';
import { DateInput } from '../../../app/common/form/DateInput';
import { withFirestore } from 'react-redux-firebase';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (
    state.firestore.ordered.events &&
    state.firestore.ordered.events.length > 0
  ) {
    event =
      state.firestore.ordered.events.filter(event => event.id === eventId)[0] ||
      {};
  }

  return { initialValues: event, event, loading: state.async.loading };
};

const actions = { createEvent, updateEvent, cancelToggle };

const validate = combineValidators({
  title: isRequired({ message: 'Please give your event a name' }),
  category: isRequired('category'),
  description: composeValidators(
    isRequired('description'),
    hasLengthGreaterThan(4)({
      message: 'Description must be at least five characters'
    })
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
});

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' }
];

class EventForm extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`events/${match.params.id}`);
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`events/${match.params.id}`);
  }

  onFormSubmit = async values => {
    try {
      if (this.props.initialValues.id) {
        await this.props.updateEvent(values);
        this.props.history.push(`/events/${this.props.initialValues.id}`);
      } else {
        let createdEvent = await this.props.createEvent(values);
        this.props.history.push(`/events/${createdEvent.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine,
      event,
      cancelToggle,
      loading
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header color='teal' content='Event Details' />
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete='off'
            >
              <Field
                name='title'
                component={TextInput}
                placeholder='Give your event a name'
              />
              <Field
                name='category'
                component={SelectInput}
                options={category}
                placeholder='What is your event about?'
              />
              <Field
                name='description'
                component={TextArea}
                rows={3}
                placeholder='Tell us about your event'
              />
              <Header color='teal' content='Event Location Details' />
              <Field
                name='city'
                component={TextInput}
                placeholder='Event city'
              />
              <Field
                name='venue'
                component={TextInput}
                placeholder='Event venue'
              />
              <Field
                name='date'
                component={DateInput}
                dateFormat='dd LLL yyyy h:mm a'
                showTimeSelect
                timeFormat='HH:mm'
                placeholder='Event date'
              />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type='submit'
                loading={loading}
              >
                Submit
              </Button>
              <Button
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push('/events')
                }
                type='button'
                disabled={loading}
              >
                Cancel
              </Button>
              {event.id && (
                <Button
                  type='button'
                  color={event.cancelled ? 'green' : 'red'}
                  floated='right'
                  content={
                    event.cancelled ? 'Reactivate event' : 'Cancel event'
                  }
                  onClick={() => cancelToggle(!event.cancelled, event.id)}
                />
              )}
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(
  connect(
    mapState,
    actions
  )(
    reduxForm({ form: 'eventForm', validate, enableReinitialize: true })(
      EventForm
    )
  )
);
