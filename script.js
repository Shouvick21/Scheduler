
// ---------------------navber scction{


    let logo=document.querySelector(".logo")
    let signup=document.querySelector("#signup")
    let login=document.querySelector("#login")
    let navber=document.querySelector(".navber")
    let menuopen=document.querySelector("#menuopen")
    let menuclose=document.querySelector("#menuclose")
    menuopen.addEventListener("click",()=>{
        console.log("yes")
        navber.style.transform="translatex(0%)"
        menuopen.style.display="none"
        menuclose.style.display="block"
        
    })
    menuclose.addEventListener("click",()=>{
        console.log("yes")
        navber.style.transform="translatex(100%)"
        menuopen.style.display="block"
        menuclose.style.display="none"
        
    })

    signup.addEventListener("click" , ()=>{

window.location.href = "./pages/signup.html"
})

login.addEventListener("click" , ()=>{
window.location.href = "./pages/login.html"
})
logo.addEventListener("click",()=>{
    window.location.href=window.location.href
})



document.getElementById('admin').addEventListener('click', function() {
    window.location.href = './pages/admin.html';
    });






// -----------------------------------}




//------------ feedback portion-----{
let prev_btn=document.querySelector("#prev_btn")
let next_btn=document.querySelector("#next_btn")
let feedbackinnercard1=document.querySelector("#feedbackinnercard1")
let feedbackinnercard2=document.querySelector("#feedbackinnercard2")
let feedbackinnercard3=document.querySelector("#feedbackinnercard3")



let count=1


const nextcard=()=>{
    if(count<3){
        prev_btn.style.backgroundColor="black"
        
        if (count==1){
            
            feedbackinnercard1.style.position="absolute"
            feedbackinnercard1.style.visibility="hidden"
            feedbackinnercard3.style.position="absolute"
            feedbackinnercard3.style.visibility="hidden"
            feedbackinnercard2.style.position="relative"
            feedbackinnercard2.style.visibility="visible"
            
        }
        if (count==2){
            feedbackinnercard1.style.position="absolute"
            feedbackinnercard1.style.visibility="hidden"
            feedbackinnercard2.style.position="absolute"
            feedbackinnercard2.style.visibility="hidden"
            feedbackinnercard3.style.position="relative"
            feedbackinnercard3.style.visibility="visible"
            next_btn.style.backgroundColor="gray"

            
        }
        count++
        console.log(count)
        
    }
}

const previouscard=()=>{
    if (count>1){
        next_btn.style.backgroundColor="black"
        if (count==3){
            feedbackinnercard1.style.position="absolute"
            feedbackinnercard1.style.visibility="hidden"
            feedbackinnercard3.style.position="absolute"
            feedbackinnercard3.style.visibility="hidden"
            feedbackinnercard2.style.position="relative"
            feedbackinnercard2.style.visibility="visible"


            

        }
        if (count==2){
            feedbackinnercard2.style.position="absolute"
            feedbackinnercard2.style.visibility="hidden"
            feedbackinnercard3.style.position="absolute"
            feedbackinnercard3.style.visibility="hidden"
            feedbackinnercard1.style.position="relative"
            feedbackinnercard1.style.visibility="visible"
            prev_btn.style.backgroundColor="gray"

        }
        count--
        console.log(count)

    }
}

prev_btn.addEventListener("click",previouscard)
next_btn.addEventListener("click",nextcard)
//----------------}-----------------------------------







