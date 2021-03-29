import React from "react";
import mpesaImage from "image/m-pesa.webp";
import {
  Card,
  H2,
  Title,
  TitleB,
  Desc,
  Portada,
  Avatar,
  Left,
} from "./Employee.style";

import Table from "components/Table/Table";
import { Grid } from "components/Grid/Grid";
import { employeedata } from "./employeedata";
import Button from "components/Button/Button";
import { useAlert } from "react-alert";
import { useSidebar } from "context/sidebar/use-sidebar";
// import Slide from "containers/Slide/Slide";
import EditPostEmployee from "./EditPostEmployee";
import Slide from "containers/Slide/Slide";

const Employee = ({ deviceType }) => {
  console.log(deviceType.mobile);
  const alert = useAlert();

  const { isOpen, toggleSidebar } = useSidebar();

  const handleGeneratePaySlip = (d) => {
    alert.info(`To Generate Payslip for ${d.payroll_month}`);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: <div>PayRoll for James</div>,
        id: "header",

        columns: [
          {
            Header: "Payroll Month",
            accessor: "payroll_month",
          },
          {
            Header: "Payroll Year",
            accessor: "payroll_year",
          },
          {
            Header: "Gross Pay",
            accessor: "gross_pay",
          },

          {
            Header: "NSSf Deduction",
            accessor: "nssf_deduction",
          },
          {
            Header: "NHIF deduction",
            accessor: "nhif_deduction",
          },
          {
            Header: "Tax",
            accessor: "tax",
          },
          {
            Header: "Personal Relief",
            accessor: "personal_reflief",
          },
          {
            Header: "P.A.Y.E.",
            accessor: "paye",
          },
          {
            Header: "Net salary",
            accessor: "net_salary",
          },
          {
            id: "btns",
            Header: () => <h5 className="logo-header">Payslip</h5>,
            accessor: "",
            Cell: ({ row }) => {
              const { original } = row;
              return (
                <div
                  style={{
                    display: "inline-flex",

                    top: "10px",
                    right: "10px",
                    justifyContent: "center",
                    transition: "0.2s ease-in-out",
                  }}
                >
                  <Button
                    onClick={() => handleGeneratePaySlip(original)}
                    title={`GeneratePayslip`}
                  />
                </div>
              );
            },
          },
        ],
      },
    ],

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <h3 className={`logo-header`}>Details and Paysilp (James)</h3>
      <Button onClick={toggleSidebar} title={`Edit Employee`} />
      <Slide deviceType={deviceType}>
        {isOpen && (
          <EditPostEmployee
            onCloseBtnClick={toggleSidebar}
            scrollbarHeight="100vh"
          />
        )}
      </Slide>
      <Card>
        <Left></Left>
        <Avatar src={mpesaImage} alt="img" />

        <Portada></Portada>
        <TitleB>
          <Title>
            company:
            <strong> Company A</strong>
          </Title>
          <H2>James Muturi</H2>

          <Desc></Desc>
          <Title>Status : Paid</Title>
          <Title>Salary : 15,000</Title>
        </TitleB>
      </Card>
      <Grid>
        <Table
          columns={columns}
          data={employeedata}
          getCellProps={(cellInfo, allCells) => ({
            style: {
              backgroundColor: `hsl(${
                cellInfo.column.id === "score"
                  ? 120 * ((100 - cellInfo.value) / 100) * -1 + 120
                  : null
              }, 100%, 67%)`,
            },
          })}
        />
      </Grid>
    </div>
  );
};

export default Employee;
