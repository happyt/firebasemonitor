import Firebase from 'firebase'
import eventStream from 'firebase-event-stream'
 
const ref = new Firebase('http://uselection-3482a.firebaseapp.com/')
const events = ['child_added']
 
const stream = eventStream(ref, { events })
  .on('data', ({ event, child }) => console.log('emitted ', event, child.val()))
 
ref.push({ foo: 1 })
ref.push({ foo: 2 })
 
// log emitted  child_added { foo: 1 } 
// log emitted  child_added { foo: 2 } 