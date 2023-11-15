import inquirer from "inquirer";

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'nome',
            message: 'Qual seu nome?'
        }, {
            type: 'list',
            name: 'idade',
            message: 'Qual sua idade?',
            choices: [
                '00 a 10',
                '11 a 20',
                '21 a 30',
                '31 a 40',
                '41 a 50',
                '50+'
            ]
        }
        
    ]
).then((answers) => {
    console.log(
        "Oi " + answers.nome +
        " com " + answers.idade + " anos de vida!"
    );
});