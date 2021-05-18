let button = document.querySelectorAll(".btn")
let last;
for(let i=0; i<button.length; i++){

    button[i].addEventListener("click",function(e){
        let ele = e.target
        
        //set style of current button
        ele.style.background="white"
        ele.style.color="#7b0d82"

        // remove style last selected button
        if(last){
            last.style.background="#dcdbdb"  //    background: #dcdbdb
            last.style.color ="black"
        }

        last = ele;  // update last button
    })

}