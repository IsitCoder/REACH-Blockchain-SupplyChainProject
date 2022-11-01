'reach 0.1'

const Player = {
    ...hasRandom,
    secret: UInt,
}

export const main = Reach.App(() => {
    const Carla = Participant('Carla', {
        ...Player,
    })
    const Eve = Participant('Eve', {
        ...Player,
    })

    Carla.only(() => {
        const _secret = interact.secret()
        const [_commitCarla, _saltCarla] = makeCommitment(interact, _secret)
        const commitCarla = declassify(_commitCarla)
    })
    Carla.publish(commitCarla)
    commit()

    unknowable(Eve, Carla(_secret, _saltCarla))
    Eve.only(() => {
        const secret = declassify(interact.secret())
    })
    Eve.publish(secret)
    commit()

    Carla.only(() => {
        const saltCarla = declassify(_saltCarla)
        const secret = declassify(_secret)
    })
    Carla.publish(saltCarla, secret)
    checkCommitment(commitCarla, saltCarla, secret)
})