interface Props{
    param: string;
    alert: any;
}

export default function OtherComponent(props: Props){
    return(
        <div style={{backgroundColor: '#ffe3e3'}}>
            <h2> Começamos a semana sob a influência de Vênus, o planeta do amor e seu regente, entra em Gêmeos e recebe imediatamente um tenso aspecto de Saturno, indicando dias em que você deve estar atento aos seus gastos. Você precisa economizar. 
                Não é um bom período para pedir um aumento ou envolver-se em um novo investimento. 
                Sol e Júpiter recebem um tenso aspecto de Plutão, sugerindo dias de recolhimento e necessidade de distanciamento, silêncio e solitude. Período de mergulho emocional e transformação de emoções e sentimentos.  </h2>
            <span onClick={() => props.alert('Alerta noticia!')}>{props.param}</span>
        </div>
    )
}