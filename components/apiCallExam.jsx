"use client";
import React, { useEffect, useState } from "react";

const APICallExam = ({ secretCodeFunction }) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          onClick={secretCodeFunction}
          className="bg-red-100 p-2 rounded-md border border-red-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default APICallExam;
