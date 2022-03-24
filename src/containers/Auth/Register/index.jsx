import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { UserRegister } from '../../../axios/auth';

import Button from '../../../components/common/Button'
import './Register.css'
import { toast } from 'react-toastify';

const schema = yup.object({
    username: yup
        .string()
        .required('Nhập tài khoản của bạn'),
    displayName: yup
        .string()
        .required('Nhập tên hiển thị'),
    password: yup
        .string()
        .required('Nhập mật khẩu')
}).required();


const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [error, setError] = useState();
  
    const onSubmit = async (data) => {
        setError('')
        try {
            await UserRegister(data)
            toast('Đăng ký thành công')
            navigate('/login')
        } catch (error) {
            console.log(error)
            const { data } = error.response 
            if(data.errCode){
                setError(data.errMessage)
            }
        }
    }

  return (
    <div className="register container">
      <div className="register__container">
        <div className="register__form-header">
          <p className='register__form-title'>Register</p>
        </div>

        
        {error && (
          <div className="form-error">
            <span>{error}</span>
          </div>
        )}
        <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder='Display name'
                    id='displayName'
                    {...register("displayName")}
                />
                {errors.displayName && 
                    <p className='form-control-error'>{errors.displayName.message}</p>
                }
            </div>
            
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder='Username'
                    id='psername'
                    {...register("username", {required: 'Nhập tên tài khoản'})}
                />
                {errors.username && 
                    <p className='form-control-error'>{errors.username.message}</p>
                }
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder='Password'
                    autoComplete='off'
                    id='password'
                    {...register("password")}
                />
                {errors.password && 
                    <p className='form-control-error'>{errors.password.message}</p>
                }
            </div>

          <Button type='submit' content='CREATE AN ACCOUNT' variant='border' />
        </form>
      </div>
    </div>
  )
}

export default Register