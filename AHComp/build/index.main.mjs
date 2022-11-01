// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  
  
  const v59 = stdlib.protect(ctc0, interact.price, 'for Buyer\'s interact field price');
  
  const v62 = stdlib.protect(ctc0, await interact.product(), {
    at: './index.rsh:21:52:application',
    fs: ['at ./index.rsh:20:15:application call to [unknown function] (defined at: ./index.rsh:20:19:function exp)'],
    msg: 'product',
    who: 'Buyer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v62, v59],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v59, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v64, v65], secs: v67, time: v66, didSend: v31, from: v63 } = txn1;
      
      sim_r.txns.push({
        amt: v65,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v64, v65], secs: v67, time: v66, didSend: v31, from: v63 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v75, v76], secs: v78, time: v77, didSend: v42, from: v74 } = txn2;
  ;
  const v80 = v75 ? v74 : v63;
  ;
  return;
  
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v64, v65], secs: v67, time: v66, didSend: v31, from: v63 } = txn1;
  ;
  const v72 = stdlib.protect(ctc1, await interact.acceptPrice(v65), {
    at: './index.rsh:29:60:application',
    fs: ['at ./index.rsh:28:16:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)'],
    msg: 'acceptPrice',
    who: 'Seller'
    });
  const v73 = stdlib.protect(ctc0, await interact.productDetail(v64), {
    at: './index.rsh:30:64:application',
    fs: ['at ./index.rsh:28:16:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)'],
    msg: 'productDetail',
    who: 'Seller'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v63, v65, v72, v73],
    evt_cnt: 2,
    funcNum: 1,
    lct: v66,
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v75, v76], secs: v78, time: v77, didSend: v42, from: v74 } = txn2;
      
      ;
      const v80 = v75 ? v74 : v63;
      sim_r.txns.push({
        kind: 'from',
        to: v80,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v75, v76], secs: v78, time: v77, didSend: v42, from: v74 } = txn2;
  ;
  const v80 = v75 ? v74 : v63;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByADAAEIJgIAAQAiNQAxGEEBIihkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAVSMSRCM0ARJENARJIhJMNAISEUQpZDUDSTUFSVcAARc1/yNbNf6ABC+BS0k0/xZRBwhQNP4WULCxIrIBNAOBIFuyCCOyEDQDVwAgMQA0/02yB7NCAFBIgaCNBogAtiI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULA0/ogAhjEANP4WUClLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v75",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v75",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516107af3803806107af833981016040819052610022916101eb565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602080820151015161008e90341460076100f3565b60408051808201825260006020808301828152338085528683015183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100eb926002929091019061011c565b505050610280565b816101185760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012890610245565b90600052602060002090601f01602090048101928261014a5760008555610190565b82601f1061016357805160ff1916838001178555610190565b82800160010185558215610190579182015b82811115610190578251825591602001919060010190610175565b5061019c9291506101a0565b5090565b5b8082111561019c57600081556001016101a1565b604080519081016001600160401b03811182821017156101e557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101fe57600080fd5b6102066101b5565b835181526040601f198301121561021c57600080fd5b6102246101b5565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025957607f821691505b6020821081141561027a57634e487b7160e01b600052602260045260246000fd5b50919050565b6105208061028f6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d5780638814e1c314610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610358565b6100b8565b3480156100a157600080fd5b506100aa610240565b604051610064929190610370565b6100c860016000541460096102dd565b6100e2813515806100db57506001548235145b600a6102dd565b6000808055600280546100f4906103cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103cd565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610402565b90507f3f3156e9582d286c3b100da84693f7dc5578192cb51749bdd926961613e4b6ed33836040516101b8929190610489565b60405180910390a16101cc341560086102dd565b6101dc60408301602084016104c8565b6101e75780516101e9565b335b6001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015610225573d6000803e3d6000fd5b506000808055600181905561023c90600290610302565b5050565b600060606000546002808054610255906103cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610281906103cd565b80156102ce5780601f106102a3576101008083540402835291602001916102ce565b820191906000526020600020905b8154815290600101906020018083116102b157829003601f168201915b50505050509050915091509091565b8161023c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461030e906103cd565b6000825580601f1061031e575050565b601f01602090049060005260206000209081019061033c919061033f565b50565b5b808211156103545760008155600101610340565b5090565b60006060828403121561036a57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103a457858101830151858201606001528201610388565b818111156103b6576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103e157607f821691505b6020821081141561036a57634e487b7160e01b600052602260045260246000fd5b60006040828403121561041457600080fd5b6040516040810181811067ffffffffffffffff8211171561044557634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461045f57600080fd5b81526020928301519281019290925250919050565b8035801515811461048457600080fd5b919050565b6001600160a01b0383168152813560208083019190915260808201906104b0908401610474565b15156040830152604083013560608301529392505050565b6000602082840312156104da57600080fd5b6104e382610474565b939250505056fea2646970667358221220c47d265abe59713fa47ee7d33c0f5f7e6c99a1cb61adb24037f6e9e935d3ac8e64736f6c634300080c0033`,
  BytecodeLen: 1967,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:34:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller": Seller
  };
export const _APIs = {
  };
