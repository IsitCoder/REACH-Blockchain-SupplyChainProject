// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

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
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v222 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v223 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v223, v222],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v223, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v227, v228], secs: v230, time: v229, didSend: v47, from: v226 } = txn1;
      
      sim_r.txns.push({
        amt: v227,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v239 = stdlib.safeAdd(v229, v228);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v227, v228], secs: v230, time: v229, didSend: v47, from: v226 } = txn1;
  ;
  const v239 = stdlib.safeAdd(v229, v228);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: ['time', v239],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v226, v227, v228, v239],
      evt_cnt: 0,
      funcNum: 2,
      lct: v229,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v343, time: v342, didSend: v180, from: v341 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v226,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v343, time: v342, didSend: v180, from: v341 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:37:35:application',
      fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:53:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v244], secs: v246, time: v245, didSend: v55, from: v243 } = txn2;
    ;
    let v247 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v248 = v245;
    let v255 = v227;
    
    let txn3 = txn2;
    while (await (async () => {
      const v262 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v262;})()) {
      const v269 = stdlib.safeAdd(v248, v228);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: ['time', v269],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v226, v227, v228, v243, v255, v269],
          evt_cnt: 0,
          funcNum: 5,
          lct: v248,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v318, time: v317, didSend: v144, from: v316 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v226,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v318, time: v317, didSend: v144, from: v316 } = txn5;
        ;
        const v319 = stdlib.addressEq(v226, v316);
        const v320 = stdlib.addressEq(v243, v316);
        const v321 = v319 ? true : v320;
        stdlib.assert(v321, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:64:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:37:35:application',
          fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:64:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v275], secs: v277, time: v276, didSend: v76, from: v274 } = txn4;
        ;
        const v278 = stdlib.addressEq(v243, v274);
        stdlib.assert(v278, {
          at: './index.rsh:63:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v285 = stdlib.safeAdd(v276, v228);
        const v289 = stdlib.protect(ctc0, await interact.outcome(v275), {
          at: './index.rsh:68:61:application',
          fs: ['at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
          msg: 'outcome',
          who: 'Alice'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v226, v227, v228, v243, v255, v275, v285, v289],
          evt_cnt: 1,
          funcNum: 6,
          lct: v276,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:70:15:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v291], secs: v293, time: v292, didSend: v86, from: v290 } = txn5;
            
            ;
            const v295 = stdlib.safeAdd(v275, v291);
            const v296 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:8:32:decimal', stdlib.UInt_max, '0'));
            const v297 = v296 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const cv247 = v297;
            const cv248 = v292;
            const cv255 = v255;
            
            await (async () => {
              const v247 = cv247;
              const v248 = cv248;
              const v255 = cv255;
              
              if (await (async () => {
                const v262 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v262;})()) {
                const v269 = stdlib.safeAdd(v248, v228);
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v243,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v285],
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v226, v227, v228, v243, v255, v275, v285],
            evt_cnt: 0,
            funcNum: 7,
            lct: v276,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v300, time: v299, didSend: v110, from: v298 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v243,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v300, time: v299, didSend: v110, from: v298 } = txn6;
          ;
          const v301 = stdlib.addressEq(v226, v298);
          const v302 = stdlib.addressEq(v243, v298);
          const v303 = v301 ? true : v302;
          stdlib.assert(v303, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:71:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:37:35:application',
            fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:71:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v291], secs: v293, time: v292, didSend: v86, from: v290 } = txn5;
          ;
          const v294 = stdlib.addressEq(v226, v290);
          stdlib.assert(v294, {
            at: './index.rsh:70:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v295 = stdlib.safeAdd(v275, v291);
          const v296 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:8:32:decimal', stdlib.UInt_max, '0'));
          const v297 = v296 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const cv247 = v297;
          const cv248 = v292;
          const cv255 = v255;
          
          v247 = cv247;
          v248 = cv248;
          v255 = cv255;
          
          txn3 = txn5;
          continue;}
        
        }
      
      }
    ;
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v227, v228], secs: v230, time: v229, didSend: v47, from: v226 } = txn1;
  ;
  const v239 = stdlib.safeAdd(v229, v228);
  stdlib.protect(ctc1, await interact.acceptWager(v227), {
    at: './index.rsh:50:61:application',
    fs: ['at ./index.rsh:49:13:application call to [unknown function] (defined at: ./index.rsh:49:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v226, v227, v228, v239, null],
    evt_cnt: 1,
    funcNum: 1,
    lct: v229,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v244], secs: v246, time: v245, didSend: v55, from: v243 } = txn2;
      
      ;
      const v247 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v248 = v245;
      const v255 = v227;
      
      if (await (async () => {
        const v262 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v262;})()) {
        const v269 = stdlib.safeAdd(v248, v228);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v243,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v239],
    tys: [ctc2, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v226, v227, v228, v239],
      evt_cnt: 0,
      funcNum: 2,
      lct: v229,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v343, time: v342, didSend: v180, from: v341 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v226,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v343, time: v342, didSend: v180, from: v341 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:37:35:application',
      fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:53:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v244], secs: v246, time: v245, didSend: v55, from: v243 } = txn2;
    ;
    let v247 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v248 = v245;
    let v255 = v227;
    
    let txn3 = txn2;
    while (await (async () => {
      const v262 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v262;})()) {
      const v269 = stdlib.safeAdd(v248, v228);
      const v273 = stdlib.protect(ctc0, await interact.read(), {
        at: './index.rsh:61:53:application',
        fs: ['at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:21:function exp)'],
        msg: 'read',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v226, v227, v228, v243, v255, v269, v273],
        evt_cnt: 1,
        funcNum: 4,
        lct: v248,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:63:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v275], secs: v277, time: v276, didSend: v76, from: v274 } = txn4;
          
          ;
          const v285 = stdlib.safeAdd(v276, v228);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v269],
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v226, v227, v228, v243, v255, v269],
          evt_cnt: 0,
          funcNum: 5,
          lct: v248,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v318, time: v317, didSend: v144, from: v316 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v226,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v318, time: v317, didSend: v144, from: v316 } = txn5;
        ;
        const v319 = stdlib.addressEq(v226, v316);
        const v320 = stdlib.addressEq(v243, v316);
        const v321 = v319 ? true : v320;
        stdlib.assert(v321, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:64:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:37:35:application',
          fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:64:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v275], secs: v277, time: v276, didSend: v76, from: v274 } = txn4;
        ;
        const v278 = stdlib.addressEq(v243, v274);
        stdlib.assert(v278, {
          at: './index.rsh:63:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v285 = stdlib.safeAdd(v276, v228);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v285],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v226, v227, v228, v243, v255, v275, v285],
            evt_cnt: 0,
            funcNum: 7,
            lct: v276,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v300, time: v299, didSend: v110, from: v298 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v243,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v300, time: v299, didSend: v110, from: v298 } = txn6;
          ;
          const v301 = stdlib.addressEq(v226, v298);
          const v302 = stdlib.addressEq(v243, v298);
          const v303 = v301 ? true : v302;
          stdlib.assert(v303, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:71:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:37:35:application',
            fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:71:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v291], secs: v293, time: v292, didSend: v86, from: v290 } = txn5;
          ;
          const v294 = stdlib.addressEq(v226, v290);
          stdlib.assert(v294, {
            at: './index.rsh:70:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v295 = stdlib.safeAdd(v275, v291);
          const v296 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:8:32:decimal', stdlib.UInt_max, '0'));
          const v297 = v296 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const cv247 = v297;
          const cv248 = v292;
          const cv255 = v255;
          
          v247 = cv247;
          v248 = cv248;
          v255 = cv255;
          
          txn3 = txn5;
          continue;}
        
        }
      
      }
    ;
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAMAAEHBVAgKFgCCGAwJgIBAAAiNQAxGEEDZylkSSJbNQEhCVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQAGcSYEGDEAAu0kkDEAAUiQSRCQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATiG7OpsDIGNAMhClsPRDQDVwAgMQASNP8xABIRRLEisgE0AyEEW7III7IQNP+yB7NCAopIJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQUXNf6ABHDt73o0/hZQsDIGNAMhClsMRDT/MQASRDT/NAMhBVs0AyEGWzQDVzAgIyI0AyEHWzT+CCISTTIGNAMhBFtCAdFJJQxAAFBIJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABMyZklywMgY0AyEHWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQRbsggjshA0/7IHs0IB0UglNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+IQZbNf1XMCA1/CEEWzX7STUFFzX6gAT5i694NPoWULAyBjQDIQdbDEQ0/DEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUChLAVcAaGdIJDUBMgY1AkIBaEkjDEAAkUkhCAxAAEEhCBJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyELWw9EsSKyATQDIQVbsggjshA0A1cAILIHs0IA/0gjNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/0k1BTX+gASSo1CCNP5QsDIGNAMhC1sMRDQDVwAgNP80AyEGWzEAIzIGNP9CAGBIgaCNBogBGyI0ARJENARJIhJMNAISEURJNQVJIls1/yEJWzX+gASs0R/DNP8WUDT+FlCwNP+IAOoyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAHE1/zX+Nf01/DX7Nfo1+TT9IxJBAC40/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0glNQEyBjUCQgAusSKyATT6sggjshA0/LIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEIMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 104,
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
                "name": "v227",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v228",
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
                "name": "v227",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v228",
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
                "name": "v244",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "internalType": "uint256",
                "name": "v291",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                "name": "v244",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
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
                "internalType": "uint256",
                "name": "v291",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200164c3803806200164c8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6112cf806200037d6000396000f3fe6080604052600436106100845760003560e01c8063980b6eac11610056578063980b6eac146100ec5780639a3e3912146100ff578063a209ad4e14610112578063ab53f2c614610125578063bf2c5b241461014857005b80631e93b0f11461008d5780637eea518c146100b157806383230757146100c45780638e314769146100d957005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610f8b565b61015b565b3480156100d057600080fd5b5060015461009e565b61008b6100e7366004610f8b565b6102d9565b61008b6100fa366004610f8b565b610470565b61008b61010d366004610f8b565b61063b565b61008b610120366004610f8b565b6107ba565b34801561013157600080fd5b5061013a610a26565b6040516100a8929190610fae565b61008b610156366004610f8b565b610ac3565b61016b600160005414600d610c5e565b6101858135158061017e57506001548235145b600e610c5e565b6000808055600280546101979061100b565b80601f01602080910402602001604051908101604052809291908181526020018280546101c39061100b565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b5050505050806020019051810190610228919061105c565b905061023c8160600151431015600f610c5e565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161026d9291906110e5565b60405180910390a16102813415600c610c5e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102be573d6000803e3d6000fd5b50600080805560018190556102d590600290610e44565b5050565b6102e96005600054146017610c5e565b610303813515806102fc57506001548235145b6018610c5e565b6000808055600280546103159061100b565b80601f01602080910402602001604051908101604052809291908181526020018280546103419061100b565b801561038e5780601f106103635761010080835404028352916020019161038e565b820191906000526020600020905b81548152906001019060200180831161037157829003601f168201915b50505050508060200190518101906103a6919061111a565b90506103ba8160a001514310156019610c5e565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516103eb9291906110e5565b60405180910390a16103ff34156015610c5e565b8051610433906001600160a01b031633146104295760608201516001600160a01b0316331461042c565b60015b6016610c5e565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102be573d6000803e3d6000fd5b610480600760005414601c610c5e565b61049a8135158061049357506001548235145b601d610c5e565b6000808055600280546104ac9061100b565b80601f01602080910402602001604051908101604052809291908181526020018280546104d89061100b565b80156105255780601f106104fa57610100808354040283529160200191610525565b820191906000526020600020905b81548152906001019060200180831161050857829003601f168201915b505050505080602001905181019061053d91906111ae565b90506105508160c001514310601e610c5e565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c338360405161058192919061124c565b60405180910390a16105953415601a610c5e565b80516105ad906001600160a01b03163314601b610c5e565b6105b5610e81565b815181516001600160a01b03918216905260208084015183518201526040808501518451909101526060808501518451931692019190915260a08301516000916106029190860135610c84565b1461060e576001610611565b60005b6020808301805192909252815143910152608083015190516040015261063681610cd7565b505050565b61064b6001600054146009610c5e565b6106658135158061065e57506001548235145b600a610c5e565b6000808055600280546106779061100b565b80601f01602080910402602001604051908101604052809291908181526020018280546106a39061100b565b80156106f05780601f106106c5576101008083540402835291602001916106f0565b820191906000526020600020905b8154815290600101906020018083116106d357829003601f168201915b5050505050806020019051810190610708919061105c565b905061071b81606001514310600b610c5e565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338360405161074c9291906110e5565b60405180910390a161076034156008610c5e565b610768610e81565b815181516001600160a01b039091169052602080830180518351830152604080850151845182015283513360609091015282840180516001905280514394019390935290519151015261063681610cd7565b6107ca6005600054146012610c5e565b6107e4813515806107dd57506001548235145b6013610c5e565b6000808055600280546107f69061100b565b80601f01602080910402602001604051908101604052809291908181526020018280546108229061100b565b801561086f5780601f106108445761010080835404028352916020019161086f565b820191906000526020600020905b81548152906001019060200180831161085257829003601f168201915b5050505050806020019051810190610887919061111a565b905061089f6040518060200160405280600081525090565b6108b08260a0015143106014610c5e565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516108e192919061124c565b60405180910390a16108f534156010610c5e565b6060820151610910906001600160a01b031633146011610c5e565b61091e438360400151610c84565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e08201526101000160405160208183030381529060405260029080519060200190610a1f929190610eda565b5050505050565b600060606000546002808054610a3b9061100b565b80601f0160208091040260200160405190810160405280929190818152602001828054610a679061100b565b8015610ab45780601f10610a8957610100808354040283529160200191610ab4565b820191906000526020600020905b815481529060010190602001808311610a9757829003601f168201915b50505050509050915091509091565b610ad36007600054146021610c5e565b610aed81351580610ae657506001548235145b6022610c5e565b600080805560028054610aff9061100b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2b9061100b565b8015610b785780601f10610b4d57610100808354040283529160200191610b78565b820191906000526020600020905b815481529060010190602001808311610b5b57829003601f168201915b5050505050806020019051810190610b9091906111ae565b9050610ba48160c001514310156023610c5e565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610bd59291906110e5565b60405180910390a1610be93415601f610c5e565b8051610c1d906001600160a01b03163314610c135760608201516001600160a01b03163314610c16565b60015b6020610c5e565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156102be573d6000803e3d6000fd5b816102d55760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610c918382611273565b9150811015610cd15760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610c7b565b92915050565b60408051602081019091526000815260208201515160011415610e0157610d0e826020015160200151836000015160400151610c84565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610dfb929190610eda565b50505050565b815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102be573d6000803e3d6000fd5b508054610e509061100b565b6000825580601f10610e60575050565b601f016020900490600052602060002090810190610e7e9190610f5e565b50565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610ed560405180606001604052806000815260200160008152602001600081525090565b905290565b828054610ee69061100b565b90600052602060002090601f016020900481019282610f085760008555610f4e565b82601f10610f2157805160ff1916838001178555610f4e565b82800160010185558215610f4e579182015b82811115610f4e578251825591602001919060010190610f33565b50610f5a929150610f5e565b5090565b5b80821115610f5a5760008155600101610f5f565b600060408284031215610f8557600080fd5b50919050565b600060408284031215610f9d57600080fd5b610fa78383610f73565b9392505050565b82815260006020604081840152835180604085015260005b81811015610fe257858101830151858201606001528201610fc6565b81811115610ff4576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061101f57607f821691505b60208210811415610f8557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461105757600080fd5b919050565b60006080828403121561106e57600080fd5b6040516080810181811067ffffffffffffffff8211171561109f57634e487b7160e01b600052604160045260246000fd5b6040526110ab83611040565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b8035801515811461105757600080fd5b6001600160a01b03831681528135602080830191909152606082019061110c9084016110d5565b151560408301529392505050565b600060c0828403121561112c57600080fd5b60405160c0810181811067ffffffffffffffff8211171561115d57634e487b7160e01b600052604160045260246000fd5b60405261116983611040565b8152602083015160208201526040830151604082015261118b60608401611040565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e082840312156111c057600080fd5b60405160e0810181811067ffffffffffffffff821117156111f157634e487b7160e01b600052604160045260246000fd5b6040526111fd83611040565b8152602083015160208201526040830151604082015261121f60608401611040565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038316815260608101610fa7602083018480358252602090810135910152565b6000821982111561129457634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220fe5eef76b04f7c517e0697ca0e24d31798a8aef97462f6136f4acf73467202a364736f6c634300080c0033`,
  BytecodeLen: 5708,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:47:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:53:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:79:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:58:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:64:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:65:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:71:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
