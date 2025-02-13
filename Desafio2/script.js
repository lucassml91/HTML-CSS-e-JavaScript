const botoesClasse = document.querySelectorAll(".classe");
const descricaoClasse = document.getElementById("descricaoClasse");
const botaoIniciar = document.getElementById("iniciarProcesso");
const aventura = document.getElementById("processo")
const textoAventura = document.getElementById("textoProcesso");
const botaoOpcao1 = document.getElementById("opcao1");
const botaoOpcao2 = document.getElementById("opcao2");




let classeSelecionada = "";

const classes = {
    "Eletrica": "A eletricidade é uma forma de energia que resulta do movimento de partículas carregadas, como elétrons, dentro de materiais condutores.",
    "Hidraulica": "Os sistemas hidráulicos são conjuntos de componentes interligados que utilizam fluido pressurizado para realizar trabalho mecânico.",
    "Pneumatica": "Os sistemas pneumáticos são sistemas que utilizam ar comprimido como fonte de energia para realizar trabalho mecânico."
};

botoesClasse.forEach(botao =>{
    botao.addEventListener("click", function(){
        classeSelecionada = botao.getAttribute("data-classe");
        descricaoClasse.innerHTML = `<p><strong>${classeSelecionada}:</strong> ${classes[classeSelecionada]}</p>`;
        botaoIniciar.style.display = "block";
    });
});

botaoIniciar.addEventListener("click", function(){
    aventura.style.display = "block";
    botaoIniciar.style.display = "none";
})

botaoOpcao1.addEventListener("click", function(){
    if(classeSelecionada === "Eletrica"){
        textoAventura.innerText = "A eletricidade pode ser convertida diretamente em outras formas de energia, como luz (em lâmpadas), calor (em aquecedores e fornos), ou movimento (em motores elétricos), com um grau elevado de eficiência, sem grandes perdas."
    } else if (classeSelecionada === "Hidraulica"){
        textoAventura.innerText = "A principal vantagem dos sistemas hidráulicos é sua capacidade de realizar tarefas pesadas com componentes compactos, o que os torna ideais para aplicações que exigem grandes esforços de movimentação."
    }else{
        textoAventura.innerText = "Comparado com sistemas hidráulicos ou elétricos, a instalação de um sistema pneumático pode ser menos cara, especialmente para aplicações de menor porte, pois o ar comprimido é barato e não requer a instalação de sistemas pesados."
    }
});

botaoOpcao2.addEventListener("click", function(){
    if(classeSelecionada === "Eletrica"){
        textoAventura.innerText = "O uso inadequado de eletricidade pode resultar em choques elétricos, que podem ser fatais ou causar sérios danos à saúde, especialmente em ambientes domésticos ou industriais.";
    } else if (classeSelecionada === "Hidraulica"){
        textoAventura.innerText = "Sistemas hidráulicos requerem manutenção regular para garantir seu funcionamento eficiente. Isso inclui o monitoramento de vazamentos, verificação de vedações, troca de fluido hidráulico e a limpeza dos filtros. A manutenção inadequada pode levar a falhas e reduzir a vida útil dos componentes.";
    }else{
        textoAventura.innerText = "Os sistemas pneumáticos geralmente têm baixa eficiência energética, uma vez que o ar comprimido é gerado por compressores, e esse processo pode consumir uma quantidade significativa de energia.";
    }
});

