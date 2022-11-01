'reach 0.1'

const System = {
    transactionID: Fun([], UInt),
}

export const main = Reach.App(() => {
    const Buyer = Participant('Buyer', {
        ...System,
        product: Fun([], UInt), 
        price: UInt,
    })
    const Seller = Participant('Seller', {
        ...System,
        acceptPrice: Fun([UInt], Bool),
        productDetail: Fun([UInt], UInt),
    })
    init()

    Buyer.only(() => {
        const product = declassify(interact.product())
        const amount = declassify(interact.price) 
    })
    Buyer.publish(product, amount)
        .pay(amount)
    commit()

    Seller.only(() => {
        const transaction = declassify(interact.acceptPrice(amount))
        const productDetail = declassify(interact.productDetail(product))
    })
    Seller.publish(transaction, productDetail)
    transfer(amount).to(transaction == true ? Seller : Buyer)
    commit()

    //create transaction for Buyer and Seller to see
})