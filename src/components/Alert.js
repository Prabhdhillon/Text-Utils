import React from "react";

export default function Alert(props) {
  const convertUpcase = (word) => {
    let str1 = word.charAt(0).toLowerCase();
    let str2 = word.slice(1, 7);
    let res = str1.concat(str2);
    return res;
  };

  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${convertUpcase(
            props.alert.type
          )} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
      </div>
    )
  );
}
