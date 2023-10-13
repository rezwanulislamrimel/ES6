const PrincesNur = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, c, ...rest] = PrincesNur;
console.log(a, b, c, rest); // 1

const RimelsEra = ['Sundrahobi', 'Tushvanser', 'Mirpur', 'mohammadpur', 'Uttara', 'Gazipur'];
const [Favourit, alltimebest, ...nearest] = RimelsEra;
console.log(Favourit, alltimebest, nearest);