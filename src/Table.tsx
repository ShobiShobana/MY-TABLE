import  React,{useMemo} from 'react';
import {useTable,useGlobalFilter,useFilters} from 'react-table';
import TablePagination from '@mui/material/TablePagination';
import dataa from './Data.json';
import {column} from './Column';
import './Table.css';


 function DataTable({columns,data}:any) {
  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns, data
  },useFilters,useGlobalFilter)
  
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
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
          <tfoot>
          <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </tfoot>
     </table>
     </>    
  );
}
function App() {
    const Data =useMemo(()=>dataa,[])
    const Columns=useMemo(()=>column,[]) 
  return (
    <>
        <DataTable   columns={column} data={dataa} />
    </>    
  );
}
  export default App;

