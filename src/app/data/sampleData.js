const sampleData = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2020-05-27T19:00:00',
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
    date: '2020-03-27T18:00:00',
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

export default sampleData;
