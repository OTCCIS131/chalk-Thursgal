const chalk = require('chalk');
 
console.log(chalk.red('Happy ' + chalk.underline.bgBlue('birthday to') + ' you!'));
console.log(chalk.green(
    'Happy birthday ' +
    chalk.blue.underline.bold('to') +
    ' you!'
));
console.log(chalk.keyword('orange')('Happy birthday dear Mr. E!'));
console.log(chalk.blue.bgRed.bold('Happy birthday to you!'));