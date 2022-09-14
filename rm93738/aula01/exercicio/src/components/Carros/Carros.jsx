import React from 'react'



export default function Carros(props){
    
    return(
    <>
        <figure>
            <img src={props.pathImgProps} alt={props.infoCarroProps} width={props.infoImgProps} />
            <figcaption>
                {props.legProps}
            </figcaption>
        </figure>
        
        <ul>
            {props.listaDeCarrosProps.map((c,i)=>
                <li key={i}>{i+1} - {c}</li>
            )}
        </ul>
    </>
    )

}