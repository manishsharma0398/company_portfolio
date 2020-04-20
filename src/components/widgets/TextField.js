import React from "react";

const TextField = ({ type, label, id }) => {
  return (
    <div className="contact-field">
      {type === "msg" ? (
        <React.Fragment>
          <label className="top" htmlFor={type}>
            {label}
          </label>
          <textarea name="" id={type}></textarea>
        </React.Fragment>
      ) : (
        <div>
          {label === "First Name" || label === "Last Name" ? null : (
            <label className="top" htmlFor={id}>
              {label}
            </label>
          )}
          <input type={type} id={id} />
          {label === "First Name" || label === "Last Name" ? (
            <label className="bottom" htmlFor={id}>
              {label}
            </label>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default TextField;
