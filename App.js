import TodoList from "./components/TodoList";
import ColorPicker from "./components/ColorBox";
import CartApp from "./components/CartApp";
import PostApp from "./components/PostApp"
import QuizApp from "./components/QuizApp"

function App() {
  return (
    <div>
      <div>Bài thực hành 01:</div>
      <br />
      <div>
        <b>Bài 1: To-do List</b>
      </div>
      <TodoList />
      <br />
      <div>
        <b>Bài 2: Bộ chọn màu:</b>
      </div>
      <ColorPicker />
      <br />
      <div>
        <b>Bài 3: Chọn sản phẩm & giỏ hàng:</b>
      </div>
      <CartApp />
      <br />
      <div>
        <b>Bài 4: Like/Dislike Post:</b>
      </div>
      <PostApp />
      <br />
      <div>
        <b>Bài 5: Quiz App đơn giản:</b>
      </div>
      <QuizApp />
    </div>
  );
}

export default App;