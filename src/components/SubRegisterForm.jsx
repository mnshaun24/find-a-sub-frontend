import React from "react";

function SubRegisterForm() {
  return (
    <div className="bg-slate-100">
      <form>
        <div>
          <label>Create Username</label>
          <input
            name="userName"
            type="text"
            id="userName"
            placeholder="Username"
          />
        </div>
        <div>
          <label>Create Password</label>
          <input
            name="userPassword"
            type="password"
            id="userPassword"
            placeholder="*************"
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default SubRegisterForm;
