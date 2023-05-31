// eslint-disable-next-line no-undef
const VotingSystem = artifacts.require("VotingSystem");

module.exports = function (deployer) {
    deployer.deploy(VotingSystem);
};
