window.onload = ()=>{
    const rootElement = document.getElementById("root")
    // rootElement.innerHTML = "Hello from my first SPA"

    const button = document.createElement("button")
    button.innerHTML = "Click me for current date"

    button.addEventListener("click", ()=>{
        button.innerHTML = new Date().toString();
    })

    rootElement.appendChild(button);

    // const ints = [1,2,3,4,5]

    // ints.forEach(i => {
    //     let li = document.createElement("li")
    //     li.innerHTML = i
    //     rootElement.appendChild(li);
    // });

    const days = ["Litinin", "Talata", "Laraba", "Alhamis", "Lahadi"]
    days.forEach(e => {
        let li = document.createElement("li");
        li.innerHTML = e;
        rootElement.appendChild(li)
    })

}