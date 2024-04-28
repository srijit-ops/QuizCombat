import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuizDetails } from '../../hooks/quiz.hooks';
import { serialize } from '../../utils/paramsAppenderFunc';
import Question from '../../components/quizComponents/Question';
import Loader from '../../components/common/Loader';

function QuizPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [counter, setCounter]= useState(() => {
    // Initialize counter with the value from URL parameters, default to 0 if not present
    return parseInt(searchParams.get('questionId')) || 0;
  })
  const [timer, setTimer]=useState(10)
  const [questionDetail, setQuestionDetail]= useState(null)
  const [givenAns, setGivenAns] = useState(
    // JSON.parse(localStorage.getItem("givenAns"))?.length>0?JSON.parse(localStorage.getItem("givenAns")):
    [])
  const [hasSubmitted, setHasSubmitted] = useState(false)
  // const [incorrectAns, setIncorrectAns] = useState(null)
  const category= searchParams.get("category")
  const difficulty= searchParams.get("difficulty")

  const navigate= useNavigate()
   

    const query={
        amount:3,
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
            if(timer>0 && hasSubmitted==false){
              setTimer(prev=>prev-1)
            }
            // else if(timer>0 && hasSubmitted){

            // }
            else if(timer===0 || (timer>0 && hasSubmitted)){
              clearInterval(interval)
              // if(hasSubmitted===false){
              //   console.log("it's false")
              //   setGivenAns(prev=>[...prev,
              //     {
              //       correctAns: questionDetail?.correct_answer,
              //       givenAnswer: "NA"
              //     }
              //     ]
                  
                  
              //     // [...prev, "NA"]
              //   )
              // }
              if(counter<data?.length){
                setCounter(prev=>prev+1)
                setTimer(10)
                setHasSubmitted(false)
                
              }
             else{
              navigate("/score", {state: {finalGivenAns: givenAns}})
              
            
             }
          
            }
            // else if(timer===0 && hasSubmitted==false){

            // }
          },1500)
      }
      return () => clearInterval(interval);
    }, [data, status, timer, counter, givenAns])

    useEffect(() => {
      if(counter>0){
        setSearchParams({category:category,difficulty:difficulty,questionId:counter})
        // setHasSubmitted(false)
        // for (const key in data){
        //   if(counter-1==key){
        //     setQuestionDetail(data[key])
        //   }
        // }
            if(data){
              setQuestionDetail(data[counter-1])
            }
            
      }
      
    }, [counter, data])



    // useEffect(()=>{
    //   questionDetail?.incorrect_answers.push(questionDetail?.correct_answer)
    //   // setIncorrectAns(questionDetail?.incorrect_answers)
    //   // console.log(questionDetail?.incorrect_answers)
    // }, [questionDetail])

    
    

  return (
    isLoading===true?
    <Loader/>
    :
    <div className='sm:px-5 px-4 pt-8'>
      {/* {console.log(incorrectAns, "ina")} */}
      <Question question={questionDetail?.question} answer={questionDetail?.incorrect_answers} correctAns={questionDetail?.correct_answer} setGivenAns={setGivenAns} setHasSubmitted={setHasSubmitted} givenAns={givenAns} timer={timer} hasSubmitted={hasSubmitted}/>
      {/* <button onClick={()=>setCounter(prev=>prev+1)} className='text-white'>next</button>
      <button onClick={()=>setCounter(prev=>prev-1)} className='text-white'>prev</button> */}
    </div>
  )
}

export default QuizPage