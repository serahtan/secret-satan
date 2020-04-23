const Devil = require('./Devil').Devil;
const DevilList = require('./DevilList').DevilList;
const Satan = require('./Satan').Satan;

// Clear the list
DevilList.clearDevils();

// Setup stdin
let stdin = process.stdin;
stdin.setEncoding('utf-8');

// Menu options
console.log("Please enter your devilish candidates! (space-separated or one at a time)" +
    "\nEnter 'Devilish!' to conjure up your gifting order." +
    "\nEnter 'Devils!' to see your current devilish list!");

// Listen for input
stdin.on('data', (data) => {
    switch(data) {
        // Determine secret santa combination
        case 'Devilish!\n':
            let secretSatans = Satan.secretSatan();
            console.log("----------------------------------------------------------");
            console.log("[ AND OUR SATANIC GIFTERS ARE: ]");
            secretSatans.forEach((value) => {
                console.log(`${value.from} will gift to ${value.to}`);
            });
            console.log("----------------------------------------------------------");
            console.log("MERRY CHRISTMAS YOU NERDS");
            break;
        // List current people
        case 'Devils!\n':
            let devils = DevilList.gatherDevils();
            console.log(`Your Devil list is currently has these devilish kin: ${devils.join(', ')}`);
            break;
        // Add more people
        default:
            let inputString = data.split(' ');
            inputString.forEach(devil => {
                try {
                    new Devil(devil.replace('\n', ''))
                } catch(err) {
                    console.log(err.message);
                    if (err.message === `${devil} is already in the DevilList\n`) {
                        console.log(`[ That Devil is already in Satan's list! Try another devilish one >:) ]`)
                    }
                }
            })
    }
});
