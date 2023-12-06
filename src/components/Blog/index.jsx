import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import Button from '../Button/Button'
import './style.scss';

const Blog = () => {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)
    const [pageCounts,setPageCounts] = useState(0)
    const [activePageNumber,setActivePageNumber] = useState(1)

    const loadPosts = async () => {
        setLoading(true)
        const responsePosts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await responsePosts.json()
        setPosts(posts);
        setLoading(false);
    };
    useEffect(()=>{
        loadPosts();
    }, [])
    /* هرموقعcalculatePageCount بر اساس  تعداد پست ها صدا زده شد  */ 
    useEffect(()=>{
        setPageCounts(calculatePageCount());
    }, [posts])

    const calculatePageCount = () => {
        if(posts.length % 4 > 0){
            return parseInt(posts.length / 4  + 1);
        }
        return parseInt(posts.length / 4);
    }
    const handleClickOnPages = useCallback((pageNumber) => {
        setActivePageNumber(pageNumber)
    },[]) 
    return(
        <div className="container blog-page">
            <h1>Blog</h1>
            {loading && <span>Loading</span>}
            {posts.length === 0 && <span>No posts</span>}
            {posts.length > 0 && (
                <ul className="listBlogs">
                    {posts.slice(4*activePageNumber ,4*(activePageNumber+1)).map((post) => (
                        <li key={`post-${post.id}`}>
                            <figure className="img--news">
                                <Image ImgSrc={post.image} />
                            </figure>
                            <div className="info-news">
                                <Link to={`/blog/${post.id}`} className="title--news">
                                    {post.title}
                                </Link>
                                <span className="date"> October 4, 2023  </span>
                                <p className="desc">
                                    {post.content}
                                </p>
                            </div>
                        </li>
                    ))}
                   
                </ul>
            )}
            <ul className="pagination">
                {new Array(pageCounts).fill(0).map((item,index) =>(
                    <li className={activePageNumber === index+1 ? 'active' : ''}>
                        <Button className={'button'} 
                                handleClick = {() => {
                                    handleClickOnPages(index+1)
                                }}
                        > 
                        {index + 1} 
                        </Button>
                    </li>
                ))}
               
            </ul>

        </div>
    )
}

export default Blog