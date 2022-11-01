'reach 0.1'

// game outcomde
const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3)
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3)

//game calculation
const winner = (handAlice, handBob) =>
  ((handAlice + (4-handBob)) % 3)

//all possible outcome
assert(winner(ROCK, PAPER) === B_WINS)
assert(winner(ROCK, SCISSORS) === A_WINS)
assert(winner(ROCK, ROCK) === DRAW)

//check game outcome
forall(UInt, handAlice =>
  forall(UInt, handBob =>
    assert(isOutcome(winner(handAlice, handBob)))))

forall(UInt, (hand) =>
  assert(winner(hand, hand) == DRAW)) 

//player object
const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
}

//game moves
export const main = Reach.App(() => {
  //player action
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  })
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  })
  init()

  //timeout
  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    })
  };

  //player interaction
  Alice.only(() => {
    const amount = declassify(interact.wager)
    const deadline = declassify(interact.deadline)
  })
  Alice.publish(amount, deadline)
    .pay(amount)
  commit()

  Bob.only(() => {
    interact.acceptWager(amount);
  })
  Bob.pay(amount)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))
  
  var outcome = DRAW
  invariant(balance() == 2 * amount && isOutcome(outcome))
  while(outcome == DRAW){
    commit()

    Alice.only(() => {
      const _handAlice = interact.getHand()
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice)
      const commitAlice = declassify(_commitAlice)
    })
    Alice.publish(commitAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout))
    commit();

    unknowable(Bob, Alice(_handAlice, _saltAlice));
    Bob.only(() => {
      const handBob = declassify(interact.getHand())
    })
    Bob.publish(handBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))
    commit()

    Alice.only(() => {
      const saltAlice = declassify(_saltAlice)
      const handAlice = declassify(_handAlice)
    })

    Alice.publish(saltAlice, handAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout))
    
    checkCommitment(commitAlice, saltAlice, handAlice);

    outcome = winner(handAlice, handBob)
    continue;
  }

  //game outcome
  assert(outcome == A_WINS || outcome == B_WINS)
  transfer(2 * amount).to(outcome == A_WINS ? Alice : Bob)
  commit()

  //game result
  each([Alice, Bob], () => {
    interact.seeOutcome(outcome)
  })
})