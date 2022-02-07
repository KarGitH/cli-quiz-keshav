import inquirer from "inquirer";
import fs from "fs";
import table from "table";
const ANS={
    q1:"W DC",
    q2:"Kovind",
};
const ques=[
    {
        type:"input",
        message:"What is your name?",
        name:"username",
    },
    {
        type:"list",
        message:"Who is the president of US?",
        choices:["W DC","NYC"],
        name:"q1",
    },
    {
        type:"list",
        message:"Who is the president of India?",
        choices:["Kovind","PC M"],
        name:"q2",
    },
];
let score=0;
inquirer.prompt(ques)
  .then((answers) => {
    if(answers.q1==ANS.q1){
        score++;
    }
    if(answers.q2==ANS.q2){
        score++;
    }
    console.log(score);
    const scoreCard=fs.readFileSync("./scores.json","utf8");
    const parsedScoreCard=JSON.parse(scoreCard);
    //fs.writeFileSync("./scores.json","temp","utf8");
    const card={
        name:answers.username,
        score:score,
   };
   parsedScoreCard.push(card);
//    // console.log{card};
//     //console.log{JSON.stringify(card)};
     fs.writeFileSync("./scores.json",JSON.stringify(parsedScoreCard),"utf8");
     console.log(parsedScoreCard);
     const tableCard=parsedScoreCard
     .sort((a,b)=>b.score-a.score)
     .map(scoreCard=>
        {
            return[scoreCard.name,scoreCard.score];
        });
        console.log(table(tableCard));
  });

  


 