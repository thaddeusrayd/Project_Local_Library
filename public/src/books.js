function findAuthorById(authors, id) {
  return authors.find((element) => element.id === id);
}

function findBookById(books, id) {
  return books.find((element) => element.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let returned = books.filter((element) =>
    element["borrows"].every((element) => element.returned === true)
  );
  let borrowed = books.filter((element) =>
    element["borrows"].some((element) => element.returned === false)
  );
  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const borrowers = borrows.map(({ id, returned }) => {
    const account = accounts.find((account) => account.id === id);
    return {
      ...account,
      returned,
    };
  });
  return borrowers.sort((a, b) => a.company < b.company).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
