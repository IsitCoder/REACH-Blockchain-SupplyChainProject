'reach 0.1';
'use strict';

const [ isRole, Supplier_role, Manufacture_role,Consumer_role] = makeEnum(3);

const Material = Object({
  Material:StringDyn,
  Quantity:UInt,
  ManufacturerID:Address,
  ManufacturerName:StringDyn,
  ExpireTime: UInt,
  Wager:UInt,
});

const Product = Object({
  ProductCode: UInt,
  ProductName: StringDyn,
  Material:Material,
  RegisterTime:StringDyn,
  SupplyID: Address,
  ManufacturerID:Address,
});

const Consumer = Object({
  name: Bytes(128),
  quantity:UInt,
  deadline: UInt,
  product: Product,
  admin: Address,
});


const Role = {
  ...hasRandom,
  RoleRegister: Fun([],Null),
  Login:Fun([Address,UInt],Null),
  getContract:Fun([],Contract)
}


export const main = Reach.App(() => {
  const Supplier = Participant('Supplier', {
    materials:Material,
    numUpload:UInt,
  });
  const Manufacturer = Participant('Manufacturer', {
    ...Role,
    SeeMaterial:Fun([],Material),
    ProductRegister: Fun([], Product),
  });
  
  init();

  

  Supplier.only(()=>{

    const material = declassify(interact.materials);
  });

  Supplier.publish(material)
  const m = new Map(Material,time);
  m[this] = material;
  
  commit();

 
  Manufacturer.publish();
  

  

  

  // check(isNone(Roles[this]), "already registered");
  // const Mat = new Map(Contract,Material,Product);
  // const Pro = new Map(Contract,Product);


  // const [ done, num_supplier ] =
  //   parallelReduce([ false, 0 ])
  //   .invariant( true )
  //   .while( true )
  //   .api_(Supplier.RoleRegister, () => {
  //     check(isNone(Roles[this]), "already registered");
  //     return [ 0, (ret) => {
  //       Roles[this] = 0;
  //       ret(null);
  //       return [ false, num_supplier ];
  //     } ];
  //   })
    // .api_(Supplier.MaterialRegister, () => {
    //   check(this == Supplier,"not the Supplier");
    //   return [ 0, (ret) => {
        
    //     ret(null);
    //     return [ false, num_supplier + 1 ];
    //   } ];
    // })
    // .api_(Manufacturer.RoleRegister, () => {
    //   check(isNone(Roles[this]), "already registered");
    //   return [ 0, (ret) => {
    //     Roles[this] = 1;
    //     ret(null);
    //     return [ false, num_supplier];
    //   } ];
    // })
    // .api_(Manufacturer.ProductRegister, () => {
    //   check(this == Manufacturer, "not the manufacturer");
    //   const p = declassify(interact.MaterialRegister)
    //   return [ 0, (ret) => {
    //    ret(null);
    //     return [true, num_supplier - 1 ];
    //   } ];




    // });


  commit();

  exit();
});
