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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
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
export async function P1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for P1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for P1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v323 = stdlib.protect(ctc0, interact.deadline, 'for P1\'s interact field deadline');
  const v324 = stdlib.protect(ctc0, interact.wager, 'for P1\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v324, v323],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:53:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v324, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v328, v329], secs: v331, time: v330, didSend: v59, from: v327 } = txn1;
      
      sim_r.txns.push({
        amt: v328,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v340 = stdlib.safeAdd(v330, v329);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v328, v329], secs: v331, time: v330, didSend: v59, from: v327 } = txn1;
  ;
  const v340 = stdlib.safeAdd(v330, v329);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v340],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v327, v328, v329, v340],
      evt_cnt: 0,
      funcNum: 2,
      lct: v330,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v510, time: v509, didSend: v274, from: v508 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v327,
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
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v510, time: v509, didSend: v274, from: v508 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:45:35:application',
      fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:61:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'P1'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v346, time: v345, didSend: v68, from: v344 } = txn2;
    const v348 = stdlib.add(v328, v328);
    ;
    let v349 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v350 = v345;
    let v357 = v348;
    
    let txn3 = txn2;
    while (await (async () => {
      const v365 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v365;})()) {
      const v372 = stdlib.safeAdd(v350, v329);
      const v376 = stdlib.protect(ctc0, await interact.finger(), {
        at: './index.rsh:69:46:application',
        fs: ['at ./index.rsh:68:16:application call to [unknown function] (defined at: ./index.rsh:68:20:function exp)'],
        msg: 'finger',
        who: 'P1'
        });
      const v377 = stdlib.protect(ctc0, await interact.guess(v376), {
        at: './index.rsh:71:44:application',
        fs: ['at ./index.rsh:68:16:application call to [unknown function] (defined at: ./index.rsh:68:20:function exp)'],
        msg: 'guess',
        who: 'P1'
        });
      const v378 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:72:68:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:68:16:application call to [unknown function] (defined at: ./index.rsh:68:20:function exp)'],
        msg: 'random',
        who: 'P1'
        });
      const v379 = stdlib.digest([ctc0, ctc0], [v378, v376]);
      const v381 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:73:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:68:16:application call to [unknown function] (defined at: ./index.rsh:68:20:function exp)'],
        msg: 'random',
        who: 'P1'
        });
      const v382 = stdlib.digest([ctc0, ctc0], [v381, v377]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v327, v328, v329, v344, v357, v372, v379, v382],
        evt_cnt: 2,
        funcNum: 4,
        lct: v350,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:77:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v385, v386], secs: v388, time: v387, didSend: v100, from: v384 } = txn4;
          
          ;
          const v396 = stdlib.safeAdd(v387, v329);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v372],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v327, v328, v329, v344, v357, v372],
          evt_cnt: 0,
          funcNum: 5,
          lct: v350,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v476, time: v475, didSend: v227, from: v474 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v344,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v476, time: v475, didSend: v227, from: v474 } = txn5;
        ;
        const v477 = stdlib.addressEq(v327, v474);
        const v478 = stdlib.addressEq(v344, v474);
        const v479 = v477 ? true : v478;
        stdlib.assert(v479, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:78:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'P1'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:45:35:application',
          fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:78:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'P1'
          });
        
        return;
        
        }
      else {
        const {data: [v385, v386], secs: v388, time: v387, didSend: v100, from: v384 } = txn4;
        ;
        const v389 = stdlib.addressEq(v327, v384);
        stdlib.assert(v389, {
          at: './index.rsh:77:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'P1'
          });
        const v396 = stdlib.safeAdd(v387, v329);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v396],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v327, v328, v329, v344, v357, v385, v386, v396],
            evt_cnt: 0,
            funcNum: 7,
            lct: v387,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v458, time: v457, didSend: v193, from: v456 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v327,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v458, time: v457, didSend: v193, from: v456 } = txn6;
          ;
          const v459 = stdlib.addressEq(v327, v456);
          const v460 = stdlib.addressEq(v344, v456);
          const v461 = v459 ? true : v460;
          stdlib.assert(v461, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:87:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'P1'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:45:35:application',
            fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:87:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'P1'
            });
          
          return;
          
          }
        else {
          const {data: [v403, v404], secs: v406, time: v405, didSend: v112, from: v402 } = txn5;
          ;
          const v407 = stdlib.addressEq(v344, v402);
          stdlib.assert(v407, {
            at: './index.rsh:86:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'P1'
            });
          const v414 = stdlib.safeAdd(v405, v329);
          const txn6 = await (ctc.sendrecv({
            args: [v327, v328, v329, v344, v357, v385, v386, v403, v404, v414, v378, v376, v381, v377],
            evt_cnt: 4,
            funcNum: 8,
            lct: v405,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:96:12:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v419, v420, v421, v422], secs: v424, time: v423, didSend: v124, from: v418 } = txn6;
              
              ;
              const v430 = stdlib.eq(v422, v403);
              const v431 = stdlib.eq(v404, v420);
              const v432 = v430 ? v431 : false;
              const v435 = v431 ? stdlib.checkedBigNumberify('./index.rsh:10:27:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:11:5:decimal', stdlib.UInt_max, '0');
              const v436 = v430 ? stdlib.checkedBigNumberify('./index.rsh:9:27:decimal', stdlib.UInt_max, '1') : v435;
              const v437 = v432 ? stdlib.checkedBigNumberify('./index.rsh:8:53:decimal', stdlib.UInt_max, '0') : v436;
              const cv349 = v437;
              const cv350 = v423;
              const cv357 = v357;
              
              await (async () => {
                const v349 = cv349;
                const v350 = cv350;
                const v357 = cv357;
                
                if (await (async () => {
                  const v365 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  
                  return v365;})()) {
                  const v372 = stdlib.safeAdd(v350, v329);
                  sim_r.isHalt = false;
                  }
                else {
                  const v492 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  const v495 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '2'), v328);
                  const v497 = v492 ? v327 : v344;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v497,
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
            timeoutAt: ['time', v414],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v327, v328, v329, v344, v357, v385, v386, v403, v404, v414],
              evt_cnt: 0,
              funcNum: 9,
              lct: v405,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v440, time: v439, didSend: v159, from: v438 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v344,
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
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v440, time: v439, didSend: v159, from: v438 } = txn7;
            ;
            const v441 = stdlib.addressEq(v327, v438);
            const v442 = stdlib.addressEq(v344, v438);
            const v443 = v441 ? true : v442;
            stdlib.assert(v443, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'P1'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:45:35:application',
              fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'P1'
              });
            
            return;
            
            }
          else {
            const {data: [v419, v420, v421, v422], secs: v424, time: v423, didSend: v124, from: v418 } = txn6;
            ;
            const v425 = stdlib.addressEq(v327, v418);
            stdlib.assert(v425, {
              at: './index.rsh:96:12:dot',
              fs: [],
              msg: 'sender correct',
              who: 'P1'
              });
            const v426 = stdlib.digest([ctc0, ctc0], [v419, v420]);
            const v427 = stdlib.digestEq(v385, v426);
            stdlib.assert(v427, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:98:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'P1'
              });
            const v428 = stdlib.digest([ctc0, ctc0], [v421, v422]);
            const v429 = stdlib.digestEq(v386, v428);
            stdlib.assert(v429, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:99:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'P1'
              });
            const v430 = stdlib.eq(v422, v403);
            const v431 = stdlib.eq(v404, v420);
            const v432 = v430 ? v431 : false;
            const v435 = v431 ? stdlib.checkedBigNumberify('./index.rsh:10:27:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:11:5:decimal', stdlib.UInt_max, '0');
            const v436 = v430 ? stdlib.checkedBigNumberify('./index.rsh:9:27:decimal', stdlib.UInt_max, '1') : v435;
            const v437 = v432 ? stdlib.checkedBigNumberify('./index.rsh:8:53:decimal', stdlib.UInt_max, '0') : v436;
            const cv349 = v437;
            const cv350 = v423;
            const cv357 = v357;
            
            v349 = cv349;
            v350 = cv350;
            v357 = cv357;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v492 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v495 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '2'), v328);
    const v497 = v492 ? v327 : v344;
    ;
    stdlib.protect(ctc2, await interact.seeResult(v349), {
      at: './index.rsh:110:27:application',
      fs: ['at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:109:22:function exp)'],
      msg: 'seeResult',
      who: 'P1'
      });
    
    return;
    }
  
  
  
  };
export async function P2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for P2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for P2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v328, v329], secs: v331, time: v330, didSend: v59, from: v327 } = txn1;
  ;
  const v340 = stdlib.safeAdd(v330, v329);
  stdlib.protect(ctc1, await interact.acceptWager(v328), {
    at: './index.rsh:58:29:application',
    fs: ['at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:16:function exp)'],
    msg: 'acceptWager',
    who: 'P2'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v327, v328, v329, v340],
    evt_cnt: 0,
    funcNum: 1,
    lct: v330,
    onlyIf: true,
    out_tys: [],
    pay: [v328, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v346, time: v345, didSend: v68, from: v344 } = txn2;
      
      const v348 = stdlib.add(v328, v328);
      sim_r.txns.push({
        amt: v328,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v349 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v350 = v345;
      const v357 = v348;
      
      if (await (async () => {
        const v365 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v365;})()) {
        const v372 = stdlib.safeAdd(v350, v329);
        sim_r.isHalt = false;
        }
      else {
        const v492 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v495 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '2'), v328);
        const v497 = v492 ? v327 : v344;
        sim_r.txns.push({
          kind: 'from',
          to: v497,
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
    timeoutAt: ['time', v340],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v327, v328, v329, v340],
      evt_cnt: 0,
      funcNum: 2,
      lct: v330,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v510, time: v509, didSend: v274, from: v508 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v327,
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
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v510, time: v509, didSend: v274, from: v508 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:45:35:application',
      fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:61:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'P2'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v346, time: v345, didSend: v68, from: v344 } = txn2;
    const v348 = stdlib.add(v328, v328);
    ;
    let v349 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v350 = v345;
    let v357 = v348;
    
    let txn3 = txn2;
    while (await (async () => {
      const v365 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v365;})()) {
      const v372 = stdlib.safeAdd(v350, v329);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v372],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v327, v328, v329, v344, v357, v372],
          evt_cnt: 0,
          funcNum: 5,
          lct: v350,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v476, time: v475, didSend: v227, from: v474 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v344,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v476, time: v475, didSend: v227, from: v474 } = txn5;
        ;
        const v477 = stdlib.addressEq(v327, v474);
        const v478 = stdlib.addressEq(v344, v474);
        const v479 = v477 ? true : v478;
        stdlib.assert(v479, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:78:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'P2'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:45:35:application',
          fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:78:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'P2'
          });
        
        return;
        
        }
      else {
        const {data: [v385, v386], secs: v388, time: v387, didSend: v100, from: v384 } = txn4;
        ;
        const v389 = stdlib.addressEq(v327, v384);
        stdlib.assert(v389, {
          at: './index.rsh:77:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'P2'
          });
        const v396 = stdlib.safeAdd(v387, v329);
        const v400 = stdlib.protect(ctc0, await interact.finger(), {
          at: './index.rsh:83:56:application',
          fs: ['at ./index.rsh:82:16:application call to [unknown function] (defined at: ./index.rsh:82:20:function exp)'],
          msg: 'finger',
          who: 'P2'
          });
        const v401 = stdlib.protect(ctc0, await interact.guess(v400), {
          at: './index.rsh:84:54:application',
          fs: ['at ./index.rsh:82:16:application call to [unknown function] (defined at: ./index.rsh:82:20:function exp)'],
          msg: 'guess',
          who: 'P2'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v327, v328, v329, v344, v357, v385, v386, v396, v400, v401],
          evt_cnt: 2,
          funcNum: 6,
          lct: v387,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:86:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v403, v404], secs: v406, time: v405, didSend: v112, from: v402 } = txn5;
            
            ;
            const v414 = stdlib.safeAdd(v405, v329);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v396],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v327, v328, v329, v344, v357, v385, v386, v396],
            evt_cnt: 0,
            funcNum: 7,
            lct: v387,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v458, time: v457, didSend: v193, from: v456 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v327,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v458, time: v457, didSend: v193, from: v456 } = txn6;
          ;
          const v459 = stdlib.addressEq(v327, v456);
          const v460 = stdlib.addressEq(v344, v456);
          const v461 = v459 ? true : v460;
          stdlib.assert(v461, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:87:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'P2'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:45:35:application',
            fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:87:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'P2'
            });
          
          return;
          
          }
        else {
          const {data: [v403, v404], secs: v406, time: v405, didSend: v112, from: v402 } = txn5;
          ;
          const v407 = stdlib.addressEq(v344, v402);
          stdlib.assert(v407, {
            at: './index.rsh:86:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'P2'
            });
          const v414 = stdlib.safeAdd(v405, v329);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v414],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v327, v328, v329, v344, v357, v385, v386, v403, v404, v414],
              evt_cnt: 0,
              funcNum: 9,
              lct: v405,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v440, time: v439, didSend: v159, from: v438 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v344,
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
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v440, time: v439, didSend: v159, from: v438 } = txn7;
            ;
            const v441 = stdlib.addressEq(v327, v438);
            const v442 = stdlib.addressEq(v344, v438);
            const v443 = v441 ? true : v442;
            stdlib.assert(v443, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'P2'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:45:35:application',
              fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'P2'
              });
            
            return;
            
            }
          else {
            const {data: [v419, v420, v421, v422], secs: v424, time: v423, didSend: v124, from: v418 } = txn6;
            ;
            const v425 = stdlib.addressEq(v327, v418);
            stdlib.assert(v425, {
              at: './index.rsh:96:12:dot',
              fs: [],
              msg: 'sender correct',
              who: 'P2'
              });
            const v426 = stdlib.digest([ctc0, ctc0], [v419, v420]);
            const v427 = stdlib.digestEq(v385, v426);
            stdlib.assert(v427, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:98:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'P2'
              });
            const v428 = stdlib.digest([ctc0, ctc0], [v421, v422]);
            const v429 = stdlib.digestEq(v386, v428);
            stdlib.assert(v429, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:99:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'P2'
              });
            const v430 = stdlib.eq(v422, v403);
            const v431 = stdlib.eq(v404, v420);
            const v432 = v430 ? v431 : false;
            const v435 = v431 ? stdlib.checkedBigNumberify('./index.rsh:10:27:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:11:5:decimal', stdlib.UInt_max, '0');
            const v436 = v430 ? stdlib.checkedBigNumberify('./index.rsh:9:27:decimal', stdlib.UInt_max, '1') : v435;
            const v437 = v432 ? stdlib.checkedBigNumberify('./index.rsh:8:53:decimal', stdlib.UInt_max, '0') : v436;
            const cv349 = v437;
            const cv350 = v423;
            const cv357 = v357;
            
            v349 = cv349;
            v350 = cv350;
            v357 = cv357;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v492 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v495 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:106:14:decimal', stdlib.UInt_max, '2'), v328);
    const v497 = v492 ? v327 : v344;
    ;
    stdlib.protect(ctc1, await interact.seeResult(v349), {
      at: './index.rsh:110:27:application',
      fs: ['at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:109:22:function exp)'],
      msg: 'seeResult',
      who: 'P2'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQCAUJIAcoApgBqAFYMCYDAQABAQAiNQAxGEEE7ypkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAnxJIQcMQAFwSSUMQAEXSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQHSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/0k1BUlKIls1/iVbNf2BEFs1/IEYWzX7gAR/ojtSNP4WUDT9FlA0/BZQNPsWULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT+FjT9FlABEkQ0A1d4IDT8FjT7FlABEkQ0+zQDIQpbEjX6NAOBoAFbNP0SNfk0/zQDIQZbNAMhCFs0A1cwICIhCTT5TSM0+k0iNPo0+RBNMgY0AyRbQgLsSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE4huzqbAyBjQDIQpbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAvpJgQYMQACuSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBls1/iEIWzX9VzAgNfwkWzX7V1ggNfpXeCA1+Uk1BUkiWzX4JVs194AESiHL/DT4FlA09xZQsDIGNAMhClsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCEFNQEyBjUCQgJhSCEENAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQxbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCAfVJIQkMQADgSYEEDEAAmEghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBls1/iEIWzX9VzAgNfwkWzX7STUFSVcAIDX6VyAgNfmABGBdpCs0+lA0+VCwMgY0AyEMWwxENP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCEHNQEyBjUCQgFrIQkSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyEGW7III7IQNANXACCyB7NCAQ5JIwxAAEhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQZbNf+ABJqLkXSwMgY0AyENWwxENP+IAUY0A1cAIDT/NAMhCFsxACIyBjT/SQhCAF9IgaCNBogBJiI0ARJENARJIhJMNAISEURJNQVJIls1/yVbNf6ABKzRH8M0/xZQNP4WULA0/4gA9jIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAfTX/Nf41/TX8Nfs1+jX5NP0iEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEENQEyBjUCQgA5sSKyASEJNPoLsggjshA0/DT5NP0jEk2yB7NCAAAxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
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
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v329",
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
                "name": "v328",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v329",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
        "internalType": "struct T7",
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
                "name": "v385",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
        "internalType": "struct T7",
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
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                "name": "v419",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
        "internalType": "struct T7",
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
                "name": "v385",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
        "internalType": "struct T7",
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
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
        "internalType": "struct T7",
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
                "name": "v419",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001db038038062001db08339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a33806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461151e565b610197565b6100a16100e8366004611541565b6103fc565b6100a16100fb366004611541565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611541565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be929190611553565b6100a1610159366004611541565b610941565b6100a161016c3660046115b0565b610ad8565b6100a161017f366004611541565b610db0565b6100a161019236600461151e565b610f0b565b6101a7600760005414601c61117c565b6101c1813515806101ba57506001548235145b601d61117c565b6000808055600280546101d3906115c2565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115c2565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061164b565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e61117c565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be9291906116f7565b60405180910390a16102d23415601a61117c565b60608201516102ed906001600160a01b03163314601b61117c565b6102fb4383604001516111a2565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611728565b604051602081830303815290604052600290805190602001906103f59291906113d7565b5050505050565b61040c600160005414600961117c565b6104268135158061041f57506001548235145b600a61117c565b600080805560028054610438906115c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610464906115c2565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906117af565b90506104dc81606001514310600b61117c565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d929190611828565b60405180910390a161052681602001513414600861117c565b61052e61145b565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600090525143920191909152518001602082015160400152610586816111f5565b505050565b61059b600160005414600d61117c565b6105b5813515806105ae57506001548235145b600e61117c565b6000808055600280546105c7906115c2565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906115c2565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906117af565b905061066c8160600151431015600f61117c565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d929190611828565b60405180910390a16106b13415600c61117c565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b5060008080556001819055610705906002906114b4565b5050565b610719600560005414601761117c565b6107338135158061072c57506001548235145b601861117c565b600080805560028054610745906115c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610771906115c2565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d69190611865565b90506107ea8160a00151431015601961117c565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b929190611828565b60405180910390a161082f3415601561117c565b8051610863906001600160a01b031633146108595760608201516001600160a01b0316331461085c565b60015b601661117c565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b9906115c2565b80601f01602080910402602001604051908101604052809291908181526020018280546108e5906115c2565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b610951600760005414602161117c565b61096b8135158061096457506001548235145b602261117c565b60008080556002805461097d906115c2565b80601f01602080910402602001604051908101604052809291908181526020018280546109a9906115c2565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e919061164b565b9050610a228160e00151431015602361117c565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611828565b60405180910390a1610a673415601f61117c565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b602061117c565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae8600960005414602861117c565b610b0281351580610afb57506001548235145b602961117c565b600080805560028054610b14906115c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610b40906115c2565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba591906118f9565b6040805180820190915260008082526020820152909150610bce8261012001514310602a61117c565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c413415602461117c565b8151610c59906001600160a01b03163314602561117c565b60408051610ca591610c7f91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602661117c565b604080516060858101356020830152608086013592820192909252610ceb91016040516020818303038152906040528051906020012060001c8360c0015114602761117c565b60e082015160808401351481526101008201516040840135146020820152610d1161145b565b825181516001600160a01b039182169052602080850151835190910152604080850151835190910152606080850151835192169101528151610d54576000610d5a565b81602001515b610d82578151610d7b578160200151610d74576000610d85565b6002610d85565b6001610d85565b60005b60208083018051929092528151439101526080840151905160400152610daa816111f5565b50505050565b610dc0600960005414602d61117c565b610dda81351580610dd357506001548235145b602e61117c565b600080805560028054610dec906115c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610e18906115c2565b8015610e655780601f10610e3a57610100808354040283529160200191610e65565b820191906000526020600020905b815481529060010190602001808311610e4857829003601f168201915b5050505050806020019051810190610e7d91906118f9565b9050610e92816101200151431015602f61117c565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ec3929190611828565b60405180910390a1610ed73415602b61117c565b8051610863906001600160a01b03163314610f015760608201516001600160a01b03163314610f04565b60015b602c61117c565b610f1b600560005414601261117c565b610f3581351580610f2e57506001548235145b601361117c565b600080805560028054610f47906115c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610f73906115c2565b8015610fc05780601f10610f9557610100808354040283529160200191610fc0565b820191906000526020600020905b815481529060010190602001808311610fa357829003601f168201915b5050505050806020019051810190610fd89190611865565b9050610ff06040518060200160405280600081525090565b6110018260a001514310601461117c565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a33846040516110329291906116f7565b60405180910390a16110463415601061117c565b815161105e906001600160a01b03163314601161117c565b61106c4383604001516111a2565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111af83826119a4565b91508110156111ef5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611199565b92915050565b604080516020810190915260008152602082015151611315576112288260200151602001518360000151604001516111a2565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610daa9291906113d7565b60208201515160011461132d57815160600151611331565b8151515b6001600160a01b03166108fc6113506002856000015160200151611378565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b600081158061139c5750828261138e81836119bc565b925061139a90836119db565b145b6111ef5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611199565b8280546113e3906115c2565b90600052602060002090601f016020900481019282611405576000855561144b565b82601f1061141e57805160ff191683800117855561144b565b8280016001018555821561144b579182015b8281111561144b578251825591602001919060010190611430565b506114579291506114f1565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016114af60405180606001604052806000815260200160008152602001600081525090565b905290565b5080546114c0906115c2565b6000825580601f106114d0575050565b601f0160209004906000526020600020908101906114ee91906114f1565b50565b5b8082111561145757600081556001016114f2565b60006060828403121561151857600080fd5b50919050565b60006060828403121561153057600080fd5b61153a8383611506565b9392505050565b60006040828403121561151857600080fd5b82815260006020604081840152835180604085015260005b818110156115875785810183015185820160600152820161156b565b81811115611599576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561151857600080fd5b600181811c908216806115d657607f821691505b6020821081141561151857634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561162957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461164657600080fd5b919050565b600061010080838503121561165f57600080fd5b6040519081019067ffffffffffffffff8211818310171561169057634e487b7160e01b600052604160045260246000fd5b8160405261169d8461162f565b815260208401516020820152604084015160408201526116bf6060850161162f565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161153a60208301848035825260208082013590830152604090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161176860608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000608082840312156117c157600080fd5b6040516080810181811067ffffffffffffffff821117156117f257634e487b7160e01b600052604160045260246000fd5b6040526117fe8361162f565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461185657600080fd5b80604085015250509392505050565b600060c0828403121561187757600080fd5b60405160c0810181811067ffffffffffffffff821117156118a857634e487b7160e01b600052604160045260246000fd5b6040526118b48361162f565b815260208301516020820152604083015160408201526118d66060840161162f565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561190c57600080fd5b6119146115f7565b61191d8361162f565b8152602083015160208201526040830151604082015261193f6060840161162f565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119b7576119b761198e565b500190565b60008160001904831182151516156119d6576119d661198e565b500290565b6000826119f857634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122074a677c13d8cca5e84001b4a702788041a26943567910c10df787b4b419e439864736f6c634300080c0033`,
  BytecodeLen: 7600,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:55:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:61:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:107:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:66:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:78:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:79:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:87:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:88:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "P1": P1,
  "P2": P2
  };
export const _APIs = {
  };
