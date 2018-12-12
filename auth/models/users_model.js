var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    hashed_password: String
});
var ObjectId = mongoose.Schema.Types.ObjectId;
var DiarySchema = new Schema({
    user: ObjectId,
    journal_content: {type:String, default: "Journal"},
    date: {type: Date, default: Date.now},
    title: {type: String, default:"Title"}
});
mongoose.model('User', UserSchema);
mongoose.model('Journal', DiarySchema);
