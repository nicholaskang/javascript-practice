let x;
let d = new Date();

x = d.toString();
x = d.toDateString();
x = d.valueOf();
x = d.getTime();
x = d.getDate();
x = d.getMonth() + 1;
x = d.getFullYear();
x = d.getDay();
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`

x = Intl.DateTimeFormat('en-US').format(d)
x = Intl.DateTimeFormat('en-GB').format(d)
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);
x = Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(d);

x = d.toLocaleDateString();
x = d.toLocaleString();
x = d.toLocaleString('default', {month: 'short'});
x = d.toLocaleString('default', {weekday: 'long'});

console.log(x)

