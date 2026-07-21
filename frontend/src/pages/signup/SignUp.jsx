import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from '../../hooks/useSignup';
import '../Auth.css';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="brutal-container">
            <div className="brutal-box signup-box">
                <div className="terminal-header">
                    <span>REGISTER_NEW_OPERATOR</span>
                    <span>[ STATUS: PENDING ]</span>
                </div>

                <div className="terminal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                            <div>
                                <label className="brutal-label">FULL_NAME_</label>
                                <input 
                                    type="text" 
                                    placeholder="IDENTITY_01" 
                                    className="brutal-input"
                                    value={inputs.fullName}
                                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="brutal-label">USERNAME_</label>
                                <input 
                                    type="text" 
                                    placeholder="USER_ALIAS" 
                                    className="brutal-input"
                                    value={inputs.username}
                                    onChange={(e) => setInputs({...inputs, username: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                            <div>
                                <label className="brutal-label">SECRET_KEY_</label>
                                <input 
                                    type="password" 
                                    placeholder="********" 
                                    className="brutal-input"
                                    value={inputs.password}
                                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="brutal-label">CONFIRM_KEY_</label>
                                <input 
                                    type="password" 
                                    placeholder="********" 
                                    className="brutal-input"
                                    value={inputs.confirmPassword}
                                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="brutal-label">GENDER_PRIME_</label>
                            <GenderCheckbox 
                                onCheckboxChange={handleCheckboxChange} 
                                selectedGender={inputs.gender} 
                            />
                        </div>

                        <button className="brutal-button gold" disabled={loading}>
                            {loading ? 'SIGNAL_BROADCASTING...' : 'INITIALIZE_CONNECTION'}
                        </button>

                        <Link to="/login" className="brutal-link">
                            ALREADY_REGISTERED? RESUME_SESSION_
                        </Link>
                    </form>
                </div>

                <div className="status-bar">
                    <span>[ SYSTEM_VER: 2.0.0-PRO ]</span>
                    <span>[ NODE: VERIFIED ]</span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;