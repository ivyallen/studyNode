setTimeout(function () {
 console.log('I execute first.');
 setTimeout(function () {
  console.log('I execute next.');
  setTimeout(function () {
   console.log('I execute last.');

  },100);

 },5000);
},10000);
setTimeout(function () {
  console.log('2th')

},70000);
setTimeout(function () {
  console.log('3th')
},20);