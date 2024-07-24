
function App(props)
{
    return(
        <div class="gallery">
            <img class="app" src={props.img} alt="dog"></img>
            <p class="para">{props.petname}</p>

        </div>
    )
}
export default App