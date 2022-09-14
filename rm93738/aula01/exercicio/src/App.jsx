import React from 'react'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Carros from './components/Carros/Carros'
import Parceiros from './components/Parceiros/Parceiros'
import Argo from './img/argo.jpg'

export default function App(){
    
    const infoCarro = "Carro de Familia"
    const infoImg = 400
    const leg = "fonte imagem: QuatroRodas"
    const listaDeCarros = ["PORSCHE","PULSE","T-CROSS","POLO","ARGO"]
    
    return(
    <>
    
        <Cabecalho/>
        <Carros
            pathImgProps={Argo}
            infoCarroProps={infoCarro}
            infoImgProps = {infoImg}
            legProps = {leg}
            listaDeCarrosProps = {listaDeCarros}/>
        <Parceiros/>
    </>  
    )
}