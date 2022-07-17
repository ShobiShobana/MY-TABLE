import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './Table';
import Table from './FilteringTable';
import {
  makeStyles,
  createStyles,
  Theme,
  ThemeProvider
} from "@mui/material/styles";

function App() {
  return (
    <div className="App">
      <DataTable/>
      {/* <Table/> */}
    </div>
  );
}

export default App;
