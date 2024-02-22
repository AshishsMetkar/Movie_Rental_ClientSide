import React, { Component } from "react";

const TableHeader = (props) => {
  const { columns, onSort, sortColumn } = props;
  const raiseSort = (column) => {
    let newSortColumn = { ...sortColumn };
    if (sortColumn.path === column.path) {
      if (sortColumn.order === 1) {
        newSortColumn.order = -1;
      } else {
        newSortColumn.order = 1;
      }
    } else {
      newSortColumn.path = column.path;
      newSortColumn.order = 1;
    }
    onSort(newSortColumn);
  };

  const displaySortIcon = (column) => {
    if (sortColumn.path !== column.path) return null;

    return sortColumn.order === 1 ? (
      
      <i className="bi bi-sort-alpha-up-alt"></i>
    ) : (
      <i className="bi bi-sort-alpha-down"></i>
    );
  };
  return (
    <thead>
      <tr>
        {columns.map((c) => (
          <th key={c.path || c.key} style ={{cursor:"pointer"}}onClick={() => raiseSort(c)}>
            {c.header} {" "}
            {displaySortIcon(c)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
