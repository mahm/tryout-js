const readInput = require('../readInput');

const GUU = '0';
const CHO = '1';
const PAA = '2';
const PATTERNS = {
  [GUU]: 'グー',
  [CHO]: 'チョキ',
  [PAA]: 'パー'
};

function randomHand() {
  return `${Math.floor(Math.random() * 2)}`;
}

function isYourVictory(userHand, computerHand) {
  return (
    (userHand === GUU && computerHand === CHO) ||
    (userHand === CHO && computerHand === PAA) ||
    (userHand === PAA && computerHand === GUU)
  );
}

function isDraw(userHand, computerHand) {
  return userHand === computerHand;
}

(async () => {
  let userHand;
  let computerHand;
  let judgement = false;
  do {
    console.log('「じゃんけん・・・」');
    console.log('> 0.グー 1.チョキ 2.パー');
    do {
      userHand = await readInput('? ');
    } while (['0', '1', '2'].indexOf(userHand) < 0);
    computerHand = randomHand();
    console.log('「ぽい！」');
    console.log(`＊コンピューター：${PATTERNS[computerHand]}`);
    console.log(`＊あなた：${PATTERNS[userHand]}`);
    if (isYourVictory(userHand, computerHand)) {
      console.log('「あなたの勝ち！」');
      judgement = true;
    } else if (isDraw(userHand, computerHand)) {
      console.log('「アイコでしょ！」');
      judgement = false;
    } else {
      console.log('「あなたの負け！」');
      judgement = true;
    }
  } while (!judgement);
})();
