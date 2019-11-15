import { createReducer } from '../../app/common/util/reducerUtils';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';

const initialState = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2020-05-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Claude',
    hostPhotoURL: '/assets/user.png',
    attendees: [
      {
        id: 'a',
        name: 'Lisa',
        photoURL: '/assets/user.png'
      },
      {
        id: 'b',
        name: 'Chadd',
        photoURL: '/assets/user.png'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2020-03-27',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: '/assets/user.png',
    attendees: [
      {
        id: 'b',
        name: 'Lorenzo',
        photoURL: '/assets/user.png'
      },
      {
        id: 'a',
        name: 'Moriah',
        photoURL: '/assets/user.png'
      }
    ]
  }
];

const createEvent = (state, payload) => {
  return [...state, payload.event];
};

const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    payload.event
  ];
};

const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
