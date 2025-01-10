//shell command that allows access in the event that
//running scripts are disabled:
//Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser

//when installing packages, using the URL from a github will tell npm that you
//want that package directly from the Github repo, example:
//nongit -> npm i express
//github -> npm i expressjs/express
//https://github.com/expressjs/express

export default { 
    f1: () => { //function #1
        console.log('Hello');
     },
     f2: () => { //function #2
        console.log('World');
     },
}