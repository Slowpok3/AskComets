import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import CreateAnswer from './createAnswer';
import AnswerDisplay from './answerDisplay';

export default function QuestionDisplay(){
    const {id} = useParams();
    const [page, setPage] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const tryApi = () => {
        setPage(page + 1);
    }
    const [questionDatas, setQuestionDatas] = useState({});
    useEffect(()=> {
        axios.get('/Questions/1', {params: {postId: id}}).then(res => {
            setQuestionDatas(res);
            setLoaded(true);
        }).catch(err =>{
            console.log(err);
          })
        
        
        
    }, [page]);

    if (!loaded){
        return (<h1>loading</h1>)
    }else{
        
        return (
            <div>
                <a href = "/"><button>Back</button></a>
                <h1>Question Id: {id}</h1>
                <h1>{questionDatas.data[0].postTitle}</h1>
                <h1>{questionDatas.data[0].postBody}</h1>
                <h1>posted by {questionDatas.data[0].userName}</h1>
                <h1>Class: {questionDatas.data[0].className}</h1>
                {/* <button onClick = {tryApi}>reload</button> */}
                <CreateAnswer postId = {id}></CreateAnswer>
                <AnswerDisplay postId = {id} />
               
            </div>
            
        )
    }
    
}


