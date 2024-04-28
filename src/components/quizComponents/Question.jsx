import React, { useEffect, useState } from 'react'
import Clock from './Clock';



function Question({question, answer, correctAns, setGivenAns, setHasSubmitted, givenAns, timer, hasSubmitted}) {

    const [newOptions, setNewOptions] = useState(null)

    const [checkboxes, setCheckboxes] = useState({
      "checkbox0": false,
      "checkbox1": false,
      "checkbox2": false,
      "checkbox3": false,
    });

    function shuffleArray(array) {
      const newArray = [...array]; // Create a copy of the original array
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        // Swap elements at indices i and j
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    }


    // if(answer && correctAns){
    //   newOptions=shuffleArray([...answer,correctAns])

    // }
    

    useEffect(()=>{
      if(answer && correctAns){
        setNewOptions(shuffleArray([...answer,correctAns]))
      }
    }, [question])
  //   }
   
  // },[])
    useEffect(()=>{
      if(hasSubmitted===false && timer===0){
        setGivenAns(prev=>[...prev,
          {
            correctAns: correctAns,
            givenAnswer: "NA"
          }
          ]
          
          
          // [...prev, "NA"]
        )
        // localStorage.setItem("givenAns",JSON.stringify(givenAns)) //if we want to use local storage to store the answers then we dint need to send the data to the score orute in a state, we can directly retruve the answers in score route from local storage, but for now avoiding it.
      }
    }, [timer])

    const handleSubmit=(option, checkboxName)=>{
      setGivenAns(prev=>[...prev,
        {
          correctAns: correctAns,
          givenAnswer: option
        }
        ])
        // localStorage.setItem("givenAns",JSON.stringify(givenAns))
      setHasSubmitted(true)
      // setCheckboxes(prev=>(
      //   {
      //     ...prev,
      //     checkboxName:true
      //   }
      // ))
      // e.target.checked= false
    }


  return (
    <div className='flex justify-center items-center flex-col'>
      {/* <h1 className='text-white'>Timer</h1> */}
      <Clock timer={timer}/>
      <h3 className='text-gray-300 mb-12 text-xl tracking-wider'>{question}</h3>

      <div className='flex justify-around items-center flex-wrap w-full gap-8'> 

      {
        newOptions?.map((item, index)=>{
          return (
            <div className={`flex justify-start items-center bg-[#151414] px-4 py-2 w-5/12 rounded-md cursor-pointer hover:bg-[#272523] text-white focus:${item===correctAns?"bg-[#168e14]":"bg-[#F4511E]"}`} key={`${item}-${index}`}>
              <input
              id={`${item}-${index}`}
                  type="radio"
                  name="answer"
                  value={item}
                  onChange={() =>
                    handleSubmit(item, `checkbox${index}`)
                  }
                />
              <label htmlFor={`${item}-${index}`} className='m-6'>{item}</label>
            </div>
          )
        })
      }
      </div>
     
    </div>
  )
}

export default Question