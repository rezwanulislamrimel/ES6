const book = {
    name: 'Book',
    bookName: 'Beal Furabar age',
    price:40
}



// const { name,price,...rest } = book;
// console.log(name, price, rest);
const { ...rest2 } = book;
console.log(rest2);