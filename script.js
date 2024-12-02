//WRITE A FUNCTION TO FIND THE LONGEST COMMON PREFIX STRING AMONGST AN ARRAY OF STRINGS.
// IF THERE IS NO COMMON PERFIX, RETURN AN EMPTY STRING.

const longestPerfix = (begins) => {
    if (begins.lenght === 0) return "";
    
    let start = begins[0];

    for (let i = 1; i < begins.lenght; i++){
        while(begins[i].indexOf(start) !== 0){
            start = start.slice(0,-1);
            if (start ==="")return "";
        }
    }
    return start;
};