const DevilList = require('./DevilList').DevilList;

const Satan = {
    generateRandomNums: (numbers) => {
        let randomNums = new Array(numbers);
        for (let i = 0; i < numbers; i++) {
            randomNums[i] = Math.floor(Math.random() * 100)
        }
        return randomNums;
    },

    secretSatan: () => {
        if (DevilList.countDevils() < 3) {
            console.log("Your secret satan is pretty sad... Get some more people first :)");
            throw new Error("Not enough devils");
        }
        let devils = DevilList.gatherDevils();
        let randNums = Satan.generateRandomNums(devils.length);
        let devilOrder = devils.map((value, index) => {
            return { devil: value, power: randNums[index] }
        }).sort((a, b) => a.power - b.power);
        return Satan.checkSecretness(devils, devilOrder) ?
            devilOrder.map((value, index) => { return { from: devils[index], to: value.devil } }) : Satan.secretSatan()
    },

    checkSecretness: (devils, gifted) => {
        let pairsOkay = true;
        devils.every((devil, index) => {
            if (devil === gifted[index].devil) {
                pairsOkay = false;
                return false
            }
            return true;
        });
        return pairsOkay;
    }
};

module.exports.Satan = Satan;