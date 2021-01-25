require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note magnet coach hockey infant tail summer'; 
let testAccounts = [
"0xd4c588a21535048d10c62ee0ce86e17722e95867339fd7173912989f32a21dfa",
"0x744c71330e351637702568c0aa3445ea0ba5596d8705e50ca59029c6b220be9d",
"0x3c7768f0eed66444bca543ba5f9b4eb34ce7a29c7008a20a9eb87c4d32814011",
"0x3c6e420c9fa57d4c1d446422dc1793d756c02c41d54447ec7ee170afd9eb6f7f",
"0x6510b000cb3236a43571d84006cbbf5691114720fb37941f349adab3a9e00a14",
"0x00d758ec190a961869db8a1c39c58e3507daeffe61976776f4483d16538e1a95",
"0x6cc6f2b646b7ccc3e25355f1cafffd38d5e507b92539e92ada86b45df347aaaf",
"0xb983a2eade568ffd80a627225f02cb6cc6d539611e5ff0ef1814c4069eb39e7d",
"0x1d8caa6999618e1706ed71e5e1fbd4c53314fc1e6d7f0387991319539358acd9",
"0xf477e1cab8c8c7e1e518071154eaea1ac82c95137502eb99e68972682e355743"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
