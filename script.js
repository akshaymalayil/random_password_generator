const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
    'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 
    'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't',
     'u', 'v', 'w', 'x', 'y', 'z','0', '1', '2', '3', '4', '5', '6', '7',
      '8', '9','!', '@', '#', '$', '%', '^', '&', '*', '(', ')','-', '_',
       '=', '+', '[', ']', '{', '}', '|', '\\',';', ':', '\'', '"', ',', 
       '.', '<', '>', '/', '?','`', '~', '€', '£', '¥', '§', '±',  
       '÷','°', '©', '®', '™']

let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")

let length = document.getElementById("size")

function generate()
{
    pass1.innerText =""
    pass2.innerText =""

    let l = length.value
    
    for(let i = 0; i<l; i++)
    {
    
        let random1 = Math.floor(Math.random()*characters.length)
        pass1.innerText += characters[random1]


        let random2 = Math.floor(Math.random()*characters.length)
        pass2.innerText += characters[random2]


    }
}