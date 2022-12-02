
    const response =  await fetch('/loadWindow')
    const text = await response.text()

    let saveButton = document.querySelector("#save")
    let loadButton = document.querySelector("#load")
    let field = document.querySelector("#field")
    field.value = text;
    
    saveButton.addEventListener("click", (e)=>{
        console.log(field.value)
        let fieldContent = field.value
        const fieldObj = {fieldContent};
        const info = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fieldObj)
        };

        fetch('/btnSave',info);
        field.value = ""

    })

    loadButton.addEventListener("click", async (e)=>{

        const res = await fetch('/btnLoad')
        const json = await res.json()
        field.value = json.fieldObj
    })

