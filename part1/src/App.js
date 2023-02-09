/*
1.1: kurssitiedot, step1
1.2: kurssitiedot, step2
//kuinka käy
*/

//header for page
const Header = (props) => {

  return(
    <h1>
      {props.course}
    </h1>
  )
}
//content for page
const Content = (props) => {

  return( <p>
    {props.part1}
    <br></br>
    {props.part2}
    <br></br>
    {props.part3}
  </p>
  )
}
//total number of exercises
const Total = (props) => {

  return(
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
    </div>
  )
}

export default App
