import React from 'react'

const BlogItem = (props) => {
    return (
        <div class="blog-item">
                            <div class="image-blog">
                                <img src={props.img} alt="/" />
                            </div>
                            <div class="blog-box">
                                <div class="blog-time">{props.date}</div>
                                <h5 class="Blog-title mb-0"><a href="#">{props.title}</a></h5>
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a href="#">
                                            <i class="fas fa-user-alt base-color"></i>
                                            <span>Jone Doe</span>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#">
                                            <i class="fas fa-comment base-color"></i>
                                            <span>{props.msj}</span>
                                        </a>
                                    </li>
                                </ul>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                                <div class="blog-link">
                                    <a href="blog-single-colorfull.html.htm">Read More...</a>
                                </div>
                            </div>
                        </div>
    )
}

export default BlogItem
