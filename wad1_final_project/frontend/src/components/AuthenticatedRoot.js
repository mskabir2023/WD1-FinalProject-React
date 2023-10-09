import {useNavigate, useOutlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {getToken, setToken} from "../services/network";

export default function AuthenticatedRoot() {
  let outlet = useOutlet();
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if(token) {
      setToken(token);
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      navigate("/login");
    }
  }, [])
  return <>{authenticated && outlet}</>;
}
