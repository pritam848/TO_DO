let btn=document.querySelector("button");

btn.addEventListener("click",function()
    {
        let t=document.getElementById("Task1").value;
        let li=document.querySelector("ol");
        let li1=document.createElement("li");
        li1.innerHTML=t;
        li1.className="list-group-item";
        li.appendChild(li1);
        document.getElementById("Task1").value=" ";
        document.getElementById("Task1").focus();
        let del=document.createElement("button");
        del.innerText="Delete";
        del.classList.add("delete");
        del.className="btn btn-danger ms-4";
        
        li1.appendChild(del);
        
   });
   let delbtn=document.querySelector("ol");
   delbtn.addEventListener("click",(event)=>
   {
       if (event.target.nodeName=="BUTTON")
       {
          event.target.parentElement.remove();
       }
        
   }
)
   
