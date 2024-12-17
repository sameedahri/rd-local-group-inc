"use client";
import DataTable, {TableColumn} from "react-data-table-component";
import upArrow from "/public/assets/images/admin/user/up-arrow.svg";
import downArrow from "/public/assets/images/admin/user/down-arrow.svg";
import Image from "next/image";
import eyeIcon from "/public/assets/images/admin/user/eye-icon.svg";
import { useRouter } from "next/navigation";
import {ADMIN_RESTAURANTPROFILE, ADMIN_SUBMIT_PROOF} from "@/utils/pages-routes";


type OwnerProps = {
    id: number, name: string, email: string, contactNumber: string, officeNumber: string, role: string
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
    // proofs: any[]
}

interface RestaurantOwnersReactTableProps {
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

const RestaurantOwnersReactTable:React.FC<RestaurantOwnersReactTableProps> = ({data}) => {
    const router = useRouter();
    console.log(data)

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
                expanded:  <Image src={downArrow} alt="upwards arrow" width={30} height={30} />
            }}
            pagination
            responsive
        />
    </div>
  )
}

export default RestaurantOwnersReactTable