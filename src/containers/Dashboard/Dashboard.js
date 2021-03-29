import React from "react";
import {
  CustomerIcon,
  RefundIcon,
  SidebarCategoryIcon,
  MedicineIcon,
  CouponIcon,
  Members,
} from "components/AllSvgIcon";

import {
  BoxContent,
  BoxCounter,
  BoxIcon,
  CategoriesContainer,
  CategoryBox,
  MainContentArea,
  H3,
  P,
  PText,
  Course,
  H6,
  PInfo,
  Progress,
  ProgressContainer,
  Preview,
} from "./Dashboard.style";
import {
  EMPLOYEES,
  COMPANIES,
  ALLOWANCES,
  KRA,
  NHIF,
  NSSF,
} from "settings/constants";
import { Link } from "react-router-dom";
import Button from "components/Button/Button";

const Dashboard = ({ deviceType }) => {
  const { desktop } = deviceType;
  return (
    <div>
      <h4 className="logo-header">Dashboard</h4>

      <Course>
        <Preview>
          <H6>Balance in Mpesa</H6>
          <H3>KES </H3>
          <H6>54,369.90 </H6>

          <Link to={`/reports`}>
            {" "}
            <P>View all Reports &gt; </P>
          </Link>
        </Preview>
        <PInfo>
          {desktop && (
            <ProgressContainer>
              <Progress width={60} />
              <PText>{6}/12 Companies Handled</PText>{" "}
            </ProgressContainer>
          )}

          <H3>
            <strong className="logo-header">Payer</strong> Stats
          </H3>
          <p>
            <strong>Amount paid March 2021: </strong>
            <strong style={{ paddingLeft: "15px" }}>78,963.00</strong>
          </p>
          <p>
            <strong>Balance to pay March 2021: </strong>
            <strong style={{ paddingLeft: "15px" }}>14,265.00</strong>
          </p>
          <Button
            style={{
              float: "right",
              bottom: "30px",
              right: "30px",
            }}
            title={`Download Report`}
          />
        </PInfo>
      </Course>

      <MainContentArea>
        <CategoriesContainer>
          <CategoryBox to={`${EMPLOYEES}`}>
            <BoxIcon>
              <CustomerIcon />
            </BoxIcon>
            <BoxCounter>4</BoxCounter>
            <BoxContent>Employees</BoxContent>
          </CategoryBox>
          <CategoryBox to={`${ALLOWANCES}`}>
            <BoxIcon>
              <SidebarCategoryIcon />
            </BoxIcon>
            <BoxCounter>1</BoxCounter>
            <BoxContent>Allowances</BoxContent>
          </CategoryBox>
          <CategoryBox to={`${KRA}`}>
            <BoxIcon>
              <CouponIcon />
            </BoxIcon>
            <BoxCounter>8</BoxCounter>
            <BoxContent>KRA</BoxContent>
          </CategoryBox>
          <CategoryBox to={`${NHIF}`}>
            <BoxIcon>
              <MedicineIcon />
            </BoxIcon>
            <BoxCounter>8</BoxCounter>
            <BoxContent>NHIF</BoxContent>
          </CategoryBox>
          <CategoryBox to={`${NSSF}`}>
            <BoxCounter>1</BoxCounter>
            <BoxIcon>
              <RefundIcon />
            </BoxIcon>
            <BoxContent>NSSF</BoxContent>
          </CategoryBox>
          <CategoryBox to={`${COMPANIES}`}>
            <BoxIcon>
              <Members />
            </BoxIcon>
            <BoxCounter>1</BoxCounter>
            <BoxContent>Companies</BoxContent>
          </CategoryBox>
        </CategoriesContainer>
      </MainContentArea>
    </div>
  );
};

export default Dashboard;
