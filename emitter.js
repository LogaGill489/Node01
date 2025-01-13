//EM
import EventEmitter from 'events';

const evEmitter = new EventEmitter();

evEmitter.on('change', () => {
    console.log('Something Changed!');
});

//emits a 'change' every second, which the evEmitter is listening to under the on function
setInterval(() => {
    evEmitter.emit('change');
}, 1000);