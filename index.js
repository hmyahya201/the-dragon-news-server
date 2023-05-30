const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors())

app.get("/", (req, res)=>{
    res.send("The Dragon is running")
})


//news
app.get("/news", (req, res)=>{
    res.send(news)
})


//news id
app.get("/news/:id", (req, res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n=>n._id == id);
    res.send(selectedNews)
})

//categories
app.get("/categories", (req, res)=>{
    res.send(categories)
})

//categories id
app.get("/categories/:id", (req, res)=>{
    const id = req.params.id;
    if(id == 0){
        res.send(news)
    }else{
        const categorNews = news.filter(n=>n.category_id === id);
        res.send(categorNews)
    }
})

app.listen(port, ()=>{
    console.log(`the dragon is runnig on ${port}`)
})