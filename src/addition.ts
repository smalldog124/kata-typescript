export default function Addition(text: string):string{
    let sum = 0
    let numbers = splitTextToNumber(text)
    for(const number of numbers){
        sum += number
    }
    return sum.toString()
}

export function splitTextToNumber(text : string):number[]{
    let arrayText = text.split("")
    let regexp = new RegExp('\\d');
    let number :string[] = []
    for (const char of arrayText){
        let oper : string = ''
        if (!regexp.test(char)){
            oper += char
        }else{
            number.push(char)
            oper = ''
        }
    }
    return number.map((x)=> parseInt(x))
}

export function splitTextToOpertor(text : string):string[]{
    let arrayText = text.split("")
    let regexp = new RegExp('\\d');
    let operator :string[] = []
    let oper : string = ''
    for (const char of arrayText){
        if (!regexp.test(char)){
            // console.log(char)
            oper += char
        }else{
            operator.push(oper)
            oper = ''
        }
    }
    return operator.filter((oper)=> oper != "")
}