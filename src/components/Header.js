import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, PROFILE_PIC } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between mr-4">
      <img src={LOGO} alt="logo" className="w-52" />

      {user && (
        <div className="flex flex-col p-4">
          <img className="w-16 h-16" src={PROFILE_PIC} alt="profile icon" />
          <button
            onClick={handleSignOut}
            className="font-bold text-slate-700 mt-4"
          >
            Sign out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
