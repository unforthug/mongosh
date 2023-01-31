const express = require('express')
const mongoose = require('mongoose')
const app = express()
let user = require('./user')
mongoose.set('strictQuery',false)


mongoose.connect('mongodb+srv://mondher:123456>@cluster0.arh3aii.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('database is connected')
})

async function start(){
    // const person3 = await user.create({
    //     name : 'Amine',
    //     age : 15 ,
    //     favoriteFoods : ['Spaghitti']
    // })

    // const arrayOfPeople = await user.create([
    //     { 
    //     name : 'Wafa',
    //     age : 12 ,
    //     favoriteFoods : ['Popcorn']},
    //    {  
    //     name : 'Saif',
    //     age :40 ,
    //     favoriteFoods : ['Lablebi']},
    //     {
    //         name : 'Walid',
    //         age : 32 ,
    //         favoriteFoods : ['Couscous']
    //     }
    // ])

    // const findAge = await user.find({age : 32})
    // console.log(findAge)
    // // find method

    // const findOne = await user.findOne({name : "Wafa"})
    // console.log(findOne)
    // // findOne method 

    // const findbyID = await user.findById('63d91eab014a5369e098d5c8')
    // console.log(findbyID)
    // // find user by id

    // const updatedPerson = await user.findByIdAndUpdate({_id : '63d91eab014a5369e098d5c8'}, {name : "Samir"})
    
    const removeById = await user.findByIdAndRemove({_id : '63d91eab014a5369e098d5c8' })

    // await user.deleteOne({name : "mondher"})
    // delete method

    // await user.deleteMany({name : "mondher"})
    // delete method


}
 
start()




app.listen(5000, ()=>{
    console.log('server is running')
})