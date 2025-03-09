let kitablar = [
  {
    isim: "Her Şeyi Düşünme",
    yazar: "Anne Bogel",
    fiyat: 25,
    raf: [1, 5],
  },
  {
    isim: "Hiçbir Karşılaşma Tesadüf Değildir",
    yazar: "Hakan Mengüç",
    fiyat: 56,
    raf: [2, 3],
  },
  {
    isim: "İnsan Neyle Yaşar",
    yazar: "Tolstoy",
    fiyat: 34,
    raf: [3, 4],
  },
  {
    isim: "Zafer Sızlanarak Kazanılmaz",
    yazar: "Haluk Tatar",
    fiyat: 45,
    raf: [4, 1],
  },
  {
    isim: "Şeker Portakalı",
    yazar: "José Mauro de Vasconcelos",
    fiyat: 22,
    raf: [5, 3],
  },
];

function createBookShelf(row, colum, symbol = "|---|") {
  let bookShelf = [];

  for (let i = 0; i < row; i++) {
    bookShelf.push([]);
    for (let k = 0; k < colum; k++) {
      bookShelf[i].push(symbol);
    }
  }

  return bookShelf;
}

function updateBookShelf(bookShelf, books) {
  for (let book of books) {
    bookShelf[book.raf[0] - 1][
      book.raf[1] - 1
    ] = `|${book.raf[0]}-${book.raf[1]}|`;
  }
  return bookShelf;
}

function searchBook(bookName) {
  let books = [];
  for (let kitab of kitablar) {
    if (kitab.isim.toLowerCase().includes(bookName)) {
      books.push(kitab);
    }
  }

  return books;
}

function showBookShelf(updatedBookShelf, books) {
  let result = "";
  for (let rowShelf of updatedBookShelf) {
    for (let columShelf of rowShelf) {
      result += columShelf;
    }
    result += "\n\n";
  }

  for (let book of books) {
    result += `----------------------------------------\nİsim: ${book.isim}\nYazar: ${book.yazar}\nFiyat: ${book.fiyat} TL\nRaf: ${book.raf[0]}-${book.raf[1]}\n`;
  }
  return result;
}

let bookShelf = createBookShelf(5, 5);
let bookName = prompt("Enter the book name:").toLowerCase();
let books = searchBook(bookName);
let updatedBookShelf = updateBookShelf(bookShelf, books);

console.log(showBookShelf(updatedBookShelf, books));
