import React, { useState, SyntheticEvent } from "react";
import style from "@/styles/Table.module.css";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ComUpload: React.FC<Props> = ({ onSubmit }: Props) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="col-md-3 text-center m-auto w-75 p-3">
          <h4 className={style.h4}>
            {" "}
            <br />
            실시간으로 인공지능이 작곡한 노래를 들어보세요
          </h4>
        </div>
        <div className="col-md-3 text-center m-auto w-75 p-3">
          <button
            className="btn btn-outline-secondary "
            type="submit"
            id="inputGroupFileAddon04"
          >
            <h5>들어보기</h5>
          </button>
        </div>
      </form>
    </div>
  );
};
export default ComUpload;
