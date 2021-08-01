const validateAuthInputs = (email, password, confPassword=null) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) throw new Error('email');
    if(!password) throw new Error('password');
    if(confPassword && password !== confPassword) throw new Error('password');
}

export default validateAuthInputs