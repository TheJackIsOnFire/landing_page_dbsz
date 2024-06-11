AOS.init();

const dataDoEvento = new Date("Oct 11,  2024 00:00:00"); //Constante da data do evento ficticio -> Tipo de dado = data
const timeStampDoEvento = dataDoEvento.getTime(); //Recuperando os time stamp -> Mes/Dia/Ano/Hora:Minutos:Segundos e transformando em Milessegundos

//Função que trabalha com intervalos --> setInterval

//A função cria um contador que vai atualizar a data a cada 1000 milessegundos

const contaAsHoras  = setInterval(function() { //Cria um intervalo de tempo 
    const  agora = new Date(); //Cria uma data atual
    const timeStampAtual = agora.getTime(); //Cria um numero da data atual equivalente a milessegundos 

    const distanciaAteOevento = timeStampDoEvento - timeStampAtual; //Subtrai -> Data atual em ms - Data do evento em ms = Intervalo de tempo em ms

    const diaEmMS = 1000 * 60 * 60 * 24; //milessegundos * segundos * minutos * horas = 1 dia em ms
    const horaEmMS = 1000 * 60 * 60; //milessegundos * segundos * minutos = 1 horas em ms
    const minutoEmMS = 1000 * 60; //milessegundos * segundos = 1 minuto em ms
    
    //Math-> Matematica = Faz um calculo
    //Floor -> chão = Arredonda um numero para baixo 
    //O resto da divisão (%) ira permitir o calculo do periodo de um dia (pois sera o resto)

    const diasAteOevento = Math.floor(distanciaAteOevento / diaEmMS); //Dias faltando para o evento
    const horasAteOevento = Math.floor((distanciaAteOevento % diaEmMS) / horaEmMS); //Horas do dia faltando para o evento
    const minutosAteOevento = Math.floor((distanciaAteOevento % horaEmMS) / minutoEmMS); //Minutos do dia faltando para o evento
    const segundosAteOevento = Math.floor((distanciaAteOevento % minutoEmMS) / 1000); //Segundos do dia faltando para o evento

    /*console.log(diasAteOevento);
    console.log(horasAteOevento);
    console.log(minutosAteOevento);
    console.log(segundosAteOevento);*/

    //Adiciona o time stamp ao id contador 
    document.getElementById('days').innerHTML = `${diasAteOevento}`;
    document.getElementById('hours').innerHTML = `${horasAteOevento}`;
    document.getElementById('minutes').innerHTML = `${minutosAteOevento}`;
    document.getElementById('seconds').innerHTML = `${segundosAteOevento}`;
    //Adiciona um comportamento quando o contador zerar 
    if (distanciaAteOevento < 0) {
        clearInterval(contaAsHoras);
        document.querySelector('.counter__date__title__h2').innerHTML = 'Link para a compra:';
        document.querySelector('.counter__date__event').innerHTML = '<a href="https://store.steampowered.com/app/1790600/DRAGON_BALL_Sparking_ZERO/">https://store.steampowered.com/app/1790600/DRAGON_BALL_Sparking_ZERO/</a>';        
    }

}, 1000); //A data ira atualizar em milessegundos 