import React from 'react'
import '../CSS/login.css'

export default function SignUp() {
    return (
        <section>
             <div class="form-box">
                <div class="form-value">
                    <form action="">
                        <h2>Signup</h2>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="text" required />
                            <label for="">Username</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" required />
                            <label for="">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" required />
                            <label for="">Password</label>
                        </div>
                        <button>Log in</button>
                        <div class="register">
                            <p>Don't have a account <a href="#">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      )
}
