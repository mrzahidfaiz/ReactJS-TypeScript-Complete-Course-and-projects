import { useState } from "react";
import Todo from "./components/todo/Todo";
import LoginForm from "./components/loginForm/LoginForm";

function App() {
  const [items, setItems] = useState(["demo"]);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const isAuthHanlder = () => {
    setIsAuth(true);
  };

  const onItemAddHanlder = (item: string) => {
    setItems([...items, item]);
  };

  return (
    <div>
      {isAuth ? (
        <Todo onItemAddHanlder={onItemAddHanlder} items={items} />
      ) : (
        <LoginForm isAuthHanlder={isAuthHanlder} />
      )}
    </div>
  );
}

export default App;
