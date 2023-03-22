// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

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
      1: [ctc0, ctc1, ctc1]
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
  
  
  const v81 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v84 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:22:50:application',
    fs: ['at ./index.rsh:20:11:application call to [unknown function] (defined at: ./index.rsh:20:15:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v81, v84],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v81, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
      
      sim_r.txns.push({
        amt: v86,
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
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:33:31:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.add(v87, v101);
  const v103 = stdlib.mod(v102, stdlib.checkedBigNumberify('./index.rsh:33:45:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:35:37:decimal', stdlib.UInt_max, '2'));
  const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:35:61:decimal', stdlib.UInt_max, '0'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v105 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:35:11:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:35:11:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.mul(v111, v86);
  ;
  const v118 = stdlib.mul(v112, v86);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:43:28:application',
    fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:21:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
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
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v86), {
    at: './index.rsh:28:29:application',
    fs: ['at ./index.rsh:27:11:application call to [unknown function] (defined at: ./index.rsh:27:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v94 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:29:50:application',
    fs: ['at ./index.rsh:27:11:application call to [unknown function] (defined at: ./index.rsh:27:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v85, v86, v87, v94],
    evt_cnt: 1,
    funcNum: 1,
    lct: v88,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v86, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
      
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v101 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:33:31:decimal', stdlib.UInt_max, '4'), v96);
      const v102 = stdlib.add(v87, v101);
      const v103 = stdlib.mod(v102, stdlib.checkedBigNumberify('./index.rsh:33:45:decimal', stdlib.UInt_max, '3'));
      const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:35:37:decimal', stdlib.UInt_max, '2'));
      const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:35:61:decimal', stdlib.UInt_max, '0'));
      const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v108 = v105 ? v106 : v107;
      const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v110 = v104 ? v109 : v108;
      const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:35:11:array', stdlib.UInt_max, '0')];
      const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:35:11:array', stdlib.UInt_max, '1')];
      const v113 = stdlib.mul(v111, v86);
      sim_r.txns.push({
        kind: 'from',
        to: v85,
        tok: undefined /* Nothing */
        });
      const v118 = stdlib.mul(v112, v86);
      sim_r.txns.push({
        kind: 'from',
        to: v95,
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
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:33:31:decimal', stdlib.UInt_max, '4'), v96);
  const v102 = stdlib.add(v87, v101);
  const v103 = stdlib.mod(v102, stdlib.checkedBigNumberify('./index.rsh:33:45:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:35:37:decimal', stdlib.UInt_max, '2'));
  const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:35:61:decimal', stdlib.UInt_max, '0'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v105 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:35:11:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:35:11:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.mul(v111, v86);
  ;
  const v118 = stdlib.mul(v112, v86);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:43:28:application',
    fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:21:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAEIAiYCAAEAIjUAMRhBAYYoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAALUjEkQjNAESRDQESSISTDQCEhFEKWRJNQOBIFs1/0k1BRc1/oAE1RUZFDT+FlCwNP+IAUM0A4EoW4EENP4JCIEDGDX9gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNP0iEk2AEAAAAAAAAAACAAAAAAAAAAA0/SUSTTX8sSKyATT8Ils0/wuyCCOyEDQDVwAgsgezsSKyATT8JFs0/wuyCCOyEDEAsgezQgBUSIGgjQaIALkiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAIkxADT/FlA0/hZQKUsBVwAwZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
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
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
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
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
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
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
  Bytecode: `0x60806040526040516109833803806109838339810160408190526100229161021c565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a160208101515161008c9034146007610124565b6100b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b3380825260208381018051518285019081529051820151604080860191825260016000819055439055805180850195909552915184830152516060808501919091528151808503909101815260809093019052815161011c92600292019061014d565b5050506102b1565b816101495760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461015990610276565b90600052602060002090601f01602090048101928261017b57600085556101c1565b82601f1061019457805160ff19168380011785556101c1565b828001600101855582156101c1579182015b828111156101c15782518255916020019190600101906101a6565b506101cd9291506101d1565b5090565b5b808211156101cd57600081556001016101d2565b604080519081016001600160401b038111828210171561021657634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561022f57600080fd5b6102376101e6565b835181526040601f198301121561024d57600080fd5b6102556101e6565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061028a57607f821691505b602082108114156102ab57634e487b7160e01b600052602260045260246000fd5b50919050565b6106c3806102c06000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b6100476100903660046104e1565b6100b8565b3480156100a157600080fd5b506100aa61032b565b6040516100649291906104f9565b6100c860016000541460096103c8565b6100e2813515806100db57506001548235145b600a6103c8565b6000808055600280546100f490610556565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610556565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061058b565b905061018f6103f1565b6040805133815284356020808301919091528501358183015290517f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72259181900360600190a16101e58260200151341460086103c8565b60036101f66020850135600461061d565b83604001516102059190610634565b61020f919061064c565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146102695780511561025f57806040015161026f565b806020015161026f565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc91610299919061066e565b6040518115909202916000818181858888f193505050501580156102c1573d6000803e3d6000fd5b50336001600160a01b03166108fc83602001518360800151602001516102e7919061066e565b6040518115909202916000818181858888f1935050505015801561030f573d6000803e3d6000fd5b50600080805560018190556103269060029061048b565b505050565b60006060600054600280805461034090610556565b80601f016020809104026020016040519081016040528092919081815260200182805461036c90610556565b80156103b95780601f1061038e576101008083540402835291602001916103b9565b820191906000526020600020905b81548152906001019060200180831161039c57829003601f168201915b50505050509050915091509091565b816103ed5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a0016040528060008152602001610420604051806040016040528060008152602001600081525090565b8152602001610442604051806040016040528060008152602001600081525090565b8152602001610464604051806040016040528060008152602001600081525090565b8152602001610486604051806040016040528060008152602001600081525090565b905290565b50805461049790610556565b6000825580601f106104a7575050565b601f0160209004906000526020600020908101906104c591906104c8565b50565b5b808211156104dd57600081556001016104c9565b5090565b6000604082840312156104f357600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561052d57858101830151858201606001528201610511565b8181111561053f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061056a57607f821691505b602082108114156104f357634e487b7160e01b600052602260045260246000fd5b60006060828403121561059d57600080fd5b6040516060810181811067ffffffffffffffff821117156105ce57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146105e857600080fd5b8152602083810151908201526040928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561062f5761062f610607565b500390565b6000821982111561064757610647610607565b500190565b60008261066957634e487b7160e01b600052601260045260246000fd5b500690565b600081600019048311821515161561068857610688610607565b50029056fea2646970667358221220637eb88b547220d45865114abd7bd89738310485cf59cc65108b7740b2584f5364736f6c634300080c0033`,
  BytecodeLen: 2435,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:25:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:39:13:after expr stmt semicolon',
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
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
