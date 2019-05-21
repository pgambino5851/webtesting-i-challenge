const enhancer = require('./enhancer.js');
// test away!

const brokenSword = {
    name: "Sword",
    enhancement: 0,
    durability: 0
}

const fixedSword = {
    name: "Sword",
    enhancement: 0,
    durability: 100
}

const enhancedSword = {
    name: "Sword",
    enhancement: 1,
    durability: 0
}

const namedEnhancedSword = {
    name: "[+1] Sword",
    enhancement: 1,
    durability: 0
}

const maxEnhancedSword = {
    name: "Sword",
    enhancement: 20,
    durability: 0
}

const Plus14Sword = {
    name: "Sword",
    enhancement: 14,
    durability: 0
}

const Plus15Sword = {
    name: "Sword",
    enhancement: 15,
    durability: 0
}

const Plus16Sword = {
    name: "Sword",
    enhancement: 16,
    durability: 0
}

const Plus17Sword = {
    name: "Sword",
    enhancement: 17,
    durability: 0
}

const Plus6Sword = {
    name: "Sword",
    enhancement: 6,
    durability: 0
}

const Plus9Sword = {
    name: "Sword",
    enhancement: 9,
    durability: 0
}

const Plus5Sword = {
    name: "Sword",
    enhancement: 5,
    durability: 0
}

describe('enhancer.js', () => {
    
    describe('repair()', () => {

        it('should return an item with 100 durability', () => {
            expect(enhancer.repair(brokenSword)).toEqual(fixedSword)
        })
    })

    describe('succeed()', () => {

        it('should return an item with +1 enhancement', () => {
            expect(enhancer.succeed(brokenSword)).toEqual(enhancedSword)
        })

        it('should return an unchanged item if enhancement is maxed at 20', () => {
            expect(enhancer.succeed(maxEnhancedSword)).toEqual(maxEnhancedSword)
        })
    })

    describe('fail()', () => {

        it('should return an item with -5 enhancement if enhancement is less than 15', () => {
            expect(enhancer.fail(Plus14Sword)).toEqual(Plus9Sword)
        })

        it('should return an item with -10 enhancement if enhancement is between 15-16', () => {
            expect(enhancer.fail(Plus15Sword)).toEqual(Plus5Sword)
        })

        it('should return an item with -10 enhancement if enhancement is between 15-16', () => {
            expect(enhancer.fail(Plus16Sword)).toEqual(Plus6Sword)
        })

        it('should return an item with -1 enhancement if enhancement is between 17-20', () => {
            expect(enhancer.fail(Plus17Sword)).toEqual(Plus16Sword)
        })
    })

    describe('get()', () => {

        it('should return an item with no changes if enhancement is 0', () => {
            expect(enhancer.get(brokenSword)).toEqual(brokenSword)
        })

        it('should return an item with a changed name depending on its enhancement level', () => {
            expect(enhancer.get(enhancedSword)).toEqual(namedEnhancedSword)
        })

    })
    
})