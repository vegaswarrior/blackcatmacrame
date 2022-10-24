import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { reset } from '../actions/userActions'
import Swal from "sweetalert2";
// import emailjs from '@emailjs/browser';


const ResetPasswordScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const userReset = useSelector((state) => state.userReset)
    const { loading, message, error } = userReset
    // const templateParams = {
    //     message: 'http://localhost:3000/update_password/6355b23eef71d334944ea956',
    // };
    const submitHandler = (e) => {
        e.preventDefault()
        if (email) {
            dispatch(reset(email))
            /*send mail using emailjs */
            // emailjs.send('service_l7u3nee', 'template_5btt65k', templateParams, 'cYmxBSNSLuWDuUaHU')
            //  .then((response) => {
            //         Swal.fire({
            //             position: 'top-end',
            //             icon: 'success',
            //             title: "check your email",
            //             showConfirmButton: false,
            //             timer: 3000
            //         })
            //     }, (err) => {
            //         console.log('FAILED...', err);
            //     });   
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please insert your email',
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
            <h1>Reset Password</h1>
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Reset Password
                </Button>
            </Form>
        </FormContainer>
    )

}

export default ResetPasswordScreen