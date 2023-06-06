export const Voting = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_voterAddress", "type": "address" }],
    "name": "getPartyVoteCount", "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view", "type": "function"
  }, {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "hasVoted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view", "type": "function"
  },
  {
    "inputs": [{ "internalType": "string", "name": "_partyName", "type": "string" }],
    "name": "mintVote", "outputs": [],
    "stateMutability": "nonpayable", "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "partyVotes", "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view", "type": "function"
  }, {
    "inputs": [], "name": "totalVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view", "type": "function"
  }
];
