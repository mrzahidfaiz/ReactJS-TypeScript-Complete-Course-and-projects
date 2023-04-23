import MyButton from "../myButton.tsx/MyButton"


function LoginForm({isAuthHanlder}: {isAuthHanlder : () => void}) {
  return (
    <div>
        <form action="">
            {/* <div>
            <label htmlFor="email_input">Email</label>
            <input type="text" id="email_input"/>
            </div>
            <div>
            <label htmlFor="pswd_input">Password</label>
            <input type="password" id="pswd_input"/>
            </div> */}
            <div>
                <MyButton type="button" theme="ok" click={isAuthHanlder}>Click Me</MyButton>
            </div>
        </form>
    </div>
  )
}

export default LoginForm