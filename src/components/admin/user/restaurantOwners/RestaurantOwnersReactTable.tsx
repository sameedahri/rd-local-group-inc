"use client";
import DataTable, {TableColumn} from "react-data-table-component";
import { useState, useEffect } from "react";


type OwnerProps = {
    id: number, name: string, email: string, contactNumber: string, officeNumber: string, role: string
}

type DataRow = {
	id: string;
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
    data: any[] | undefined
}

const ExpandedComponent: React.FC<{ data: DataRow }> = ({data}) => {
    const [owners, setOwners] = useState<OwnerProps[] | null>(null);

    useEffect(() => {
        setOwners(data?.owners)
    }, [data])

    return (
     <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }} className="bg-[rgba(243,220,214,0.27)]">
      {owners?.map(owner => (
        <p key={owner.id}>{owner.name}</p>
      ))}
    </div>
    )
};

const RestaurantOwnersReactTable:React.FC<RestaurantOwnersReactTableProps> = ({data}) => {
    console.log(data)

    const columns: TableColumn<DataRow>[] = [
        {name: "Id", selector: row => row.id, omit: true},
        {name: "Restaurant Name", selector: row => row.restaurantName},
        {name: "Agreement Date", selector: row => row.agreementDate},
        {name: "Address", selector: row => row.address},
        {name: "Contact Number", selector: row => row.contactNumber},
        {name: "Tabletop Specs", selector: row => row.tabletopSpecs},
        {name: "Color", selector: row => row.color},
        {name: "Size", selector: row => row.size},
        {name: "Proof", selector: row => row.proof, cell: () => (
            <button 
                className="proof-btn w-[100px] h-[45px] rounded-[22px] border border-[#EBC0B4] bg-[rgba(235,192,180,0.21)] text-[#AB877E] font-gilroyRegular text-[12px]"
            >Upload Proof</button>
        )},
    ]

  return (
    <div className="dataTable-wrapper">
        <DataTable 
            columns={columns} 
            data={data ? data : []} 
            expandableRows={true}
            expandOnRowClicked={true}
            expandableRowsComponent={ExpandedComponent}
            pagination
        />
    </div>
  )
}

export default RestaurantOwnersReactTable