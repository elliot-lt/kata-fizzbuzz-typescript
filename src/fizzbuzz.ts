const fizzbuzz = (i: number): string => {
    let answer = ""

    if (i % 3 === 0) {
        answer += "fizz";
    }
    if (i % 5 === 0) {
        answer += " buzz";
    }

    return answer.trim() || i.toString(); 
}

export type Sub = {
    multiple: number,
    replacement: string,
}

export type Spec = {
    subs: Sub[]
}

export type CoolSpec = {
    subs: ((i: number) => string|undefined)[]
}

export const configFizzBuzz = (i: number, spec: Spec): string => {
    let answer = []

    spec.subs.forEach(({multiple, replacement}) => {
        if (i % multiple === 0) {
            answer.push(replacement)
        }
    });

    return answer.join(" ") || i.toString();
}

export const coolFizzBuzz = (i: number, spec: CoolSpec): string => {
    return spec.subs.map(x => x(i))
        .join(" ")
        .trim() || i.toString();
}

export default fizzbuzz
