function trans(s, n) {
    //write code here
    if(n==0){
        return s;
    }
    res = '';
    for(let i = 0; i<n;i++){
        if(s[i] <= 'Z' && s[i] >= 'A'){
            res += s[i].toLowerCase();
        }
        else if(s[i] <= 'z' && s[i] >= 'a'){
            res+= s[i].toUpperCase();
        }
        else{
            res += s[i];
        }
    }
    return res.split(' ').reverse().join(' ');
    
  }
  
  module.exports = {
    trans: trans,
  };
  