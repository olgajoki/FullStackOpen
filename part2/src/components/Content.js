//course exercises
const Part = ({ courseContent }) => {

    console.log('part', courseContent.exercises)

    if(courseContent.id !== 0){
    return (
        <span>
            {courseContent.exercises}
        </span>
        
    )

  }

else{
    return (

        <div>check again</div>
    )
}
}
//course contents
const Content = ({ courseContent }) => {

    console.log('content' , courseContent.exercises)


    return (
        <div>
            <p>{courseContent.name}&nbsp;
            <Part courseContent = {courseContent}/>
            </p>
            
            

        </div>
    )
  }
  
  export default Content
