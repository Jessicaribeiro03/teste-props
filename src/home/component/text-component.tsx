import OtherComponent from "./other-component";

interface Props{
    rosa: string;
    alert: any;
}

export default function TextComponent(props: Props){
    return(
        <div style={{backgroundColor: '#ffa8a8'}}>
            <h2>HOROSCÓPO</h2>
            <h4> Horóscopo mensal: as previsões para os signos em abril de 2023 </h4>
            <h2> TOURO </h2>
            <img src={"https://www.horoscopovirtual.com.br/imagem/artigos/interno/images/2%5B1%5D(113).png"} />
            <span>{props.rosa}</span>

            
            <OtherComponent alert={props.alert} param={props.rosa}/>
        </div>
    )
}