import React, { useState }from "react";
import { Avatar, Button, Typography, Paper, Grid, Container, TextField, Icon } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock'

import { GoogleLogin } from 'react-google-login';
import GoogleIcon from "./icon";

import useStyles from "./styles";
import Input from './Input'


const GoogleAuth = () => {

    const  classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignup((prevSignup) => !prevSignup)
        handleShowPasword(false)
    }

    const  handleShowPasword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    

    const googleSuccess = async (res) => {
        console.log(res)

    }

    const googleFailure = (error) => {
        console.log(error)
        console.log('Goole Sign in was Unsuccesful')

    }


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
                    <GoogleLogin 
                        clientId="655537187640-mehto5jqqgqa3h6cf1je7heggj9iaod0.apps.googleusercontent.com"
                        render = {(renderProps) => 
                            <Button className={classes.googleButton} 
                                color="primary" 
                                fullWidth onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}  
                                startIcon={<GoogleIcon />} 
                                variant="contained" 
                            >
                                Google Sign In
                            </Button>                        
                        }
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />


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

export default GoogleAuth;