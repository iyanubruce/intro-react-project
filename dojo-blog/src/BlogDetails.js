import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch"
const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, isPending, error} =useFetch('http://localhost:8000/blogs/'+ id)
    const history = useNavigate();
    
    const handleDelete = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        history('/');
      }) 
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>i'm loading bitch</div>}
            {error && <div>{error}</div>}
            {blog && 
           (
            <article>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div>{ blog.body }</div>
              <button onClick={handleDelete}>delete blog</button>
            </article>
          )}
        </div>
     );
}
 
export default BlogDetails;