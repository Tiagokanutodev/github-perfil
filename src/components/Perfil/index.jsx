
import styles from './Perfil.module.css';


const Perfil = ({ nomeUsuario }) => {                             //puxando la do app.jsx ({ endereco, nomr })
    
    return (
        <header className={styles.header}>        
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>          
            <h1 className={styles.name} >
                {nomeUsuario}</h1>               
        </header>
    )
}

export default Perfil;                                               //exportando arquivo PERFIL.jsx