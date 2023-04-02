import './CampoTexto.css'

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    //placeholder concatenado
    const placeholderModificada = `${placeholder}...`

    
    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
                <input value={valor} onChange={evento => aoAlterado(evento.target.value)} required= {obrigatorio} placeholder= {placeholderModificada}/>
        </div>
    );
}

export default CampoTexto


