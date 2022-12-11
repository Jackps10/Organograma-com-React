import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    
//Evento para salvar o Form
    const aoSalvar = (Evento) => {
        Evento.preventDefault()
        //console.log("Form foi Submetido => ", nome, cargo, imagem, time);
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto 
                        obrigatorio ={true} 
                        label="Nome" 
                        placeholder="Digite seu nome:"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto 
                        obrigatorio ={true} 
                        label="Cargo" 
                        placeholder="Digite seu cargo:" 
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <CampoTexto 
                        label="Imagem" 
                        placeholder="Informe o endereço da imagem:" 
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa 
                        obrigatorio ={true} 
                        label="Time" 
                        itens={props.times}
                        valor ={time}
                        aoAlterado ={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao> 
            </form>
        </section>
    )
}

export default Formulario