var ttys = require('ttys');

var stdin = ttys.stdin;
var stdout = ttys.stdout;

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding("utf-8");

function getChar() {
    return new Promise(resolve => {
        stdin.once('data', function (key) {
            resolve(key);
        })
    })
}

void async function () {
    stdout.write('请选择你要使用的框架\n');
    let answer = await options(["vue", "react", "angular"])
    stdout.write('您选择的框架是:',answer)

}()
async function options(choices) { 
    let selected = choices.length;
    for (let index = 0; index < choices.length; index++) {
        stdout.write('[ ] ' + choices[index] + "\n");
    }
    right(1);
    while (true) {
        let data = await getChar();
        if (data === "w" && selected > 0) { 
            stdout.write(' ');
            left(1);
            up(1)
            selected--;
            stdout.write('x');
            left(1);
        } else if (data === "s" && selected < choices.length - 1) {
            stdout.write(' ');
            left(1);
            down(1)
            selected++;
            stdout.write('x');
            left(1);
        } else if (data === "\u0003") {
            process.exit();
        } else if (data.charCodeAt(0) == 13) {
            return selected;
        } 
     
    }
}


// void async function (){
//     while(true){
//         let data = await getChar(); 
// if (data === "\u0003") {
//     process.exit(); 
// }
//         console.log(data+"--->"+data.charCodeAt(0))
//     }
// }()





// void function(){
//     console.log('------------->')
// }

// void async function(){ 
//     while(true){
//         let data = await getChar();
//         console.log(data.charCodeAt(0)+"--->")
//     }
// }

// void async function () {
// await options(['vue','react','angluer'])
// while (true) { 
//     let char = await getChar();
// if (char === "\u0003") {
//     process.exit(); 
// } 
//     console.log(char.charCodeAt(0))
// }
// stdin.write('choose');
// // let answer = await 
// }



function up(N = 1) {
    stdout.write("\033[" + N + "A");
}
function down(N = 1) {
    stdout.write("\033[" + N + "B");
}
function right(N = 1) {
    stdout.write("\033[" + N + "C");
}
function left(N = 1) {
    stdout.write("\033[" + N + "D");
}



// async function options(choices) {
//     let selected = 0;
//     for (let index = 0; index < choices.length; index++) {
//         let
//         if (i === selected) {
//             stdout.write("[ ]" + choice + "\n");
//         } else {
//             stdout.write("[ ]" + choice + "\n");
//         }

//     }
//     up(choices.length)
//     right();
//     while (true) {
//         let char = await getChar();
//         if (char === "\u0003") {
//             process.exit();
//             break;
//         }
//         if (cgar === 'w' && selected > 0) {
//             stdin.write();
//             left();
//             selected--;
//             up();
//             stdin.write("x");
//             left();
//         } else if (cgar === 's' && selected < choices.length - 1) {
//             stdin.write();
//             left();
//             selected++;
//             up();
//             stdin.write("x");
//             left();
//         }

//     }
// }