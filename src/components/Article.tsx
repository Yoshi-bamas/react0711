import React from 'react';
type Props = {
    title: string
    body: string
}

const Article = (props: Props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    );
}

export default Article;