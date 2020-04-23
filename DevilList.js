const fs = require('fs');

const DevilList = {
    gatherDevils: () => {
        const devilData = fs.readFileSync('./rsc/devils.txt', {encoding: 'utf8', flag: 'a+'});
        let devils = devilData.split('\n').filter((value) => value !== '');
        return devils;
    },

    clearDevils: () => {
       fs.writeFileSync('./rsc/devils.txt', '');
    },

    countDevils: () => {
        return DevilList.gatherDevils().length;
    },

    addDevil: (devil) => {
        let currDevils = DevilList.gatherDevils();
        if (currDevils.includes(devil)) {
            throw new Error(`${devil} is already in the DevilList`)
        }
        fs.appendFileSync('./rsc/devils.txt', `${devil}\n`);
    }
};

module.exports.DevilList = DevilList;