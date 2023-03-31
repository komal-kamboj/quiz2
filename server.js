const express =require('express')
const cors=require('cors')
const mongoose =require('mongoose')

const app=express()
const port =7000

app.use(cors())
app.use(express.json())

const uri ="mongodb+srv://kambojk1:Douglas@95@cluster0.ly35h4k.mongodb.net/Exam"

mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})


// Create a Schema object
const activitySchema = new mongoose.Schema({
    activity: { type: String, type: String},
});


// This Activitry creates the collection called activitimodels
const Activitymodel = mongoose.model('quizes', activitySchema);

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Db connnected")
})
app.get('/', (req, res) => {
    const task1 = new Activitymodel({
        name: 'Komal',
        sid: '300357751',
    });
    task1.save();
    // Activitymodel.sa([task1]);
    res.send(`<h1>Collection Added</h1>`);
});
app.listen(port, () => {
    console.log("Server is running on port:" + port);
});