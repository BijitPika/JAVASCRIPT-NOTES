count=0;
function add(){
    let li=document.createElement("li");
    li.setAttribute("id","li"+count);
    var val=document.getElementById("txtval").value;
    var txtnode=document.createTextNode(val);
    li.appendChild(txtnode);

    var btn=document.createElement("button");
    btn.innerHTML ="Delete";
    btn.setAttribute("onclick",'remove("'+'li'+count+'")');
    li.appendChild(btn);

    count+=1;
    document.getElementById("lists").appendChild(li)
}

function remove(x){
    
    var listval=document.getElementById(x);
    document.getElementById("lists").removeChild(listval)
}