export default function Addition(text: string):string{
    let sum = 0
    let numbers = splitTextToNumber(text)
    for(const number of numbers){
        sum += number
    }
    return sum.toString()
}

export function splitTextToNumber(text : string):number[]{
    return text.split("plus").map((number)=> parseInt(number))
}