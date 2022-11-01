'reach 0.1'

const Player = {
    getChallenge: Fun([], UInt),
    seeResult: Fun([UInt], Null),
}

export const main = Reach.App(() => {
    const Pat = Participant('Pat', { 
        ...Player
    })
    const Vanna = Participant('Vanna', {
        ...Player
    })
    init()

    Pat.only(() => {
        const ChallengePat = declassify(interact.getChallenge())
    })
    Pat.publish(ChallengePat)
    commit()

    Vanna.only(() => {
        const ChallengeVanna = declassify(interact.getChallenge())
    })
    Pat.publish(ChallengeVanna)
    commit()
})