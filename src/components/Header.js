import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, PROFILE_PIC, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        navigate("/error");
      });
  };

  const handleToggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
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
    <header className="w-full absolute px-8 py-2 flex flex-col md:flex-row justify-between bg-transparent z-10">
      <img src={LOGO} alt="logo" className="w-52 mx-auto md:mx-0" />

      {user && (
        <div className="flex gap-4 p-4 justify-center">
          {showGptSearch && (
            <select
              className="h-10 md:h-16 rounded-lg p-2"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="h-10 md:h-16 px-4 bg-sky-500 text-slate-100 text-lg font-medium rounded-lg"
            onClick={handleToggleGptSearch}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <div className="flex flex-col items-center">
            <img
              className="w-10 md:w-16 h-10 md:h-16"
              src={PROFILE_PIC}
              alt="profile icon"
            />
            <button
              onClick={handleSignOut}
              className="font-bold text-sm text-slate-100 mt-4"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
