import renderer from "react-test-renderer";

const App = () => {
  return (
    <div>
      <h1>
        Hello
      </h1>
    </div>
  )
}

test("render", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree)
});