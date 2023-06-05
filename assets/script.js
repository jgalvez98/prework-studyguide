var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (topic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (topic === 'Git') {
    console.log("Let's study Git!");
  } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('oops try again!');
  }
}

console.log('topics i learned through prework:');
listTopics();
console.log('which topic should we study first?');
selectTopic();
