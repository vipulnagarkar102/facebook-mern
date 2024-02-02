import { useRef, useState } from "react";
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";

export default function Home() {
  const {user}=useSelector((user)=>({...user}));
  const [visible, setVisible] = useState(false);
  const el = useRef(null);
  useClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
      {visible && <div className="card" ref={el}></div>};
      <LeftHome user={user}/>
    </div>
  );
}
