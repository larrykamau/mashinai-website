import React, { useState } from "react";

import { useHistory } from "react-router";
import { useAlert } from "react-alert";
// import { closeModal, openModal } from "@redq/reuse-modal";

// import { ConfirmationModal } from "components/ConfirmationModal/ConfirmationModal";
import Table from "components/Table/Table";
import { Grid } from "components/Grid/Grid";
import { ActionButton } from "styles/pages.style";
import { useSidebar } from "context/sidebar/use-sidebar";

import { dummydata } from "./dummydata";
import Button from "components/Button/Button";
// import { EditPostEmployee } from "./EditPostEmployee";
import { CloseIcon, PencilIcon, GiftBox } from "components/AllSvgIcon";
import Slide from "containers/Slide/Slide";
import EditPostEmployee from "./EditPostEmployee";

const Employees = ({ deviceType }) => {
  const [checkedId, setCheckedId] = useState([]);
  // const [eData, setEdata] = useState({});
  const [checked, setChecked] = useState(false);
  const { isOpen, toggleSidebar } = useSidebar();

  const history = useHistory();
  const alert = useAlert();
  const handleEdit = (d) => {
    alert.info(`To edit ${d.name}'s details`);
    // setEdata(d);
    // toggleSidebar();
  };
  const handleBulkGenerate = () => {
    alert.info(`To Generate ${checkedId.length} items`);
  };
  const handleBulkDelete = () => {
    alert.info(`To Delete ${checkedId.length} items`);
    // if (checkedId.length > 0) {
    //   axiosInstance
    //     .delete(`library/product/bulk_delete/?ids=${checkedId.toString()}`)
    //     .then((res) => {
    //       setProducts([]);
    //       getProducts();
    //       alert.info(`${res.data.length} Items deleted`);
    //       for (let i = 0; i < checkedId.length; i++) {
    //         const product_instance = checkedId[i];
    //         alert.error(
    //           `${
    //             dummydata.filter(
    //               (filteredObj) => filteredObj.id === product_instance
    //             )[0].name
    //           } Deleted`
    //         );
    //       }
    //     });
    // } else {
    //   alert.info("make a selection to continue");
    // }
  };
  const handleView = (d) => {
    history.push(`/employee/${d.id}/`);
  };
  const handleDelete = (d) => {
    alert.info(`To Delete ${d.name}`);
    // const cta = () =>
    //   axiosInstance
    //     .delete(`/library/product/${d.id}/`, d, tokenConfig())
    //     .then((res) => {
    //       alert.error(`${res.data.name} Deleted`);
    //     })
    //     .catch((err) => {
    //       alert.error(apiErrorHandler(err));
    //     });
    // handleConfirmModal(d.name, cta);
  };

  // const handleModal = (props) => {
  //   openModal({
  //     show: true,
  //     config: {
  //       className: "cartPopup",
  //       width: "auto",
  //       height: "auto",
  //       enableResizing: false,
  //       disableDragging: true,
  //       transition: {
  //         tension: 360,
  //         friction: 40,
  //       },
  //     },
  //     closeOnClickOutside: true,
  //     component: EditPostEmployee,
  //     closeComponent: () => <div />,
  //     componentProps: {
  //       onCloseBtnClick: closeModal,
  //       scrollbarHeight: 330,
  //       props,
  //     },
  //   });
  // };
  // const handleConfirmModal = (header, cta) => {
  //   openModal({
  //     show: true,
  //     config: {
  //       className: "cartPopup",
  //       width: "auto",
  //       height: "auto",
  //       enableResizing: false,
  //       disableDragging: true,
  //       transition: {
  //         tension: 360,
  //         friction: 40,
  //       },
  //     },
  //     // closeOnClickOutside: true,
  //     component: ConfirmationModal,
  //     closeComponent: () => <div />,
  //     componentProps: {
  //       header: header,
  //       cta: cta,
  //     },
  //   });
  // };

  function onAllCheck(event) {
    if (event.target.checked) {
      const idx =
        dummydata && dummydata.map((category) => category.id.toString());
      setCheckedId(idx);
    } else {
      setCheckedId([]);
    }
    setChecked(event.target.checked);
  }
  function handleCheckbox(event) {
    const { name } = event.currentTarget;
    if (!checkedId.includes(name)) {
      setCheckedId((prevState) => [...prevState, name]);
    } else {
      setChecked(false);
      setCheckedId((prevState) => prevState.filter((id) => id !== name));
    }
  }

  const columns = React.useMemo(
    () => [
      {
        Header: (
          <div>
            All Employees From All Companies
            {checkedId.length > 0 && (
              <>
                <Button
                  style={{
                    background: "#e90b0bbf",
                    margin: "5px",
                    height: "25px",
                    padding: "0 10px",
                  }}
                  onClick={handleBulkDelete}
                  title={`Delete Selected`}
                />
                <Button
                  style={{
                    margin: "5px",
                    height: "25px",
                    padding: "0 10px",
                  }}
                  onClick={handleBulkGenerate}
                  title={`Generate excel for Selected`}
                />
              </>
            )}
          </div>
        ),
        id: "header",

        columns: [
          {
            id: "checkbox",
            accessor: "",
            Cell: ({ row }) => {
              const { original } = row;
              const i = original.id.toString();
              return (
                <div style={{ textAlign: "center" }}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name={i}
                    checked={checkedId.includes(i)}
                    onChange={handleCheckbox}
                  />
                </div>
              );
            },
            Header: (x, l) => {
              // console.log("-========XX======-", x);
              return (
                <div style={{ textAlign: "center" }} key={l}>
                  <input
                    type="checkbox"
                    value="checkAll"
                    className="checkbox"
                    checked={checked}
                    onChange={onAllCheck}
                  />
                </div>
              );
            },
          },
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "NSSF",
            accessor: "nssf",
          },

          {
            Header: "NHIF",
            accessor: "nhif",
          },
          {
            Header: "KRA",
            accessor: "kra",
          },
          {
            Header: "Company",
            accessor: "company",
          },
          {
            id: "btns",
            Header: () => <h5 className="logo-header">Actions</h5>,
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
                  <ActionButton
                    onClick={() => handleEdit(original)}
                    className="edit-btn"
                  >
                    <PencilIcon />
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleDelete(original)}
                    className="delete-btn"
                  >
                    <CloseIcon />
                  </ActionButton>
                  <ActionButton
                    className="view-btn"
                    onClick={() => handleView(original)}
                  >
                    <GiftBox />
                  </ActionButton>
                </div>
              );
            },
          },
        ],
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checked, checkedId]
  );
  return (
    <div style={{ display: "block", alignItems: "center" }}>
      <h2 className="logo-header">Employees</h2>

      <Button onClick={toggleSidebar} title={`Add Employee`} />
      <Slide deviceType={deviceType}>
        {isOpen && (
          <EditPostEmployee
            onCloseBtnClick={toggleSidebar}
            scrollbarHeight="100vh"
          />
        )}
      </Slide>
      <Grid>
        <Table
          columns={columns}
          data={dummydata}
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

export default Employees;
