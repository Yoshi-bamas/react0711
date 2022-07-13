import React from 'react';
import {useState} from 'react'
import PublishButton from './PublishButton'

type Props = {
    title: string
}

const Article = (props: Props) => {
    const [isPublished, setIsPublished] = useState<boolean>(false);
    const publishArticle = () =>{
        setIsPublished(!isPublished)
    }
    const [text, setText] = useState<string>('');
    const putArticle = (event: any) => {
        setText(event.target.value)
    }

    return(
        <div>
            <h2>{props.title}</h2>
            <input 
              onChange={(event) => putArticle(event)}
              type={'text'}
              value={text}
            />
            <p>{text}</p>
            <PublishButton isPublished = {isPublished} onClick = {publishArticle} />
        </div>
    );
}

export default Article;