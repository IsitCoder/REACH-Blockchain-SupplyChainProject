'reach 0.1'

const Player = {
    seePrice: Fun([], UInt),
    getDescription: Fun([], Bytes(1)),
}

export const main = Reach.App(() => {
    const Creator = Participant('Creator', { 
        ...Player
    })
    const Bidder = Participant('Bidder', {
        ...Player,
        payment: UInt,
    })
    const Buyer = Participant('Buyer', {
        ...Player
    })
    init()

    Bidder.only(() => {
        const price = declassify(interact.getChallenge())
    })
    Bidder.publish(price)
    commit()

    Buyer.only(() => {
        const payment = declassify(interact.payment)
        const description = declassify(interact.getChallenge())
    })
    Buyer.publish(description)
        .pay(payment)
    commit()
})