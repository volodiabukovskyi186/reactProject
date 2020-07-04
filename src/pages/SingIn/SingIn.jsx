import React, { useCallback, useContext } from 'react';
import styles from './style.module.css'
import {withRouter,Redirect} from 'react-router'
import app from '../../services/base';
import { AuthContext } from '../../services/Auth';



const  SingIn=({history})=>{
    const hendleSingUp=useCallback(async event=>{
        event.preventDefault();
        const{email,password}=event.target.elements;
        console.log(history)
        try{
            await app
                .auth()
                .signInWithEmailAndPassword(email.value,password.value);
                history.push("/detail");
                console.log(history)
        } catch(error){
            alert(error)
        }
        
    },[history])

    const currentUser=useContext(AuthContext)
    if(currentUser){
        return <Redirect to='/'></Redirect>
    }
    return (
        <div className={styles.conteiner}>
            <div className={styles.singUp}>
                <div className={styles.title}>
                    <h1>Sing in</h1>
                </div>
                <div className={styles.createInp}>
                    <form onSubmit={hendleSingUp} >
                        <h2>Email</h2>
                        <div className={styles.email}>

                            <input type="email" name="email" id="" placeholder='Email' />
                        </div>
                        <h2>Password</h2>
                        <div className={styles.password}>

                            <input type="password" name="password" id=""  placeholder='Password' />
                        </div>
                        <div className={styles.submitBlock}>
                        <input className={styles.submit} type="submit" value='Submit'/>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SingIn) 