import React from 'react'
import SearchDetail from '../../components/SearchDetail';
import { fetchPosts } from '../api/api';


const searchDetailPage =  (props) => {
    // console.log(props)
  return (
        <div>
        <SearchDetail  user={props.user}/>
        </div>
  )
}


export const getUserByName = async (usrname) => {
    const allUsers = await fetchPosts();
    const user = allUsers.data.find(item => item.creator.name === usrname);
    if(user){
        return user;
    }
    else{
        return {}
    }
}


export const getStaticProps = async (context) => {
    const userName = context.params.searchInsId
    const user = await getUserByName(userName)
    
    return{
        props:{
            user:user,
        },
        revalidate:3600,
    }
}

export const getStaticPaths =  async () => {
    const allPosts = await fetchPosts();
    const paths =  allPosts.data.map((user) => ({params:{searchInsId:user.creator.name}}))
    return{
        paths:paths,
        fallback:false,
    }
    

    
}

//importing getFilteredPosts function
import { getFilteredPosts } from "../api";

const [posts, setPosts] = useState([]);

useEffect(() => {
  const fetchPosts = async () => {
    const selectedFilter = state.selectedFilter;

    const filteredPosts = await getFilteredPosts(selectedFilter);

    setPosts(filteredPosts);
  };

  fetchPosts();
}, [selectedFilter]);



export default searchDetailPage
