"use client";
import DataTable, {TableColumn} from "react-data-table-component"

type DataRow = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    admin: string, 
    password: string
}
interface AdminListReactTableProps {
    // eslint-disable-next-line
    data: DataRow[] | undefined
}
const AdminListReactTable:React.FC<AdminListReactTableProps>  = ({data}) => {
    const columns: TableColumn<DataRow>[] = [
        {name: "id", selector: row => row.id, omit: true},
        {name: "Name", selector: row => `${row.firstName} ${row.lastName}`, sortable: true},
        {name: "Email", selector: row => row.email, sortable: true},
        {name: "Mobile Number", selector: row => row.phone, sortable: true}
    ]

    return (
        <div className="dataTable-wrapper" id="adminList">
            <DataTable
                columns={columns}
                data={data ? data : []}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                responsive
             />
        </div>
    )
}

export default AdminListReactTable