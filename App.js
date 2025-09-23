function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
// từ khóa chỉ định thành phần chính trong tệp (export default)
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

