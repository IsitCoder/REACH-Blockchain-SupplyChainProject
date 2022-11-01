'reach 0.1'

const Player = {
    ...hasRandom,
    callLog: Fun([], UInt),
    informTimeout: Fun([], NULL),
}

export const main = Reach.App(() => {
    const Eve = Participant('Eve', {
        ...Player,
        deadline: UInt,
    })
    const Alice = Participant('Alice', {
        ...Player,
    })

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        })
    }

    Eve.only(() => {
        const _callLog = interact.callLog()
        const [_commitEve, _saltEve] = makeCommitment(interact, _callLog)
        const commitEve = declassify(_commitEve)
        const deadline = declassify(interact.deadline)
    })
    Eve.publish(commitEve)
    commit()

    unknowable(Alice, Eve(_secret, _saltEve))
    Alice.only(() => {
        const callLog = declassify(interact.callLog())
    })
    Alice.publish(secret)
    commit()

    Eve.only(() => {
        const saltEve = declassify(_saltEve)
        const callLog = declassify(_callLog)
    })
    Eve.publish(saltEve, callLog)
        .timeout(relativeTime(deadline), () => cloaseTo(Bob, informTimeout))
    checkCommitment(commitEve, saltEve, callLog)
})