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

    console.log('course', course.parts[0].exercises, 'dwdw')
    console.log('course', (course.parts).length, 'dwdw')


    //adding exercises to array for creating sum
    const sumArray = [];

    for(let i = 0; i < (course.parts).length; i++){
        sumArray.push(course.parts[i].exercises)
        console.log('array on' , sumArray);

    }

    console.log('sitten' , sumArray);

    const initialValue = 0;
    const sumWithInitial = (sumArray).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );

    console.log('summa on' , sumWithInitial);
//course names
    return (
        <div>
        <h1>Web development curriculum</h1>
            <h2>{course.name}</h2>

            {(course.parts).map(courseContent  =>
                <Content key={course.parts.id} courseContent = {courseContent}/>
                )}    
        
            <p><b>total of exercises&nbsp;
                {sumWithInitial}
            </b>
            </p>

                
        </div>

    )

  }

  export default Course

