const express = require('express');
const router = express.Router();///test-you
//importing a custom module
// const xyz = require('../logger')
// importing external package
// const underscore = require('underscore')

const myWelcomeFun = require('../logger/logger')

const batchinf = require('../util/helper')

const stringFunction = require('../validator/formatter')

const _ = require('lodash')


router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    
    console.log(myWelcomeFun.welcomeFunction());
    

    console.log(batchinf.functionPrintDate());
    console.log(batchinf.functionPrintMonth());
    console.log(batchinf.functionBatchInfo());

    console.log(stringFunction.trimFun());
    console.log(stringFunction.lowerCase());
    console.log(stringFunction.upperCase());


    let monthArr = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']

    console.log(_.chunk(monthArr,4));

    let oddNum = [1,3,5,7,9,11,13,15,17,19]

    console.log(_.tail(oddNum));


    let arr1 = [1,23,43,34]
    let arr2 = [2,4,6,7]
    let arr3 = [1,2,5,8]
    let arr4 = [2,8,10,4] 
    let arr5 = [12,22,23,8]

    console.log(_.union(arr1,arr2,arr3,arr4,arr5));

    let movies = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

    console.log(_.fromPairs(movies));




    res.send('My first ever api!')
    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

