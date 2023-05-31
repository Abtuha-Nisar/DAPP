import Web3 from 'web3';

const getWeb3 = async () => {
    if (window.ethereum) {
        // Modern dapp browsers
        const web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            return web3;
        } catch (error) {
            throw new Error('User denied account access');
        }
    } else if (window.web3) {
        // Legacy dapp browsers
        return new Web3(window.web3.currentProvider);
    } else {
        // Non-dapp browsers
        throw new Error('No web3 provider detected');
    }
};

export default getWeb3;
