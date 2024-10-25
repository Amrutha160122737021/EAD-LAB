import React,{useState} from 'react';

const PAsswordStrengthChecker = () => {
  const[password,setPassword]=useState('');
  const[strength,setStrength]=useState('');

  const evaluatePasswordStrength=(password) =>{
    let strengthLevel='';

    const hasLowercase=/[a-z]/.test(password);
    const hasUppercase=/[A-Z]/.test(password);
    const hasNumber=/\d/.test(password);
    const hasSpecialChar=/[!@#$%^&*()<>?":{}<>]/.test(password);
    const isLongenough=password.length>=8;

    let count=0;


    if (hasLowercase){
      count++;
    }

    if (hasUppercase){
      count++;
    }

   if (hasNumber){
      count++;
    }

    if (hasSpecialChar){
      count++;
    }

    if (isLongenough){
      count++
    }

    if (count<2){
      strengthLevel='Weak';
    }
    else if (count<4){
      strengthLevel='Medium';
    }
    else {
      strengthLevel='Strong';
    }

    setStrength(strengthLevel);
  };

  const handleChange=(event)=>{
    const newPassword = event.target.value;
    setPassword(newPassword);
    evaluatePasswordStrength(newPassword);
  };

  return(
    <div style={{padding:'20px'}}>
      <h3>Password Strength Checker</h3>
      <input
      type="password"
      value={password}
      onChange={handleChange}
      placeholder="Enter your Password"
      style={{padding:'10px',width:'100%',marginBottom:'10px'}} />
      <div style={{fontWeight:'bold',color:strength==='Weak' ? 'red':strength==='Medium' ? 'orange':'green'}}>
        Strength:{strength}
      </div>

    </div>
  );
};

export default PAsswordStrengthChecker;