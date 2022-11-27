// Selecionando o elemento a ser manipulado
const cartao = document.querySelector(".cartao")

// Adicionando propriedades de leitura do mouse
cartao.addEventListener("mousemove", efeitoCartao) 
cartao.addEventListener("mouseleave", voltaCartao) 
cartao.addEventListener("mouseenter", entradaCartao) 

// Efeitos de animação do cartão
function efeitoCartao(event) {
    
    // Calculando dimensões do cartão na página
    const alturaCartao = cartao.offsetHeight
    const larguraCartao = cartao.offsetWidth
    
    // Calculando centro do cartão
    const centroCartaoY = cartao.offsetTop + alturaCartao/2
    const centroCartaoX = cartao.offsetLeft + larguraCartao/2

    // Localizando posição do mouse dentro do cartão
    const posicaoY = event.clientY - centroCartaoY
    const posicaoX = event.clientX - centroCartaoX

    // Calculos para animação
    const rotacaoX = ((+1)*25*posicaoY/(larguraCartao/2)).toFixed(2) // Apresentando resultados no console.log com apenas '2' casas decimais 
    const rotacaoY = ((-1)*25*posicaoX/(alturaCartao/2)).toFixed(2) 
    
    // Aplicação da animação de acordo com os calculos/movimentos do mouse
    cartao.style.transform = `perspective(500px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg)`
}

// Retorno da posição original do cartão
function voltaCartao(event) {
     cartao.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
     transicaoCartao()
}

// Transição para o retorno da posição original do cartão
function transicaoCartao() {
    clearInterval(cartao.transitionId)
    cartao.style.transition = 'transform 300ms'
    cartao.transitionId = setTimeout (() => {
        cartao.style.transition = ''
    },300)
}

// Efeito da transição de entrada
function entradaCartao(event) {
    transicaoCartao()
}