/*
1.1-1.5
*/

/*

//header for page
const Header = (props) => {

  console.log(props)
  return(
    <h1>
      {props.course.name}
    </h1>
  )
}
// parts and exercises
const Part = (props) =>{

  console.log(props)
  return(
    <p>
      {props.part1}
      {props.part2}
      {props.part3}

    </p>
  )
}

//content for page
const Content = (props) => {

  console.log(props)
  return( 
  <div>
    <Part part1= {props.parts[0].name + " " + props.parts[0].exercises}/>
    <Part part2= {props.parts[1].name + " " + props.parts[1].exercises}/>
    <Part part3= {props.parts[2].name + " " + props.parts[2].exercises}/>

  </div>
  )

}
//total number of exercises
const Total = (props) => {

  return(
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

*/


/*
counter
*/

/*
import { useState } from 'react'


const App = () => {

  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () =>{
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  
  } 

  
const Display = ({counter}) => 
    <div>{counter}</div>
  
  

  const Button = ({handleClick, text}) => (
      <button onClick={handleClick}>
        {text}
      </button>
  )
  

  console.log('rendering...', counter)

  return (
    <div>
      <Display counter = {counter}/>
      <Button handleClick = {increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
      </div>
  )
}


*/

/* 
1.6-1.10
*/

import { useState } from 'react'

//header for page
const Header = (props) => {

  console.log(props)
  return(
    <div>
    <h1>
      {props.feedbackHeader}
    </h1>
    <h1>
      {props.statisticsHeader}
    </h1>
    </div>
  )
}

const Button = ({handleClick, text}) => (

  <button onClick={handleClick}>
    {text}
  </button>

)

  //show statistics
const StatisticLine = (props) => {
  console.log('hyva, neutraali, huono', props.value)

  return(
    <div>
    {props.text} {props.value}
    {props.sumText} {props.sum}
    {props.avgText} {props.average}
    {props.posText} {props.positive} 
    </div>
  )
}


const Statistics = (props) => {

// no feedback has been given 
  if(props.sum === 0){
    return( 
      <div>
        No feedback given    
      </div>
    )
  }
// feedback lines
  else{
    return( 
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.sum} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive} />

      </div>

    )
  }

}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [allReviews, setAll] = useState([])
  console.log('rendering with good, neutral, bad: ', good, neutral, bad)


  const increaseByOneGood = () => {
    console.log('increasing, value good before', good)
    setGood(good + 1)

  }

  const increaseByOneNeutral = () => {
    console.log('increasing, value neutral before', neutral)
    setNeutral(neutral + 1)
  }

  const increaseByOneBad = () => {
    console.log('increasing, value bad before', bad)
    setBad(bad + 1)
  }


  const feedbackHeader = 'give feedback'
  const statisticsHeader = 'statistics'

//initiating statistics
  const stats = {

    feedback: [
      {
      text: 'good',
      good: [good]  
      },
      {
        text: 'neutral',
        neutral: [neutral]
      },
      {
        text: 'bad',
        bad: [bad]
      }   
    ],
    numbers: [
      {
        text: 'all',
        sum: good + neutral + bad
      },
      {
        text: 'average',
        average: (good + neutral + bad) / 3
      },
      {
        text: 'positive',
        positive: (good / (good + neutral + bad)) * 100
      }

    ]

  }

  return (
    <div>
      <Header feedbackHeader = {feedbackHeader}/>
      <Button
        handleClick={increaseByOneGood}
        text='good'
      />
      <Button
        handleClick={increaseByOneNeutral}
        text='neutral'
      />
      <Button
        handleClick={increaseByOneBad}
        text='bad'
      />
      <Header statisticsHeader = {statisticsHeader}/>

      <Statistics goodText = {stats.feedback[0].text} good = {stats.feedback[0].good}
        neutralText = {stats.feedback[1].text} neutral = {stats.feedback[1].neutral}
        badText = {stats.feedback[2].text} bad = {stats.feedback[2].bad}
        sumText = {stats.numbers[0].text} sum = {stats.numbers[0].sum}
        avgText = {stats.numbers[1].text}average = {stats.numbers[1].average}
        posText = {stats.numbers[2].text} positive = {stats.numbers[2].positive}/>

    </div>
  )

}

export default App