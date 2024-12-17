"use client";
import DataTable, {TableColumn} from "react-data-table-component";
import Image from "next/image";
import upArrow from "/public/assets/images/admin/user/up-arrow.svg";
import downArrow from "/public/assets/images/admin/user/down-arrow.svg";
import eyeIcon from "/public/assets/images/admin/user/eye-icon.svg";
import { useRouter } from "next/navigation";
import {ADMIN_RESTAURANTPROFILE, ADMIN_SUBMIT_PROOF} from "@/utils/pages-routes";

type OwnerProps = {
  id: number, name: string, email: string, contactNumber: string, officeNumber: string, role: string
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
  owners: OwnerProps[],
  // proofs: any[]
}

interface AdvertisersReactTableProps {
  // eslint-disable-next-line
  data: DataRow[] | undefined
}

const ExpandedComponent: React.FC<{ data: DataRow }> = ({data}) => {
  return (
   <div className="min-h-[100px] bg-[rgba(243,220,214,0.27)] px-[100px] py-[20px]">
    {data?.owners?.map(owner => (
      <p key={owner.id} className="text-[#676767] font-gilroyMedium text-[14px] mb-[8px]">{owner.name}</p>
    ))}
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
      {name: "Proof", cell: () => (
          <button 
              className="proof-btn w-[100px] h-[45px] rounded-[22px] border border-[#EBC0B4] bg-[rgba(235,192,180,0.21)] text-[#AB877E] font-gilroyRegular text-[12px]"
              onClick={() => {
                  router.push(ADMIN_SUBMIT_PROOF)
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
                  router.push(ADMIN_RESTAURANTPROFILE+"/"+row.id)
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
                expanded:  <Image src={downArrow} alt="upwards arrow" width={30} height={30} />
            }}
            pagination
            responsive
        />
    </div>
  )
}

export default AdvertisersReactTable