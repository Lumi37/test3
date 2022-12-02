    
    let subButton1 = document.querySelector("#submit1")
    let subButton2 = document.querySelector("#submit2")
    let textValue = document.querySelector("#field")
    
    subButton1.addEventListener("click", (e)=>{
        console.log(textValue.value)
        let tvalue = textValue.value
        const textInfo = {tvalue};
        
        const headerInfo = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(textInfo)
        };
        
        
        fetch('/b',headerInfo);
        textValue.value = ""

    })

    subButton2.addEventListener("click", async (e)=>{

        const res = await fetch('/b')
        const json = await res.json()
        textValue.value = json.textInfo
    })

