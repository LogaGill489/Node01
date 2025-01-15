const a = [1,2,3];

const b = a.map(e => {
    return e*e;
});

console.log(b);

//node --inspect-brk debug.js
//inspects the file
//-brk breaks on the first line

//you can see your inspected files in chrome://inspect
//from there, you can inspect a file like normal