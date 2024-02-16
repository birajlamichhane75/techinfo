let {user,password} = process.env
export const connectstr = "mongodb+srv://"+user+":"+password+"@cluster0.npihanx.mongodb.net/post?retryWrites=true&w=majority"
export const connectstr1 = "mongodb+srv://"+user+":"+password+"@cluster0.npihanx.mongodb.net/userinfo?retryWrites=true&w=majority"