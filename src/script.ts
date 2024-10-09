
let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLElement;
let res = document.getElementById('resultado') as HTMLElement;

// no ts especificando o type vc n precisa usar direto na função, apenas estanciar seu type com o "calcular: type = (função etc...) => {"
type MathFunction = (n1: number, n2: number) => number;

const calcular: MathFunction = (n1, n2) => {
    return n1 + n2;
}

botao.addEventListener('click', function() {
    res.innerHTML = calcular( +numero1.value, +numero2.value).toString();
});