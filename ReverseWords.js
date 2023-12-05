/*function reverseWords(sentence){
    let words=[];
    let currentWord='';

    const reverseString = (str) =>{
        let reversed='';
        for(let i=str.length-1;i>=0;i--){
            reversed+=str[i];
        }
        return reversed;
    };

    for(let i=0;i<sentence.length;i++)
    {
        if(sentence[i]!==' ')
        {
            currentWord+=sentence;
        }
        else{
            words.push(currentWord);
            currentWord='';
        }

    }

    words.push(currentWord);

    for(let i=0; i<words.length;i++)
    {
        words[i]=reverseString(words[i]);
    }

    let reversedSentence=words.join(' ');
    return reversedSentence;

}*/

//let s="This is a sunny day";

let s = prompt("Please enter a string:");

s=reverseWords(s);
//console.log(s.length);
console.log(s);

function reverseWords(s){

    //let words=s.split(' ');
    
    let words=[];
    let ind=0;
    let word='';

    for(let i=0;i<s.length;i++)
    {
        if(s.charAt(i)===' ')
        {
            words[ind]=word;
            ind++;
            word='';
        }
        else{
            word+=s.charAt(i);
        }

    }
    words[ind]=word;



    let rev='';

    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++)
        {
            rev=words[i].charAt(j)+rev;
        }
        words[i]=rev;
        rev='';
    }

    //s=words.join(' ');

    
    s='';

    for(let i=0;i<words.length;i++)
    {
        s=s+words[i]+' ';
    }

    return s.slice(0,s.length-1);

}
