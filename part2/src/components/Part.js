const Part = ({ courses }) => {

    console.log('part', courses.id)

    if(courses.id != 0){
    return (
        <span>
            {courses.exercises}
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