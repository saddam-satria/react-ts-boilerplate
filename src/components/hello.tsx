import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exampleAction, exampleState } from "../redux/reducers/example";

const Hello = () => {
  const helloState = useSelector(exampleState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exampleAction.setName({ name: "React Boilerplate TS By Saddam" }));
  }, []);

  return (
    <div>
      <h1 className="text-red-500">{helloState.name}</h1>
    </div>
  );
};

export default Hello;
