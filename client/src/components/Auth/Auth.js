import React, { useState }from "react";
import { Avatar, Button, Typography, Paper, Grid, Container, TextField } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock'

import useStyles from "./styles";
import Input from './Input'
// import { signup, signin } from '../../actions/auth'


const Auth = () => {

    const  classes = useStyles();

    // List of States needed for SignUp and logIn
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (isSignup) {
        //     dispatch(signUp(formData, history))

        // } else {
        //     dispatch(signIn(formData, history))

        // }


    }

    const handleChange = (e) => {
        const { name, value } = e.target; 
        
        setFormData({...formData, [name]: value})

        console.log(formData);
    }

    const switchMode = () => {
        setIsSignup((prevSignup) => !prevSignup)
        handleShowPasword(false)
    }

    const  handleShowPasword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    return (
        
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.Avatar}>
                    <LockIcon color="primary" />
                </Avatar>
                <Typography variant="h5" >{isSignup ? 'Sign Up' : 'Sing In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Adress" handleCHange={handleChange} type="email" />
                        <Input name="password" label="Password" handleCHange={handleChange} type={showPassword ? "text" : "password"} handleShowPasword={handleShowPasword} />

                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}

                    </Grid>

                    <Button type="sumbit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>

                    <Grid alignItems="center" container spacing={2}>
                        <Grid item>
                            <Typography >{isSignup ? 'Already have an account?' : `Don't have an account?` }</Typography>
                        </Grid>
                        <Grid item>
                            <Button  variant="outlined" color="secondary" onClick={switchMode} >
                                {isSignup ? 'Sign In' : `Sign Up` }
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Paper>

        </Container>

    )

}

export default Auth;