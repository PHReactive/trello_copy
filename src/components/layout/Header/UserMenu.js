import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../actions/auth";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <ul>
        <li
          onClick={() => dispatch(logoutUser())}
          className="bg-green-200 hover:bg-green-300 rounded ml-2 py-0.5 px-2 cursor-pointer"
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default UserMenu;
