import {React, useEffect, useState} from 'react'
import axios from 'axios';
import SinglePost from './SinglePost';
function Post() {

    const [posts, setPosts] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    useEffect(()=>{
        getPosts();
    },[]);
    const getPosts = async () =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
    }

    const handleChange = (e) => {
        setSearchKeyword(e.target.value);
        
    }
    const handleClick = e =>{
        if(searchKeyword==="") getPosts();
        const newPosts = posts?.filter(post => post.title.toLowerCase().includes(searchKeyword.toLowerCase()));
        setPosts(newPosts);
    }
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Post</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
        <input onChange={handleChange} value={searchKeyword} type='text' placeholder='Searh here...' style={{width:"300px", padding:"4px"}} />
        </div>
        <div style={{marginTop:"10px", display:"flex", justifyContent:"center"}}>
        <button style={{width:"200px", padding:"10px",borderRadius:"5px", color:"white", background:"blue", outline:"none", border:"0px"}} onClick={handleClick}>Search</button>
        </div>
       <SinglePost posts={posts}/>
    </div>
  )
}

export default Post