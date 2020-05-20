/**
 * 可选作业，随机匹配随机的字符串
 */
matcm('~/~','i am ab/////~/~abx! hahaha!')
/**
 * 当前的检测是数值
 * @param {string} pattern 
 * @param {string} string 
 */
function matcm(pattern,string){ 
    console.log(string)
    let going = fund1;
    let num = 0
    if(pattern.length === 1){
        going = fund2
        for(let element of string){     
            going = going(pattern[num],element);  
        } 
    }else{
        for(let element of string){     
            going = going(pattern[num],element); 
            if(going === fund1){
                num=0;
            }else{
                num++;
            } 
        }  
    } 
    if(going === end){
        console.log(`字符串${string}中有指定字符${pattern}`)
    }else{
        console.log(`字符串${string}中并没有指定字符${pattern}`)
    }
}

function fund1(first,second){
    if(first === second){
        return fund2;
    }else{
        return fund1;
    }
}
function fund2(first,second){
    if(first === second){
        return end;
    }else{
        return fund1;
    } 
}

function end(p){
    return end;
}
