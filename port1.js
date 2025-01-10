//shell command that allows access in the event that
//running scripts are disabled:
//Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser

export default {
    f1: () => { //function #1
        console.log('Hello');
     },
     f2: () => { //function #2
        console.log('World');
     },
}