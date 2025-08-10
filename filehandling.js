
const fs=require("fs")

// // fs.writeFileSync('./text.txt',"Hey  newbie")
// fs.writeFile('./text.txt',"Hey  newbie Async",(err)=>{})

// const res=fs.readFileSync('./contacts.txt',"utf-8")
// fs.readFile('./contacts.txt',"utf-8",(err,data)=>{
//     if(err){
//         console.log("error",err)
//     }
//     else{
//         console.log(data)
//     }
// })

// fs.appendFileSync('./text.txt',`hey there\n`)

// fs.cpSync('./text.txt','./copy.txt')

// fs.unlinkSync('./copy.txt')
// console.log(fs.statSync("./text.txt"))
fs.mkdirSync('my-docs/a')