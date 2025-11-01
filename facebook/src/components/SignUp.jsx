import React from 'react'
import './Signup.css'

function SignUp() {
return (
    <div className='signUpContainer'>
        <h1>facebook</h1>
        <div className='signupCard'>
            <div className='head'>
                <h2>Create a new account</h2>
                <p>It's quick and easy</p>
                <hr />
            </div>
            <div className='userName'>
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Surname' />
            </div>
            <div className='dropDown'>
                <label htmlFor="dob" id='dobLabel'>Date of birth
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="9" cy="19" r="5" stroke="#888" stroke-width="2" fill="#888"/>
                        <text x="9" y="12" text-anchor="middle" font-size="10" fill="#fff" font-family="Arial" dy="10">?</text>
                    </svg>
                </label>
                <br />
                <select name="date" id="date">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select name="month" id="month">
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
                <select name="year" id="year">
                    {Array.from({ length: 2025 - 1905 + 1 }, (_, i) => 2025 - i).map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <br />
                <label htmlFor="gender" id='genderLabel'>Gender
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="9" cy="19" r="5" stroke="#888" stroke-width="2" fill="#888"/>
                        <text x="9" y="12" text-anchor="middle" font-size="10" fill="#fff" font-family="Arial" dy="10">?</text>
                    </svg>
                </label>
                <div className='genderClass'>
                    <div className='gender'>
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" value="Female" id="female" />
                    </div>
                    <div className='gender'>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" value="Male" id="male" />
                    </div>
                    <div className='gender'>
                        <label htmlFor="custom">Custom</label>
                        <input type="radio" name="gender" value="custom" id="custom" />
                    </div>
                </div>
            </div>
            <div className='mobPass'>
                <input type="text" placeholder='Mobile number or email address' />
                <input type="password" placeholder='New password' />
                <p>
                    People who use our service may have uploaded your contact information to Facebook. <a>Learn more</a>
                    <br /><br />
                    By clicking Sign Up, you agree to our <a>Terms</a>, <a>Privacy Policy</a> and <a>Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                </p>
            </div>
            <div className='bottom' >
                <a href="/home"  id='signUp'><button>Sign Up</button></a><br /><br /><br />
                <a href="/" id='toLog'>Already have an account?</a><br /><br /><br />
            </div>
        </div>
    </div>
)
}

export default SignUp