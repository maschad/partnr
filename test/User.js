const User = artifacts.require('./User.sol')

contract('User tests', () => {
    it('should improve a users skills', async () => {
        const user = await User.deployed()
    })
})