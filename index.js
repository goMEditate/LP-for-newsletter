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
    title: 'Świetna!',
    text: 'Prosta, intuicyjna i pomocna aplikacja. Dodatkowo zachęca to, że w zależności od możliwości mogę zdecydować o krótszym czasie medytacji, co sprawia, że nie porzucam działania. Mam nadzieję, że z jej pomocą zbuduję nowy nawyk :)',
  },
  {
    id: 4,
    name: 'sylciom',
    date: '14/06/2022',
    title: 'Bardzo relaksująca aplikacja',
    text: 'Sam layout aplikacji jest bardzo stonowany, kolory spokojne, ciepłe, obsługa chyba najprostsza jak tylko można, ogólnie bardzo mało rozpraszaczy. Jest możliwość wyboru dźwięku w tle, głosu osoby prowadzącej i ogólnie rodzaju medytacji. Połączenie maksymalnej prostoty ze zwróceniem szczególnej uwagi na potrzeby i preferencje użytkownika ❤️',
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
