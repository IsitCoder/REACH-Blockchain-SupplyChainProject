'reach 0.1'

const Player = {
    ...hasRandom,
    //transactionID: Fun([], UInt), //each transaction can have many product
}

export const main = Reach.App(() => {
    const Buyer = Participant('Buyer', {
        product: Fun([], UInt), //can include many product
        price: UInt,
    })
    const Seller = Participant('Seller', {
        acceptPrice: Fun([UInt], Null),
        productDetail: Fun([UInt], UInt),
    })
    init()

    Buyer.only(() => {
        const product = declassify(interact.product)
        const amount = declassify(interact.price) 
    })
    Buyer.publish(product, amount)
        .pay(amount)
    commit()

    Seller.only(() => {
        interact.acceptPrice(amount)
        const productDetail = interact.productDetail(product)
    })
    Seller.publish(productDetail)
    transfer(amount).to(Seller)
    commit()
})