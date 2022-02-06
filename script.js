
    document.getElementById("form1").onsubmit=function() {
           feat = parseInt(document.querySelector('input[name = "feat"]:checked').value);
           cook = parseInt(document.querySelector('input[name = "cook"]:checked').value);
           dat = parseInt(document.querySelector('input[name = "dat"]:checked').value);
           lang = parseInt(document.querySelector('input[name = "lang"]:checked').value);
           code = parseInt(document.querySelector('input[name = "code"]:checked').value);
           orig = parseInt(document.querySelector('input[name = "orig"]:checked').value);
           pop = parseInt(document.querySelector('input[name = "pop"]:checked').value);
           exp = parseInt(document.querySelector('input[name = "exp"]:checked').value);
           err= parseInt(document.querySelector('input[name = "err"]:checked').value);
           comp = parseInt(document.querySelector('input[name = "comp"]:checked').value);
    
    
           result = feat + cook + dat + lang + code + orig + pop + exp + err + comp;
    
        document.getElementById("grade").innerHTML = result;
    }
    