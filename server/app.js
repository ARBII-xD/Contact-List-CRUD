const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');


URI = process.env.URI
mongoose.connect(URI, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err)}
  );



const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});



const Contact = mongoose.model('Contact', contactSchema);




const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// create users
app.post('/user/add' , async(req, res)=>{
    // console.log(req.body);
    const newUser = await Contact.create(req.body);

    res.status(200).json({
        message: 'User added successfully',
        newUser
    });
})



// view users
app.get('/user/view' , async(req, res)=>{
    const allUsers = await Contact.find();

    res.status(200).json({
        message: 'Users fetched successfully',
        allUsers
    });
})



// delete users
app.delete('/user/delete/:id' , async(req, res)=>{
    const deletedUser = await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message: 'User deleted successfully',
        deletedUser
    });
})




// update users
app.put('/user/update/:id' , async(req, res)=>{
    const updatedUser = await Contact.findByIdAndUpdate(req.params.id, req.body);
    // const updatedUser = await Contact.find((user)=>{
    //     if(user._id == req.params.id){
    //         user.name = req.body.name;
    //         user.email = req.body.email;
    //         user.phone = req.body.phone;
    //         user.address = req.body.address;
    //     }
    // })

    res.status(200).json({
        message: 'User updated successfully',
        updatedUser
    });
})

app.get('/specific/:id' , async(req,res)=>{
    const specificUser = await Contact.findById(req.params.id);

    res.status(200).json({
        message: 'User fetched successfully',
        specificUser
    });
})



app.listen(5000, () => {
    console.log('Server started on port 5000');
});