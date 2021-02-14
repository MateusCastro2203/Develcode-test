import React from 'react'
import './input.css'
import { axios } from 'axios'
import { useForm } from 'react-hook-form'

const InputForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        axios({
            method: 'post',
            url: '127.0.0.1:3001/user',
            data: data
        }).then(function (response) {
            console.log(response)
        })
    }

    return (
        <div className="modal">
            <form
                className="Form"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <label>Foto</label>
                <input
                    name="Foto"
                    ref={register}
                    type="file"
                    label="Código"
                    placeholder="Digite o codigo do usuário"
                    className="inputForm"
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default InputForm
