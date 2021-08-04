function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    if (book.borrows.some((element) => element.returned === false)) {
      acc++;
    }
    return acc;
  }, 0);
}

function _giveTopFive(array) {
  return array.slice(0, 5);
}

function getMostCommonGenres(books) {
  let result = [];
  const genres = books.map((element) => element.genre);
  for (let genre of genres) {
    !result.some((element) => element.name === genre)
      ? result.push({ name: genre, count: 1 })
      : result.map((element) => {
          if (element.name === genre) {
            element.count++;
          }
        });
  }
  return _giveTopFive(result.sort((a, b) => b.count - a.count));
}

function getMostPopularBooks(books) {
  result = [];
  books
    .sort((a, b) => b["borrows"].length - a["borrows"].length)
    .forEach((element) =>
      result.push({ name: element.title, count: element["borrows"].length })
    );
  return _giveTopFive(result);
}

function getMostPopularAuthors(books, authors) {
  topFive = [];
  books
    .sort((a, b) => b["borrows"].length - a["borrows"].length)
    .forEach((element) => {
      topFive.push({
        name: element.authorId,
        count: element["borrows"].length,
      });
    });
  let result = topFive;
  result.forEach((element) => {
    const newName = authors.find((author) => author.id === element.name);
    element.name = `${newName.name.first} ${newName.name.last}`;
  });
  return _giveTopFive(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
