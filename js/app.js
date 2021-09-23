const books = document.querySelectorAll('.book');

const bookPickup = [
  'Book is currently available for pickup. Opening hours 0900 - 1700hrs.',
  'Book is currently unavailable! We will notify you when the book is available.',
];

books.forEach((book) => {
  book.addEventListener('click', () => {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    };

    const number = getRandomInt(0, 2);
    alert(`${bookPickup[number]}`);

    if (number === 1) {
      return (
        prompt(
          'Please insert your email address to be notified when the book is available.'
        ) && alert('Thank You!')
      );
    }
  });
});
