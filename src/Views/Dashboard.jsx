import React from "react";
import { useTable } from "react-table";

const Dashboard = () => {
  const data = React.useMemo(
    () => [
      {
        col1: '00',
        col2: 'Total Visitors',
        col3:'9,999',
        col4:'9,999',
        col5:'9,999',
        col6:'9,999',
        col7:'9,999',
      },
      {
        col1: '01',
        col2: 'Zone1',
        col3:'9,999',
        col4:'9,999',
        col5:'9,999',
        col6:'9,999',
        col7:'9,999',
      },
      {
        col1: '02',
        col2: 'Zone2',
        col3:'9,999',
        col4:'9,999',
        col5:'9,999',
        col6:'9,999',
        col7:'9,999',
      },
      {
        col1: '03',
        col2: 'Zone3',
        col3:'9,999',
        col4:'9,999',
        col5:'9,999',
        col6:'9,999',
        col7:'9,999',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'col1',
        
      },
      {
        Header: 'Tag',
        accessor: 'col2',
      },
      {
        Header: '02/27',
        accessor: 'col3',
      },
      {
        Header: '02/28',
        accessor: 'col4',
      },
      {
        Header: '03/01',
        accessor: 'col5',
      },
      {
        Header: '03/02',
        accessor: 'col6',
      },
      {
        Header: 'Visitors',
        accessor: 'col7',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <div className="flex flex-col mt-14 w-[100vw] h-screen items-center justify-start bg-white px-48 ">
      <div className="flex justify-start w-full mt-16 text-sm text-gray-500" style={{fontFamily:'font_r'}}  >
        *Reset every 30 seconds.
      </div>
      <div className="flex flex-row items-center justify-center w-full py-4 mt-2 rounded-full bg-samsungyellow">
        <div className="text-sm font-bold">Total Visitors </div>
        <div className="ml-5 text-3xl ">8,760</div>
      </div>
      <div className="w-full text-sm font-semibold mt-14">Visitor Detail</div>
      <div className="w-full bg-gray-100" >
        {" "}
        <table {...getTableProps()} style={{ border: 'solid 1px gray ' }} className="w-full">
       <thead className="h-14 " >
         {headerGroups.map(headerGroup => (
           <tr  {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
               className="bg-samsungKaki"
                 {...column.getHeaderProps()}
                 style={{
                  border: 'solid 1px gray',
                   color: 'white',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody  {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()} className="bg-white first:bg-samsungyellow" >
               {row.cells.map(cell => {
                 return (
                   <td
                   className="text-center last:w-40"
                     {...cell.getCellProps()}
                     style={{
                       padding: '26px',
                       border: 'solid 1px gray',
                
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
      </div>
    </div>
  );
};

export default Dashboard;
