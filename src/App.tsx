import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.scss";
import Layout from "./Components/Layout/Layout";
import SIgnup from "./Pages/CTA/SIgnup";
import Login from "./Pages/CTA/Login";
import { useState } from "react";
import { AppContext } from "./hooks/ContextApi";
import Guest from "./Pages/Guest/Guest";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config/Firebase";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Sale from "./Pages/Sale";
import Rent from "./Pages/Rent";
import Shortlet from "./Pages/Shortlet";
import FeatPropertyInfo from "./Pages/FeatPropertyInfo/FeatPropertyInfo";
import User from "./Pages/User/User";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [asGuest, setAsGuest] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [phoneErrMsg, setPhoneErrMsg] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleFullname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  let isValid: any;

  //CONFIRM EMAIL FUNCTION
  const confirmEmail = () => {
    if (email === "") {
      setEmailErr(true);
      setEmailErrMsg("Email is required");
      isValid = false;
      setTimeout(() => {
        setEmailErr(false);
      }, 3000);
    } else if (!isValidEmail(email)) {
      setEmailErr(true);
      setEmailErrMsg("Whoops, make sure its an email");
      isValid = false;
      setTimeout(() => {
        setEmailErr(false);
      }, 3000);
    } else {
      setEmailErr(false);
      setEmailErrMsg("");
      isValid = true;
    }
  };

  //CONFIRM PASSWORD FUNCTION
  const confirmPassword = () => {
    if (password === "") {
      setPasswordErr(true);
      setPasswordErrMsg("Password is required");
      isValid = false;
      setTimeout(() => {
        setPasswordErr(false);
      }, 3000);
    } else {
      setPasswordErr(false);
      setPasswordErrMsg("");
      isValid = true;
    }
  };

  //CONFIRM FULL NAME FUNCTION
  const confirmFullname = () => {
    if (name === "") {
      setNameErr(true);
      setNameErrMsg("Full Name is required");
      isValid = false;
      setTimeout(() => {
        setNameErr(false);
      }, 3000);
    } else {
      setNameErr(false);
      setNameErrMsg("");
      isValid = true;
    }
  };

  //CONFIRM PHONE INFO FUNCTION
  const confirmPhone = () => {
    if (phone === "") {
      setPhoneErr(true);
      setPhoneErrMsg("Phone number is required");
      isValid = false;
      setTimeout(() => {
        setPhoneErr(false);
      }, 3000);
    } else {
      setPhoneErr(false);
      setPhoneErrMsg("");
      isValid = true;
    }
  };

  // CONFIRM LOGIN IN INFO FUNCTION
  const confirmLoginInfo = () => {
    if (email === "" || password === "") {
      setError(true);
      setErrMsg("Email or Password is required");

      setTimeout(() => {
        setError(false);
      }, 3000);

      isValid = false;
    } else {
      setError(false);
      setErrMsg("");
      isValid = true;
    }
  };

  // REGISTER IN FUNCTION
  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    confirmFullname();
    confirmPhone();
    confirmEmail();
    confirmPassword();

    if (isValid) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          setSignedUp(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // LOGIN IN FUNCTION
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    confirmLoginInfo();

    if (isValid) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: {}) => {
          console.log(userCredential);
          setLoggedIn(true);
          setIsOnline(true);
          setAsGuest(false);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error: string) => {
          console.log(error);
          setLoggedIn(false);
          setError(true);
          setErrMsg("Invalid user credentials");
          setTimeout(() => {
            setError(false);
          }, 3000);
        });
    }
  };

  // AUTO SCROLL TOP ON EACH PAGE
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };


  return (
    <div>
      <AppContext.Provider
        value={{
          asGuest,
          setAsGuest,
          loggedIn,
          setLoggedIn,
          isOnline,
          setIsOnline,
          password,
          setPassword,
          email,
          setEmail,
          name,
          setName,
          phone,
          setPhone,
          error,
          setError,
          errMsg,
          nameErrMsg,
          phoneErrMsg,
          emailErrMsg,
          passwordErrMsg,
          nameErr,
          emailErr,
          phoneErr,
          passwordErr,
          handleFullname,
          handlePhone,
          handleEmail,
          handlePassword,
          register,
          login,
          scrollToTop,
          signedUp,
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SIgnup />} />
          <Route path="/" element={<Layout />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/shortlet" element={<Shortlet />} />
          <Route path="/card/:id" element={<FeatPropertyInfo />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
