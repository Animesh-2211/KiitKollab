const { default: axios } = require("axios");

//created axio client to create endpoint
const axiosClient=axios.create({
    baseURL:'https://backend-major.vercel.app'

    // baseURL:'https://backend-major.vercel.app/'
});

const createUser=(data)=>axiosClient.post('/user',data)
const getUserByEmail=(email)=>axiosClient.get('/user/'+email)

const createPost=(data)=>axiosClient.post('/post',data);

const getAllPost=()=>axiosClient.get('/post');

const onPostLike=(postId,data)=>axiosClient.put("/post/like/"+postId,data)

//Add New Comment
const addComment=(data)=>axiosClient.post('/comment',data);

//Delete Comment
const deleteComment=(commentId)=>axiosClient.delete("/comment/"+commentId)
export default{
    createUser,
    getUserByEmail,
    createPost,
    getAllPost,
    onPostLike,
    addComment,
    deleteComment
}