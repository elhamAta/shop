import React from "react";
import { useParams } from "react-router-dom";
const DetailBlog = () => {
    const {id} = useParams();
    console.log("id:",id)

    return(
        <div className="detail-page">
            <div className="main">
                <h1>Detail Blog</h1>
            </div>
        </div>
    )
};

export default DetailBlog;