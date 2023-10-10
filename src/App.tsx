import { Route, Routes } from "react-router-dom";
import "./index.scss";
import Layout from "./Components/Layout/Layout";
import SIgnup from "./Pages/CTA/SIgnup";
import Login from "./Pages/CTA/Login";
import { useState } from "react";
import { AppContext } from "./hooks/ContextApi";
import Guest from "./Pages/Guest/Guest";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/Firebase";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Sale from "./Pages/Sale";
import Rent from "./Pages/Rent";
import Shortlet from "./Pages/Shortlet";
import FeatPropertyInfo from "./Pages/FeatPropertyInfo/FeatPropertyInfo";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [asGuest, setAsGuest] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const[errMsg, setErrMsg] = useState('')

  const handleFullname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError(false);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setError(false);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(false);
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  let isValid: any;


        //CONFIRM EMAIL FUNCTION
  const confirmEmail = () => {
    if (email === "") {
      setError(true);
      setErrMsg("Email is required");
      isValid = false;
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else if (!isValidEmail(email)) {
      setError(true);
      setErrMsg("Whoops, make sure its an email");
      isValid = false;
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false);
      setErrMsg("");
      isValid = true;
    }
  };


        //CONFIRM PASSWORD FUNCTION
  const confirmPassword = () => {
    if (password === "") {
      setError(true);
      setErrMsg("Password is required");
      isValid = false;
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false);
      setErrMsg("");
      isValid = true;
    }
  };

      //CONFIRM FULL NAME FUNCTION
  const confirmFullname = () => {
    if (name === "") {
      setError(true);
      setErrMsg("Full Name is required");
      isValid = false;
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false);
      setErrMsg("");
      isValid = true;
    }
  };

    //CONFIRM PHONE INFO FUNCTION
  const confirmPhone = () => {
    if (phone === "") {
      setError(true);
      setErrMsg("Phone number is required");
      isValid = false;
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false);
      setErrMsg("");
      isValid = true;
    }
  };

  // const confirmRegInfo = () => {
  //   if (name === "" && phone != "" && email != "" && password != "") {
  //     setError(true);
  //     setErrMsg("Full Name is required");
  //     isValid = false;
  //   } else if (name != "" && phone === "" && email != "" && password != "") {
  //     setError(true);
  //     setErrMsg("Phone number is required");
  //     isValid = false;
  //   } else if (name != "" && phone != "" && email === "" && password != "") {
  //     setError(true);
  //     setErrMsg("Email is required");
  //     isValid = false;
  //   } else if (name != "" && phone != "" && email != "" && password === "") {
  //     setError(true);
  //     setErrMsg("Password is required");
  //     isValid = false;
  //   } else if (
  //     name != "" &&
  //     phone != "" &&
  //     email !== "" &&
  //     !isValidEmail(email) &&
  //     password != ""
  //   ) {
  //     setError(true);
  //     setErrMsg("Whoops, make sure its an email");
  //     isValid = false;
  //   } else {
  //     setError(false);
  //     setErrMsg("");
  //     isValid = true;
  //   }
  // };

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

    // if (isValid) {
    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       console.log(userCredential);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };

  // LOGIN IN FUNCTION
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    confirmLoginInfo();
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
          // nameErrMsg,
          // phoneErrMsg,
          // emailErrMsg,
          // passwordErrMsg,
          // loginErrMsg,
          // setNameErrMsg,
          // setPhoneErrMsg,
          // setEmailErrMsg,
          // setPasswordErrMsg,
          // setLoginErrMsg,
          handleFullname,
          handlePhone,
          handleEmail,
          handlePassword,
          register,
          login,
          scrollToTop,
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SIgnup />} />
          <Route path="/" element={<Layout />} />
          <Route path="/guest" element={<Guest />} />
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
