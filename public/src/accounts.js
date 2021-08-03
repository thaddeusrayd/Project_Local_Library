function findAccountById(accounts, id) {
  return accounts.find((element) => element.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  const result = books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) {
        count++;
      }
    });
  });
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  books.forEach((book) => {
    let borrowsArray = book.borrows;
    if (
      borrowsArray.find(
        (borrow) => borrow.id === account.id && borrow.returned === false
      )
    ) {
      result.push(book);
    }
  });
  result.forEach((book) => {
    let author = authors.find((person) => person.id === book.authorId);
    book["author"] = author;
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
