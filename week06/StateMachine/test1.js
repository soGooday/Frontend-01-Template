/**
 * 作业一 匹配一个固定的字符串abababx
 */
matcm('abababx','132abababx1scs')
/**
 * 当前的检测是数值
 * @param {string} pattern 
 * @param {string} string 
 */
function matcm(pattern,string){
    let going = ''
    console.log(string)
    going = fundA;
    for(let element of string){
        going = going(element); 
    } 
     

    if(going === end){
        console.log(`字符串${string}中有指定字符${pattern}`)
    }else{
        console.log(`字符串${string}中并没有指定字符${pattern}`)
    }
}

function fundA(p){
    if(p === 'a'){
        return fundB;
    }else{
        return fundA;
    }

}
function fundB(p){
    if(p === 'b'){
        return fundA1;
    }else{
        return fundA;
    } 
}
function fundA1(p){
    if(p === 'a'){
        return fundB1;
    }else{
        return fundA;
    } 
}
function fundB1(p){
    if(p === 'b'){
        return fundA2;
    }else{
        return fundA;
    } 
}
function fundA2(p){
    if(p === 'a'){
        return fundB2;
    }else{
        return fundA;
    } 
}
function fundB2(p){
    if(p === 'b'){
        return fundX;
    }else{
        return fundA;
    } 
}
function fundX(p){
    if(p === 'x'){
        return end;
    }else{
        return fundA;
    } 
}
function end(p){
    return end;
}
