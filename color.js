const parent=document.querySelectorAll("button")
const body=document.querySelector('body')
const heading=document.querySelector('h2')
parent.forEach((val)=>{
    val.addEventListener("click",(e)=>{
        const c=e.target.id
        
        
        switch (c) {
            case "red":
                body.style.backgroundColor=c
                heading.style.color="white"
                break;
            case "green":
                body.style.backgroundColor=c
                heading.style.color="white"
                break;
            case "blue":
                body.style.backgroundColor=c
                heading.style.color="white"
                break;
            case "yellow":
                    body.style.backgroundColor=c
                    heading.style.color="red"
                    break;
        
            default:
                break;
        }
    })
})
