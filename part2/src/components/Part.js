const Part = ({ course }) => {

    console.log('part', course.id)

    if(course.id != 0){
    return (
        <span>
            {course.exercises}
        </span>
    )
  }

else{
    return (

        <div>check again</div>
    )
}
}
  
  export default Part