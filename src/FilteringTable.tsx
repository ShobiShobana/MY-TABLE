

import React,{useMemo,useState} from 'react';
import {useTable,useGlobalFilter,useFilters,usePagination} from 'react-table';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { createTheme } from '@mui/material/styles';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import {ColumnFilter} from './ColumnFiltering';

import {column} from './Column';
import data  from './Data.json';
import './Table.css';


const newcolumn: GridColDef[] = [
  
  {field:'id'},
  {field:'name'},
  {field:'phonenumber'},
  {field:'email'},
  {field:'address'},
]

    function Table ({columns,data}:any) { 
         
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns, data
      },useFilters,useGlobalFilter)

    
      return  (
        <>
        
        <table className='Table'  {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup:any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column:any) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}
                  <div> {column.canFilter? column.render('Filter'):'null'}</div> 
                  
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
            
          </tbody>
            <> 
                  <DataGrid
            rows={data}
            columns={newcolumn}
            pageSize={5}
            rowsPerPageOptions={[25]}
        
          />
        </>  
        </table>
        </> 
      )
        }
        

        function App() {
          const Data =useMemo(()=>data,[])
          const Columns=useMemo(()=>column,[])
        

return (
  <>
      <Table columns={column} data={data} />
  </>
  
);
}
export default App;
 
