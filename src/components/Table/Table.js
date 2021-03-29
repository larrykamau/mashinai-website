import Button from "components/Button/Button";
import React from "react";
import { usePagination, useTable } from "react-table";

// Create a default prop getter
const defaultPropGetter = () => ({});

function Table({ columns, data, getCellProps = defaultPropGetter }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  return (
    <div className="tableWrap">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  // Return an array of prop objects and react-table will merge them appropriately
                  {...column.getHeaderProps([
                    {
                      className: column.className,
                      style: column.style,
                    },
                  ])}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              // Merge user row props in
              <tr>
                {row.cells.map((cell) => {
                  return (
                    <td
                      // Return an array of prop objects and react-table will merge them appropriately
                      {...cell.getCellProps([
                        {
                          className: cell.column.className,
                          style: cell.column.style,
                        },
                        getCellProps(cell, row.cells),
                      ])}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <Button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          title={`<<`}
          style={{ padding: 1, margin: 2, height: "auto" }}
        />
        <Button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          title={"<"}
          style={{ padding: 1, margin: 2, height: "auto" }}
        />
        <Button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          title={">"}
          style={{ padding: 1, margin: 2, height: "auto" }}
        />
        <Button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          title={">>"}
          style={{ padding: 1, margin: 2, height: "auto" }}
        />
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Table;
