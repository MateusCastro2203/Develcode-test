import React, { useState, useEffect } from 'react'
import  Axios  from 'axios'
import Modal from 'react-modal';
import { useForm } from 'react-hook-form'
import './list.css'
const List = () => {

    const [users, setUsers] = useState([]);
    useEffect(() =>{
       Axios.get('http://localhost:3001/').then((response=>{
            setUsers(response.data)
        }));
    });
    const deleteUser = (Id) =>{
        console.log(`http://localhost:3001/delete/${Id}`);
        Axios.delete(`http://localhost:3001/delete/${Id}`)
    }

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal(ID) {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    const { register, handleSubmit } = useForm();

    const submitUpdate = (data) =>{
        console.log(data)
        Axios.put("http://localhost:3001/update",{COD: data.Codigo, NAME:data.Nome,DATE: data.Data, ID : data.ID}).then(()=>{
            alert('Cadastro feito com sucesso')
        })
    }
    
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>CODIGO</th>
                <th>NOME</th>
                <th>DATA NASC</th>
                <th></th>
                <th></th>
            </tr>
            {
                users.map((user)=>{
                    const ID = user.ID
                    return( 
                    
                        <tr>
                            <td>{user.ID}</td>
                            <td>{user.COD}</td>
                            <td>{user.NOME}</td>
                            <td>{user.DATE.slice(0,10)}</td>
                            <td><button onClick={() => deleteUser(ID)}>Apagar</button></td>
                            <td><button onClick={() => openModal(ID)}>Editar</button></td>
                            <Modal
                                className="modalUpdate"
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                            >
                    
                                <button onClick={closeModal}>close</button>
                                <h2>Alterar os dados de {user.NOME}</h2>
                                <form 
                                    className="Form"
                                    onSubmit={handleSubmit(submitUpdate)}
                                    method="put"
                                >
                                    <label>ID</label>
                                    <input
                                        name="ID"
                                        ref={register}
                                        type="number"
                                        label="ID"
                                        value={user.ID}
                                        readOnly
                                    >                                    
                                    </input>
                                    <label>Código</label>
                                    <input
                                        name="Codigo"
                                        ref={register}
                                        type="text"
                                        label="Código"
                                        placeholder="Digite o código do usuário"
                                        className="inputForm"
                                    />
                                    <label>Nome</label>
                                    <input
                                        name="Nome"
                                        ref={register}
                                        type="text"
                                        label="Nome"
                                        placeholder="Digite o nome do usuário"
                                        className="inputForm"
                                    />
                                    <label>Data de nascimento</label>
                                    <input
                                        name="Data"
                                        ref={register}
                                        type="date"
                                        label="Código"
                                        placeholder="Digite o codigo do usuário"
                                        className="inputForm"
                                    />
                                    <input type="submit" className="button"/>
                                </form>
                            </Modal>
                        </tr>)
                    
                     
                })
            }
            
        </table>
    )
}

export default List
