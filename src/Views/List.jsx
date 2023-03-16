import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useTable } from "react-table";
import animationData from "../refresh.json";
import { onUserChildAdded, onUserChildChanged, onUserValueChanged } from "../api/firebase";


const List = () => {
  const [data,setData] = useState([]); 
  useEffect(() => {
    onUserValueChanged(user=>{
      let temp = [];
      let cnt = 1;
      for (const key in user) {
        // if (user.hasOwnProperty(key)) {
            temp.push({...user[key],seq:cnt,col4:'Send',col5:'Send',col6:'Enter',col7:'X'});
            cnt+=1;
        // }
      }
      cnt=0;

      console.log(temp);

      setData([...temp]);
    });
  }, []);

  


  const lottieRef = useRef();

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "seq",
      },
      {
        Header: "Phone number",
        accessor: "phone",
      },
      {
        Header: "Registered Time",
        accessor: "time",
      },
      {
        Header: "10 Minutes left message",
        accessor: "col4",
      },
      {
        Header: "Ready Message",
        accessor: "col5",
      },
      {
        Header: "Enter",
        accessor: "col6",
      },
      {
        Header: "Delete",
        accessor: "col7",
      },
    ],
    []
  );

  console.log(data);



  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
    
  function hasNumber(str) {
    const regex = /\d/;
    return regex.test(str);
  }
  return (
    <div className="flex flex-row mt-14 w-[100vw] bg-white h-screen items-start justify-start  px-14 ">
      <div className=" mt-14">
        <div>Zone 1 Queue</div>
        <div className="mt-4">
          {" "}
          {console.log(data)}
          
          <table
            {...getTableProps()}
            style={{ border: "solid 1px gray " }}
            className="w-full "
          >
            <thead className="h-14 ">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="px-4 text-xs bg-samsungKaki first:"
                      {...column.getHeaderProps()}
                      style={{
                        fontFamily: "font_r",
                        border: "solid 1px gray",
                        color: "white",
                      }}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="bg-white first:bg-samsungyellow"
                  >
                    {row.cells.map((cell, i) => {
                      return (
                        <td
                          className="text-center"
                          {...cell.getCellProps()}
                          style={{
                            padding: "10px",
                            border: "solid 1px gray",
                          }}
                        >
                          {hasNumber(cell.value) ? (
                            cell.render("Cell")
                          ) : (
                            <button className="px-6 py-2 rounded-full bg-samsungselected">
                              {cell.render("Cell")}
                            </button>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ml-8 mt-14">
        <div>Admin</div>
        <div
          onClick={() => {
            lottieRef.current.setSpeed(4);
            lottieRef.current.playSegments([0, 66], true);
          }}
          className="flex items-center justify-center px-5 py-5 mt-4 text-white border-[1.5px] border-black rounded-3xl bg-samsungKaki"
        >
          <Lottie
            className="h-14"
            lottieRef={lottieRef}
            animationData={animationData}
            autoplay={false}
            loop={false}
            controls={true}
            speed={0.25}
          />

          <div className="text-xl">Update Data</div>
        </div>
        <div className="flex flex-row items-center justify-between p-2 px-8 mt-4 text-sm rounded-3xl bg-samsungyellow">
          <div>Waiting visitors</div>
          <div className="text-xl">25</div>
          <div>pax</div>
        </div>
        <div className="flex flex-row items-center justify-between p-2 px-8 mt-4 text-sm rounded-3xl bg-samsungyellow">
          <div>Readying visitors</div>
          <div className="text-xl">3</div>
          <div>pax</div>
        </div>
        <div className="flex flex-row items-center justify-between px-8 py-6 mt-4 text-sm rounded-3xl bg-samsungyellow">
          <div>Registration</div>
          <div className="text-xl">Available</div>
        </div>
        <div
          className="mt-10 text-xs text-gray-500"
          style={{ fontFamily: "font_r" }}
        >
          {" "}
          *Reset every 30 seconds.
        </div>
        <div className="flex flex-row">
          <div className="text-sm">Max Waiting people will be</div>{" "}
          <div className="ml-1 text-sm text-red-60">10</div>{" "}
          <div className="ml-1 text-sm text-red-600">pax</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default List;
