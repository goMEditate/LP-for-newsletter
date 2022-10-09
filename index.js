const reviewsData = [
  {
    id: 1,
    name: 'sylwia838833873',
    date: '28/07/2022',
    title: 'Off the chain',
    text: 'Simple, intuitive, really easy - those 3 words are the essence of Meditate App. I love the fact that you have a chance to select time, background music and teacher’s voice. There is no needless options, only those which are essential. I’m an enormous fan already. Thank you guys for creating it!',
  },
  {
    id: 2,
    name: 'Anjacyk',
    date: '17/06/2022',
    title: 'Simplicity!',
    text: 'Probably the best feature is customizable length of each meditation. I also love various background sounds, especially waves and wind chimes 😌 Best app for lazy and beginner meditators, although imo you need some knowledge about what is meditation before you start.',
  },
  {
    id: 3,
    name: 'początkująca_Magda',
    date: '03/07/2022',
    title: 'Great!',
    text: 'Simple, intuitive and helpful app. What’s more encouraging is that I can adjust the time of my meditation depending on how I feel that day, so I don’t give up right away. I hope it will help me build a new habit :)',
  },
  {
    id: 4,
    name: 'sylciom',
    date: '14/06/2022',
    title: 'A very relaxing app',
    text: 'The app’s layout and colors are very calm, the interface is probably as simple as it gets, overall there’s very few distractions. You can choose the background sound, teacher’s voice and the type of meditation. It’s a combination of a maximum simplicity and special attention to the users’ needs and preferences ❤️',
  },
  {
    id: 5,
    name: 'Mjukai',
    date: '15/06/2022',
    title: '<3',
    text: 'Wow! So intuitive, simple and aesthetic! Hopefully this one will help me provide regularity and consistency to my practice, thank you!!',
  },
  {
    id: 6,
    name: 'Patryk P',
    date: '14/06/2022',
    title: 'Tailor made experience',
    text: 'My favorite tool for assisted meditation. Thanks to easy do use building blocks and great voice work this app helps me daily. Great tool to focus, unwind and relax. Highly recommend!',
  },
];

const createReviews = () => {
  const template = document.querySelector('.review-template');
  const container = document.querySelector('.reviews-list ul');

  reviewsData.forEach(review => {
    const clone = template.content.cloneNode(true);

    const reviewHeader = clone.querySelector('.review-header');
    reviewHeader.textContent = `${review.name}, ${review.date}`;

    const reviewTitle = clone.querySelector('.review-title');
    reviewTitle.textContent = review.title;

    const reviewText = clone.querySelector('.review-text');
    reviewText.textContent = review.text;

    container.appendChild(clone);
  });
};

createReviews();
new ShowMore('.review-text', {
  config: {
    type: 'text',
    limit: 240,
    more: 'more',
    less: 'less',
  },
});
