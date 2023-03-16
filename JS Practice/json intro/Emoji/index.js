function searchEmoji(){
    const input=document.getElementById("input").value
    // console.log(input);
    const tagsArray=[]
    emojiList.map((ele)=>{
    
        if(ele.tags.includes(input)){
            tagsArray.push(ele)
            // const container=document.getElementById("container")
            const table=document.getElementById("tableData")
            console.log(table);
            table.innerHTML +=`
            <tr id="icon">${ele.emoji}</tr> <br>
            <tr id="name">${ele.description}</tr><br>
            <tr id="tags">${ele.aliases[0]}</tr><br>
            `
            
        }
        
    })
    
}

