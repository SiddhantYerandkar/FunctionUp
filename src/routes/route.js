const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

let players = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": ["swimming"]
},{
    "name": "gopal",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": ["swimming"]
},{
    "name": "lokesh",
    "dob": "1/1/1990",
    "gender": "male",
    "city": "mumbai",
    "sports": ["soccer"],
}]


// PROBLEM -----> PLAYER & BOOKING 


router.post('/players', function(req, res){
    let element = req.body
    let elementName = req.body.name

    for (let index = 0; index < 2; index++) {
        const elem = players[index];
        if (elem.name == elementName) {
            return res.send({message :"player already exist" })            
        }else{
            players.push(element)
            return res.send({data : players})
        }  
    }
})

// PROBLEM 1 ---->  CONSECUTIVE NUMBERS 1
router.get('/sol1', function(req, res){
    let arr = [1,2,3,5,6,7]
    
    let n = arr[arr.length - 1]
    let sum = n*(n+1)/2

    let sum1 = 0
    for(let i=0;i<arr.length;i++){
    sum1 = sum1 + arr[i]
    }
    let missingNo = sum - sum1

    res.send({data : missingNo})
})

// PROBLEM 2 ----> CONSECUTVE NUMBERS 2

router.get('/sol2', function(req, res){
    let arr = [33,34,35,37,38]
    let n = arr.length + 1
    let first = arr[0]
    let last = arr[arr.length - 1]

    let sum = n*(first + last)/2
    
    let sum1 = 0
    for(let i=0;i<arr.length;i++){
    sum1 = sum1 + arr[i]
    }

    missingNo = sum - sum1
    res.send({data : missingNo})
})

module.exports = router;