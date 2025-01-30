"use client";
import React from "react";
import DataTable, {TableColumn} from "react-data-table-component";
import Image from "next/image";
import upArrow from "/public/assets/images/admin/user/up-arrow.svg";
import downArrow from "/public/assets/images/admin/user/down-arrow.svg";
import eyeIcon from "/public/assets/images/admin/user/eye-icon.svg";
import { useRouter } from "next/navigation";
import {ADMIN_ADVERTISER_PROFILE, ADMIN_SUBMIT_PROOF} from "@/utils/pages-routes";
import TableExtraInfo from "../../adminCommon/TableExtraInfo";
import TableExtraInfoHeading from "../../adminCommon/TableExtraInfoHeading";


type OwnerProps = {
  id: number,
  name: string, 
  email: string, 
  contactNumber: string,
  officeNumber: string, 
  role: string
}
type ProofsProps = {
  id: number,
  businessAddress: string,
  businessContact: string,
  businessName: string,
  color: string,
  createdAt: string,
  customerId: string,
  dateOfSubmission: string,
  design: string,
  images: string[],
  proofQR: string,
  size: string,
  status: string,
  title: string,
  type: string
}
type CreditCardProps = {
  id: number,
  cardBillingStreet: string,
  cardCvc: string,
  cardExpDate: string,
  cardNumber: string,
  cardZipCode: string,
  nameOnCard: string
}
type CheckProps = {
  id: number,
  checkNumber: string,
  eCheckAccountNumber: string,
  eCheckRouteNumber: string,
  nameOnCheck: string,
  phoneNumberOnCheck: string
}
type DataRow = {
  id: number;
  companyName: string;
  address: string;
  city: string,
  state: string,
  zip: string,
  adAgreementDetails: string,
  adPrice: string
  isOneTimePayment: boolean,
  is2Payments: boolean,
  setupFee: string,
  totalDueAmount: string,
  proof: string,
  contactNumber: string,
  owners: OwnerProps[],
  creditCards: CreditCardProps[],
  checks: CheckProps[],
  proofs: ProofsProps[],
}

interface AdvertisersReactTableProps {
  // eslint-disable-next-line
  data: DataRow[] | undefined
}

const ExpandedComponent: React.FC<{ data: DataRow }> = ({data}) => {
  return (
   <div className="flex gap-x-[50px] min-h-[100px] bg-[rgba(243,220,214,0.27)] px-[100px] py-[20px]">
      {/* Owners */}
      <div>
        <TableExtraInfoHeading heading="Owners" />
        {data?.owners?.map(owner => (
          <div key={owner.id} className="flex flex-col gap-y-[5px] border-b pb-3 mb-3">
            <TableExtraInfo infoTitle="Name" infoValue={owner.name} />
            <TableExtraInfo infoTitle="Email Address" infoValue={owner.email} />
            <TableExtraInfo infoTitle="Office Number" infoValue={owner.officeNumber} />
            <TableExtraInfo infoTitle="Contact Number" infoValue={owner.contactNumber} />
            <TableExtraInfo infoTitle="Role" infoValue={owner.role} />
          </div>
        ))}
      </div>
      {/* Credit Cards */}
      <div>
        <TableExtraInfoHeading heading="Credit Cards" />
        {data?.creditCards?.map(card => (
          <div key={card.id} className="flex flex-col gap-y-[5px] border-b pb-3 mb-3">
            <TableExtraInfo infoTitle="Card Number" infoValue={card.cardNumber} />
            <TableExtraInfo infoTitle="Name on Card" infoValue={card.nameOnCard} />
            <TableExtraInfo infoTitle="Street" infoValue={card.cardBillingStreet} />
            <TableExtraInfo infoTitle="Zip Code" infoValue={card.cardZipCode} />
            <TableExtraInfo infoTitle="Exp Date" infoValue={card.cardExpDate} />
            <TableExtraInfo infoTitle="CVC" infoValue={card.cardCvc} />
          </div>
        ))}
      </div>
      {/* Cheques */}
      <div>
        <TableExtraInfoHeading heading="Cheques" />
        {data?.checks?.map(check => (
          <div key={check.id} className="flex flex-col gap-y-[5px] border-b pb-3 mb-3">
            <TableExtraInfo infoTitle="Name on Cheque" infoValue={check.nameOnCheck} />
            <TableExtraInfo infoTitle="Cheque Number" infoValue={check.checkNumber} />
            <TableExtraInfo infoTitle="Phone Number on Cheque" infoValue={check.phoneNumberOnCheck} />
            <TableExtraInfo infoTitle="E-Cheque Info - Route Number" infoValue={check.eCheckRouteNumber} />
            <TableExtraInfo infoTitle="Acct Number" infoValue={check.eCheckAccountNumber} />
          </div>
        ))}
      </div>
      {/* Proofs */}
      <div>
        <TableExtraInfoHeading heading="Proofs" />
        {data?.proofs?.map(proof => (
          <div key={proof.id} className="flex flex-col gap-y-[5px] border-b pb-3 mb-3">
            <TableExtraInfo infoTitle="Customer ID" infoValue={proof.customerId} />
            <TableExtraInfo infoTitle="Business Name" infoValue={proof.businessName} />
            <TableExtraInfo infoTitle="Business Contact" infoValue={proof.businessContact} />
            <TableExtraInfo infoTitle="Business Address" infoValue={proof.businessAddress} />
            <TableExtraInfo infoTitle="Title" infoValue={proof.title} />
            <TableExtraInfo infoTitle="Type" infoValue={proof.type} />
            <TableExtraInfo infoTitle="Color" infoValue={proof.color} />
            <TableExtraInfo infoTitle="Size" infoValue={proof.size} />
            <TableExtraInfo infoTitle="Design" infoValue={proof.design} />
            <TableExtraInfo infoTitle="QR" infoValue={proof.proofQR} />
            <TableExtraInfo infoTitle="Date Of Submission" infoValue={proof.dateOfSubmission} />
            <TableExtraInfo infoTitle="Status" infoValue={proof.status} />
          </div>
        ))}
      </div>
  </div>
  )
};

const AdvertisersReactTable:React.FC<AdvertisersReactTableProps> = ({data}) => {
  const router = useRouter();

  const columns: TableColumn<DataRow>[] = [
      {name: "Id", selector: row => row.id, omit: true},
      {name: "Company Name", selector: row => row.companyName, sortable: true},
      {name: "Address", selector: row => row.address},
      {name: "City", selector: row => row.city, sortable: true},
      {name: "State", selector: row => row.state, sortable: true},
      {name: "Zip", selector: row => row.zip},
      {name: "Ad Agreement Details", selector: row => row.adAgreementDetails},
      {name: "Ad Price", selector: row => row.adPrice},
      {name: "One Time Payment", selector: row => row.isOneTimePayment, cell: (row) => {
        return row.isOneTimePayment ? "yes" : "no"
      }},
      {name: "Two Payments", selector: row => row.is2Payments, cell: (row) => {
        return row.is2Payments ? "yes" : "no"
      }},
      {name: "Setup Fee", selector: row => row.setupFee},
      {name: "Total Due Amount", selector: row => row.totalDueAmount},
      {name: "Proof", cell: (row) => (
          <button 
              className="proof-btn w-[100px] h-[45px] rounded-[22px] border border-[#EBC0B4] bg-[rgba(235,192,180,0.21)] text-[#AB877E] font-gilroyRegular text-[12px]"
              onClick={() => {
                  router.push(ADMIN_SUBMIT_PROOF+"/"+row.contactNumber)
              }}
          >Upload Proof</button>
      )},
      {name: "View", 
          cell: (row) => (
          <Image 
              className="ms-[5px] cursor-pointer" 
              src={eyeIcon} 
              alt="View" 
              width={24} 
              height={24} 
              onClick={() => {
                  router.push(ADMIN_ADVERTISER_PROFILE+"/"+row.id)
              }}
          />
      )}
  ]

  // const customStyles = {
  //   table: {
  //     style: {
  //       minWidth: "1500px"
  //     }
  //   }
  // };

  return (
    <div className="dataTable-wrapper" id="advertisers">
        <DataTable 
            columns={columns} 
            data={data ? data : []} 
            // customStyles={customStyles}
            expandableRows={true}
            // expandOnRowClicked={true}
            expandableRowsComponent={ExpandedComponent}
            expandableIcon={{
                collapsed: <Image src={upArrow} alt="upwards arrow" width={30} height={30} />,
                expanded:  <Image src={downArrow} alt="downwards arrow" width={30} height={30} />
            }}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            responsive
        />
    </div>
  )
}

export default AdvertisersReactTable