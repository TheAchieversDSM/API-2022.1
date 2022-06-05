import React, { Component } from "react";
import {Link} from "react-router-dom";


type Props = {
    per_params: string
    params: number
}


const ProgressBar = ({per_params, params }: Props) => {
    return (
        <>
        <p><label>Progresso das aulas</label></p>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: `${per_params}` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">{params}%</li>
            </ul>
        </>
    )
}

export default ProgressBar;