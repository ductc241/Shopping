import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { login } from '../../../axios/auth';
import { setAuthen } from '../../../redux/slices/authSlice';

import Button from '../../../components/common/Button'
import './Login.css'

const schema = yup.object({
  username: yup
    .string()
    .required('Nhập tài khoản của bạn'),
}).required();


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [error, setError] = useState();
  
  const onSubmit = async (data) => {
    setError('')
    try {
      const respon = await login(data)

      dispatch(setAuthen(respon.data))
      localStorage.setItem('isLogin', 'true')
      navigate('/shop')

    } catch (error) {
      const { data } = error.response 
      if(data.errCode){
        setError(data.errMessage)
      }
    }
  }

  return (
    <div className="login container">
      <div className="login__container">
        <div className="login__form-header">
          <p className='login__form-title'>Login</p>
        </div>

        
        {error && (
          <div className="form-error">
            <span>{error}</span>
          </div>
        )}
        <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input 
              type="text"
              className="form-control"
              placeholder='Username'
              id='psername'
              {...register("username", {required: 'dien vao day'})}
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
          </div>

          <Button type='submit' content='SIGN IN' variant='border' />
          <p className='login__footer-text'>Forget Password ??</p>
        </form>
      </div>
    </div>
  )
}

export default Login