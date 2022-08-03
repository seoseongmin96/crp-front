import React, { useState } from "react";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.FormEvent<HTMLInputElement> | any) => void;
};
const Lyrics1: React.FC<Props> = ({ onChange, onSubmit }) => {
  const onClick = (e: any) => {
    e.preventDefault();
    setClick(1);
  };

  const [click, setClick] = useState(0);
  return (
    <div className="col-md-3 text-center m-auto">
      <form onSubmit={onSubmit}>
        <div>
          <img
            src="https://cdn.imweb.me/upload/S20200724abcb07db26ecf/0837716fc9c26.jpeg"
            style={{ width: 500 + "px" }}
            alt="score"
          />{" "}
          &nbsp;
        </div>
        <br />
        <br />

        <div className="container">
          <button onClick={onClick} type="button" className="btn btn-dark">
            작사하기
          </button>
          <br />
          <br />
          <br />
          {click === 1 ? (
            <div className="input-group">
              <span className="input-group-text">
                <h5>
                  학교종이 땡땡땡~ 어서 모이자~ 선생님이 우리를 기다리신다~
                </h5>
              </span>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Lyrics1;
