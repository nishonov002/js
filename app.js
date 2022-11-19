
confirm("Assalomu alaykum Holding kompaniyammiz saytiga xush kelibsiz");
let ism = prompt("Iltimos ismingizni kiriting" );
console.log("Iltimos ismingizni kiriting:" +ism);
// alert(`sizning ismingiz ${ism} !`);
let Familiya = prompt("Iltimos Familiyangizni kiriting");
console.log("Iltimos Familiyangiz kiriting:" + Familiya);
// alert(`Sizning faminilangiz ${Familiya}`);
let yashash  = prompt("Iltimos yashash joyingizni kiriting");
console.log("Iltimos yashash joyingizni kiriting:" + yashash );
// alert(`siz  ${yashash}dansiz`);
let imkon = confirm(
  "Kompaniyamizga a'zo bolishni hohlaysizmi"
);
alert(imkon);
confirm(`Xurmatli ${Familiya} ${ism} Bizning Kompaniyamizga  a'zo bolganinggiz uchun sizni 1000$ pul mukofoti yutib oldingiz Pulni olish uchun qoshimcha malumot kiriting.`);
let karta = prompt("Iltimos Plastik kartangizni kiriting");
console.log("Iltimos Plastik kartangizni kiriting:" + karta);
let muddat = prompt("Iltimos Plastik kartangiz amal qilish muddatini kiriting");
console.log(
  "Iltimos Plastik kartangiz amal qilish muddatini kiriting:" + muddat
);

let shart = confirm("siz malumotlaringizdan foydalanishimizga ruhsat berasizmi");
alert(shart);
alert(
  ` Uhlading ${ism}  Ukam. !? Yana    ${yashash}likmish bu bacha `
);
