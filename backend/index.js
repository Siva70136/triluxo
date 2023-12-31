const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017', {
	dbName: 'siva',
	useNewUrlParser: true,
	useUnifiedTopology: true
},console.log('Connected to siva database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
	
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});
const User = mongoose.model('clients', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", async(req, res) => {
    
	try {
        const users = await User.find();
       res.json(users);
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
	// You can check backend is working or not by
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
