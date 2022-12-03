function User6(props) {
    const data = "Pulkit Chaudhari"
    return (
        <div>
            <h2>User6 Component</h2>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
}

export default User6;