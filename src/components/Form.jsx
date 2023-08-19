import styles from './Form.module.css';
import { useState } from 'react';
import Validate from './Validate';

export default function Form(props) {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(true);

    function handlePassword(event) {
        event.preventDefault();
        if (showPassword) setShowPassword(false);
        else setShowPassword(true);
    }

    function handlechange(event) {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        Validate({...userData, [property]: value}, setErrors, errors, property);
    }

    function submitHandler(event) {
        if (errors.boolean1 && errors.boolean2) {
            event.preventDefault();
            /* alert('Login Exitoso'); */
            props.login(userData);
        }
        else alert('El usuario o la contraseña no son válidos');
    }

    function handleKeyDown(event) {
        console.log(event.key);
        if (event.key === 'Enter') {
            console.log('✅ Enter key pressed');
            console.log(errors.boolean1);
            submitHandler(event);
        }
    };

    return (
        <div onKeyDown={handleKeyDown} className={styles.cointainer}>
            <form /* onSubmit={submitHandler} */ className={styles.formContainer} action="">
                <div className={styles.imgContainer}>
                    <img src="//rickandmortyapi.com/api/character/avatar/14.jpeg" alt="imagen" />
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.inputsContainer}>
                        <label htmlFor="username">Username:</label>

                        <div className={styles.usernameContainer}>
                            <input onChange={handlechange} type="text" name='username' placeholder='Email' value={userData.username} className={errors.boolean1 ? styles.inputSuccess: styles.inputFail}/>
                            <span className={styles.simboloNone}></span>
                        </div>
                    </div>

                    <div className={styles.inputsContainer}>
                        <label htmlFor="password">Password:</label>

                        <div className={styles.usernameContainer}>
                            <input onChange={handlechange} type={showPassword ? 'password': 'text'} name='password' placeholder='Password' value={userData.password} autoComplete="off" className={errors.boolean2 ? styles.inputSuccess: styles.inputFail}/>
                            <button onClick={handlePassword} id={showPassword ? styles.passOn: styles.passOff}>M</button>
                        </div>
                    </div>
                </div>
                <button type='submit' onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}