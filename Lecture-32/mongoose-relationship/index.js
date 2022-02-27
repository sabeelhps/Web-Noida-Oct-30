const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/mongo-relationship')
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: [
        {   
            _id: { id: false },
            city: String,
            state: String,
            country: String
        }
    ]
});


userSchema.pre('save', function () {
    console.log("Before saving a Person");

});

userSchema.post('save', function () {
    console.log("After saving a person");
});



const User = mongoose.model("User", userSchema);






const makeUser = async () => {
    const mayank = new User({ name: 'Mayank', email: 'mayank@gmail.com' });
    console.log(mayank);
    await mayank.save();
}


makeUser();

// const addAdress = async (id) => {
    
//     const user = await User.findById(id);

//     user.address.push({
//         city: 'Mumbai',
//         state: 'Maharashtra',
//         country: 'India'
//     });

//     await user.save();

//     console.log(user);

// }

// addAdress('621b54ca86b073c57979a5d6');










