
const PopUp = (props)=>{
    return (
        <div>
            <h1>Invalid Input</h1>
          { props.emptySubmit && <p>Please enter a valid name and age(non-empty values)</p>}
          {props.negativeAge && <p>Please enter a valid age (&gt;0)</p>}
        </div>
    )
}

export default PopUp;