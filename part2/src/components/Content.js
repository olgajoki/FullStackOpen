import Part from "./Part"

const Content = ({ course}) => {

    console.log('content' , course.exercises)
    return (
        <div>
            <p>{course.name}&nbsp;
            <Part key={course.id} course={course}/>
            </p>

        </div>
    )
  }
  
  export default Content
