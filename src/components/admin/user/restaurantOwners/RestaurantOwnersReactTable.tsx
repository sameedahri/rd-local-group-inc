"use client";
import DataTable, {TableColumn} from "react-data-table-component";
import upArrow from "/public/assets/images/admin/user/up-arrow.svg";
import downArrow from "/public/assets/images/admin/user/down-arrow.svg";
import Image from "next/image";
import eyeIcon from "/public/assets/images/admin/user/eye-icon.svg";
import { useRouter } from "next/navigation";
import {ADMIN_RESTAURANT_PROFILE, ADMIN_SUBMIT_PROOF} from "@/utils/pages-routes";
import TableExtraInfoHeading from "../../adminCommon/TableExtraInfoHeading";
import TableExtraInfo from "../../adminCommon/TableExtraInfo";


type OwnerProps = {
    id: number, name: string, email: string, contactNumber: string, officeNumber: string, role: string
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
type DataRow = {
	id: number;
	restaurantName: string;
	agreementDate: string;
    address: string,
    contactNumber: string,
    tabletopSpecs: string,
    color: string,
    size: string
    proof: string,
    owners: OwnerProps[],
    proofs: ProofsProps[]
}

interface RestaurantOwnersReactTableProps {
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

const RestaurantOwnersReactTable:React.FC<RestaurantOwnersReactTableProps> = ({data}) => {
    const router = useRouter();

    const columns: TableColumn<DataRow>[] = [
        {name: "Id", selector: row => row.id, omit: true},
        {name: "Restaurant Name", selector: row => row.restaurantName, sortable: true},
        {name: "Agreement Date", selector: row => row.agreementDate, sortable: true, cell: (row) => {
            return row.agreementDate.substring(0, row.agreementDate.indexOf('T'));
        }},
        {name: "Address", selector: row => row.address, sortable: true},
        {name: "Contact Number", selector: row => row.contactNumber, sortable: true},
        {name: "Tabletop Specs", selector: row => row.tabletopSpecs, sortable: true},
        {name: "Color", selector: row => row.color, sortable: true},
        {name: "Size", selector: row => row.size, sortable: true},
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
                    router.push(ADMIN_RESTAURANT_PROFILE+"/"+row.id)
                }}
            />
        )}
    ]

    // const customStyles = {
    //     table: {
    //       style: {
    //         minWidth: "1500px"
    //       }
    //     }
    // };

  return (
    <div className="dataTable-wrapper" id="resaurantOwners">
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

export default RestaurantOwnersReactTable