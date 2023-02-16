/**
 * 
 * App
    Course
        Header
        Content
            Part
            Part
*/
import Content from "./Content"

const Course = ({ course }) => {

const sumArray = [course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises];

const initialValue = 0;
const sumWithInitial = sumArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log('summa on' , sumWithInitial);

    return (
        <div>
        <h1>{course.name}</h1>

            {(course.parts).map(course  =>
                <Content key={course.id}course = {course}/>
                )}
        <p><b>total of exercises {sumWithInitial}
        </b>
        </p>
                
        </div>

    )

  }

  export default Course

