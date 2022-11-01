'reach 0.1'

const [ isRead, GOOD, BAD] = makeEnum(2)
const [ isOutcome, ACCEPT, REJECT] = makeEnum(2)
const [ isFortune, SUCCESS, FAILURE] = makeEnum(2)

const fortune = (readBob, outcomeAlice) =>
    (readBob + outcomeAlice == 0 ? SUCCESS : FAILURE)

assert(fortune(GOOD, ACCEPT) === SUCCESS)
assert(fortune(GOOD, REJECT) === FAILURE)

forall(UInt, readBob =>
    forall(UInt, outcomeAlice =>
        assert(isFortune(fortune(readBob, outcomeAlice)))))

const Player = {
    informTimeout: Fun([], Null),
}

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        outcome: Fun([UInt], UInt),
        wager: UInt,
        deadline: UInt,
    })
    const Bob = Participant('Bob', {
        ...Player,
        read: Fun([], UInt),
        acceptWager: Fun([UInt], Null),
    })
    init()

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        })
    }

    Alice.only(() => {
        const amount = declassify(interact.wager)
        const deadline = declassify(interact.deadline)
    })
    Alice.publish(amount, deadline)
        .pay(amount)
    commit()
    
    Bob.only(() => {
        const paymentAgree = declassify(interact.acceptWager(amount))
    })
    Bob.publish(paymentAgree)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))
    
    var outcome = FAILURE
    invariant(balance() == amount && isOutcome(outcome))
    while(outcome == FAILURE) {
        commit()

        Bob.only(() => {
            const readBob = declassify(interact.read())
        })
        Bob.publish(readBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))
        commit()

        Alice.only(() => {
            const outcomeAlice = declassify(interact.outcome(readBob))
        })
        Alice.publish(outcomeAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout))

        outcome = fortune(readBob, outcomeAlice)
        continue;
    }

    assert(outcome == SUCCESS)
    transfer(amount).to(Bob)
    commit()
})