import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuizDetails } from '../../hooks/quiz.hooks';
import { serialize } from '../../utils/paramsAppenderFunc';
import Question from '../../components/quizComponents/Question';
import Loader from '../../components/common/Loader';

function QuizPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [counter, setCounter]= useState(0)
  const [timer, setTimer]=useState(10)
  const [questionDetail, setQuestionDetail]= useState()
  const category= searchParams.get("category")
  const difficulty= searchParams.get("difficulty")

  const navigate= useNavigate()
   

    const query={
        amount:2,
        category: category,
        difficulty:difficulty,  //as we know, the value of const cant be chnaged after once it's initialized, so here we should have got alswas "" in difficulty, but when we update the difficultylevel, the value of difficulty in query is also getting changed , how is this possible.
        type:"multiple"
      }

    const {data, isLoading, status}= useQuizDetails(serialize(query))

    
    useEffect(()=>{
      let interval
      if(data?.length>0 && status==="success" && counter<=data?.length){
        
        if(counter===0){
          setCounter(prev=>prev+1)
          return
        }
          interval= setInterval(()=>{
            if(timer>0){
              setTimer(prev=>prev-1)
            }
            else{
              clearInterval(interval)
              if(counter<data?.length){
                setCounter(prev=>prev+1)
                setTimer(10)
              }
             else{
              navigate("/score")
            
             }
          
            }
          },1500)
      }
      return () => clearInterval(interval);
    }, [data, status, timer, counter])

    useEffect(() => {
      if(counter>0){
        setSearchParams({category:category,difficulty:difficulty,questionId:counter})
        
        for (const key in data){
          if(counter-1==key){
            setQuestionDetail(data[key])
          }
        }
          
      }
      
    }, [counter])
    

    
    console.log(data)
    const newIncorrectAns= questionDetail?.incorrect_answers?.map((item, index)=>{
      return item[key]
    })
    console.log(newIncorrectAns, "here")
    const answers=[...newIncorrectAns,questionDetail?.correct_answer]
    

  return (
    isLoading===true?
    <Loader/>
    :
    <div>
      <Question question={questionDetail?.question} answers={answers} correctAns={questionDetail?.correct_answer}/>
    </div>
  )
}

export default QuizPage