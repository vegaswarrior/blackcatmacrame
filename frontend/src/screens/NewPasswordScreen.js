import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { updatePassword } from '../actions/userActions'
import Swal from "sweetalert2";

const NewPasswordScreen = ({ history, match }) => {
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userUpdatePassword = useSelector((state) => state.userUpdatePassword)
    const { loading, message, error } = userUpdatePassword

    const submitHandler = (e) => {
        e.preventDefault()
        if (password) {
            dispatch(updatePassword(password, match.params.id))
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please insert your password',
                showConfirmButton: false,
                timer: 3000
            })
        }
    }

    useEffect(() => {
        if (message?.data.message) {
            Swal.fire({
                position: 'top-end',
                icon: message.data.success ? 'success' : 'error',
                title: message.data.message,
                showConfirmButton: false,
                timer: 3000
            })
        }
    }, [loading, message, error]);


    return (
        <FormContainer>
            <h1>New Password</h1>            
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='password'>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Update Password
                </Button>
            </Form>
        </FormContainer>
    )

}

export default NewPasswordScreen