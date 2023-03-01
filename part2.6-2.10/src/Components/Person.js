const Person = ({ name }) => {


    console.log(name.number)
    //show name and number
    return (
        <div id='filter'>
            {name.name}&nbsp;
            {name.number}&nbsp;

        </div>

    )

}




export default Person
