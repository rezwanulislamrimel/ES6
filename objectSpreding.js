const book = {
    name: 'Book',
    bookName: 'Beal Furabar age',
    price:40
}

const book2 = { ...book };
book2.shop =  'darazz' ;
console.log(book, book2);