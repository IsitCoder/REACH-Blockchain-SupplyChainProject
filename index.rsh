'reach 0.1';
'use strict';

const productDetail = Object({
  ProductID:UInt,
  ProductName:StringDyn,
  ManufacturerID:UInt,
});

const consumerDetail = Object({
  Product:productDetail,
  buyingDate:StringDyn,
  Quantity:UInt,
  BuyerID:Address,
})

const System = {
    transactionID: Fun([], UInt), //each transaction can have many product
}

export const main = Reach.App(() => {
    const Seller = Participant('Seller', {
        ...System,
        sellingProduct: productDetail, //can include many product
        sellingPrice: UInt,
        sellingQuantity: UInt,
    })
    const Buyer = Participant('Buyer', {
        ...System,
        buyingPrice: Fun([UInt], Null),
        buyingQuantity:UInt,
        buying:Fun([productDetail],consumerDetail),
    })
    init()

    Seller.only(() => {
        const sellproduct = declassify(interact.sellingProduct)
        const amount = declassify(interact.sellingPrice) 
        const sellQuantity = declassify(interact.sellingQuantity) 
    })
    Seller.publish(sellproduct, amount)
    commit()



    Buyer.only(() => {
        interact.buyingPrice(amount)
        const buyAmount = declassify(interact.buyingQuantity)
        buyingDetail= declassify(interact.buying(sellproduct))
    })
    Buyer.publish(productDetail)
      .pay(amount*buyAmount)
    transfer(amount*buyAmount).to(buyAmount>0 ?Seller:Buyer)
    commit();

    exit();
})
