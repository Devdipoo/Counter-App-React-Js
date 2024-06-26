import {useState} from 'react'

const MyComponent = () => {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    
    const updateName = () => {
        setName("Spongebob");
    }

    const IncrementAge = () => {
        setAge(age + 1);
    }

  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name: </button>

        <p>Age: {age}</p>
        <button onClick={IncrementAge}>Increment Age: </button>
    </div>
  )
}

export default MyComponent