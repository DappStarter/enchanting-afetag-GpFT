require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss gesture creek fringe seat'; 
let testAccounts = [
"0x6a3f078ce0e495f361908871983dd84819861237f43912e3cb6a5d839f157ad2",
"0x7f9b1e19725e7b19b39f04b154dbe54151f95ad8647c296d8a8ad0534e5fc35e",
"0xbac4f1b4173db00e8a68096563bf8405e7c9b5cf67de7fa40adc15650d626756",
"0xab99ab1a125df1afc1ab5ba26e169b608266369635b1806b67131fe04eb2b002",
"0x9d3995a2cc4029a46d32f013ecacb211b594f3bd6cdf58421a614c2aceddfd06",
"0x19b307a9198a3c63c18628279d027f95f3cc75bf2afba99fd1f44ec51f1b00e7",
"0xabe2d77469afd9da7a0342dbe0c274f71eba3b9cfbe70be50f039633f15bf2e9",
"0xad9019ad32256feb8b63431a04389209f9ca5058dd917d0b84685853cbfa71df",
"0x3ee279305118ef9d2a815f3a7d21f9cfac647f5d779f488e116926db59370fb5",
"0x666da55909468e61305a0107a9f885c331a8a212fce6b34159795878435bc2b4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


