// fetch('https://api.quotable.io/quotes/random')
// .then(data=data.json())
// .then(quotedata =>{

// })
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://api.quotable.io/random", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        const quote = result.content;
        var auth = result.authorSlug;
        var newAuth="";
        newAuth = auth[0].toUpperCase();
        for(var i=1;i<auth.length;i++){
            if(auth[i]==="-"){
                newAuth+=" ";
                newAuth+=auth[i+1].toUpperCase();
                i++;
            }
            else newAuth+=auth[i];
        }
        //console.log(auth);
        const displayText = `${quote}<br><br>- ${newAuth}`
        document.getElementById('qid').innerHTML = displayText;
        //document.getElementById('auth').innerHTML = auth;
        //console.log(quote);
    })
    .catch((error) => console.error(error));