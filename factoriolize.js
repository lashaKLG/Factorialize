function lasha(n){
    if(n < 0){
        return 'error'
    }
    else if(n === 0 || n === 1)
    return 1;
    else{
        return( n * lasha(n-1) );
    }
}
console.log(lasha(5))