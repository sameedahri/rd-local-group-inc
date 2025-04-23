"use client";
import DataTable, {TableColumn} from "react-data-table-component";
import { Trash2 } from "lucide-react";

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
    data: DataRow[] | undefined,
    handleDelete: (id: number) => void
}
const AdminListReactTable:React.FC<AdminListReactTableProps>  = ({data, handleDelete}) => {

    const columns: TableColumn<DataRow>[] = [
        {name: "id", selector: row => row.id, omit: true},
        {name: "Name", selector: row => `${row.firstName} ${row.lastName}`, sortable: true},
        {name: "Email", selector: row => row.email, sortable: true},
        {name: "Mobile Number", selector: row => row.phone, sortable: true},
        {name: "Delete", cell: row => (
            <Trash2 
                size={24}
                className="cursor-pointer text-red-400 ms-3" 
                onClick={() => handleDelete(row.id)} 
            />
        )}
    ]

    return (
        <div className="dataTable-wrapper" id="adminList">
            <DataTable
                columns={columns}
                data={data ? data : []}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 20, 30, 100]}
                responsive
             />
        </div>
    )
}

export default AdminListReactTable