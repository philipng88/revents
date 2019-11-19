import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { TextInput } from '../../../app/common/form/TextInput';
import { TextArea } from '../../../app/common/form/TextArea';
import { SelectInput } from '../../../app/common/form/SelectInput';

const interests = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' }
];

const AboutPage = ({ pristine, submitting, handleSubmit, updateProfile }) => {
  return (
    <Segment>
      <Header dividing size='large' content='About Me' />
      <Form onSubmit={handleSubmit(updateProfile)}>
        <Field name='about' component={TextArea} placeholder='About Me' />
        <Field
          name='interests'
          component={SelectInput}
          options={interests}
          value='interests'
          multiple={true}
          placeholder='Select your interests'
        />
        <Field
          width={8}
          name='occupation'
          type='text'
          component={TextInput}
          placeholder='Occupation'
        />
        <Button
          disabled={pristine || submitting}
          size='large'
          positive
          content='Update Profile'
        />
      </Form>
    </Segment>
  );
};

export default reduxForm({
  form: 'userProfile',
  enableReinitialize: true,
  destroyOnUnmount: false
})(AboutPage);
