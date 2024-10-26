function printHelo(){
    console.log("hello!");
}
function Button() {

    return (
        <>
            <div >

                <button onClick={printHelo}>Click me</button>
            </div>
        </>

    );
}

export default Button;
