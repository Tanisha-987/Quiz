let s=document.getElementById("start1")
let div1=document.getElementById("div")
let n=document.getElementById("next1")
let r=document.getElementById("result1")
let d2=document.getElementById("div2")
let o=document.getElementsByClassName("opt1")
let oo=document.getElementsByClassName("option")

div1.style.display="none"
d2.style.display="none"

n.style.display="none"
r.style.display="none"
s.addEventListener('click',function()
{
    s.remove()
    div1.style.display="block"
    n.style.display="block"
})

let ques=[
    {
        Ques: "QUES 1: What is the full form of JS?",
        a:  "Just Sript",
        b:  "Java Style",
        c:  "Jscript",
        d:  "Java Script", 
        r:  "d"
    },
    {
        Ques: "QUES 2: Inside which HTML element do we put the JavaScript?",
        a:  "< scripting >",
        b:  "< JS >",
        c:  "< Javascript >",
        d:  "< script >",
        r:  "d"
    },
    {
        Ques: "QUES 3: The external JavaScript file must contain the < script > tag ",
        a:  "True",
        b:  "false",
        c:  "May Be",
        d:  "None",  
        r:  "b"
    },
    {
        Ques: "QUES 4: Which company developed the JavaScript ?",
        a:  "Netscape",
        b:  "Bell labs",
        c:  "Sun Microsystems",
        d:  "IBM",
        r:  "a"
    },
    {
        Ques: "QUES 5: Which of the following is not a reserved word in JavaScript?",
        a:  "interface",
        b:  "throws",
        c:  "program",
        d:  "short",
        r:  "c"
    }
]

let len=ques.length
let l1=document.getElementById("label1")
let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let four=document.getElementById("four")

let count=0
let i=0;

function next()
{
    l1.textContent=ques[i].Ques
    one.textContent=ques[i].a
    two.textContent=ques[i].b
    three.textContent=ques[i].c
    four.textContent=ques[i].d
}

let ans;
function result()
{
    ans=null

    for(let j=0;j<o.length;j++) 
    {
        if(o[j].checked)
        {
            ans=o[j].value
            break; 
        }       
    }
    
return ans;   
}

function submit()
{
    const  ans1 = result()

    let cr=ques[i].r
        if(ans1==cr)
        {
            count++;
        }
        i++;
        
        if(i<len)
        {
            next();
               
        }
   
        else
        {   
            n.style.display="none"
            div1.style.display="none"
            d2.style.display="block"
            d2.style.color="white"
            
            if(count<3)
            {
                d2.innerHTML="Keep Trying !!<br>"
                d2.innerHTML+= "Score :<span id='ccc'>" + count + "</span> out of <span id='pp'> 5 </span>";
                let ccc = document.getElementById("ccc");
                let ppp = document.getElementById("pp");
                ccc.style.cssText = "color:greenyellow !important; font-size:80px; text-shadow:6px 6px 7px deeppink";
                ppp.style.cssText = "color:yellow !important; font-size:80px; text-shadow:6px 6px 7px deeppink;";
                
            }
            else
            {
                d2.innerHTML="Congratulations !!<br>"
                d2.innerHTML+= "Score :<span id='ccc'>" + count + "</span> out of <span id='pp'> 5 </span>";
                let ccc = document.getElementById("ccc");
                let ppp = document.getElementById("pp");
                ccc.style.cssText = "color:greenyellow !important; font-size:80px; text-shadow:6px 6px 7px deeppink";
                ppp.style.cssText = "color:yellow !important; font-size:80px; text-shadow:6px 6px 7px deeppink;";
                
                //classname use karenge to array to lgega because classs for same id for unique  d2.innerHTML+= "Score :<span id='ccc'>" + count + "</span> out of <span class='pp'> 5 </span>";
                // let ccc = document.getElementById("ccc");
                // let ppp = document.getElementsByClassName("pp");
                // ccc.style.cssText = "color:greenyellow !important; font-size:140px; text-shadow:6px 6px 7px white;";
                // ppp[0].style.cssText = "color:red !important; font-size:100px; text-shadow:6px 6px 7px white;";
            }
        }
     
    }
n.addEventListener('click',submit)

next()


for (let l = 0; l < oo.length; l++) {
    oo[l].addEventListener('click', function() 
    {
        // Sabhi radio buttons ka background color reset karna
        for (let m = 0; m < o.length; m++) 
        {
            o[m].style.backgroundColor = "";
        }
        // Selected radio button ka background color change karna
        o[l].checked = true;
        o[l].style.backgroundColor = "pink";
    });
}
