"use client";
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';
import "datatables.net";
import 'datatables.net-responsive';
import {useRef, useEffect} from "react";


interface AdminListTableProps {
    // eslint-disable-next-line
    data: any[] | undefined,
    columns: {title: string, data: string}[]
}

const AdminListTable:React.FC<AdminListTableProps> = ({data, columns}) => {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        if(tableRef.current) {
            const table = $(tableRef.current).DataTable({
                data: data,
                columns: [
                    {
                        title: '<input type="checkbox" id="select-all" class="checkbox-column first-column" />',
                        data: null,
                        orderable: false,
                        className: "select-checkbox no-sort-icon",
                        defaultContent: '<input type="checkbox" class="checkbox-column first-column" />'
                    },
                    ...columns
                ],
                columnDefs: [
                    {targets: "_all", className: "all-columns"},
                    {targets: 1, visible: false},
                    {targets: 2, className: "prominent-column"},
                    {targets: [3, 4], className: "sec-column"},
                    {targets: [4], className: "last-column"}
                ],
                scrollX: true,
                // scrollY: "400px",
                destroy: true,
                searching: false,
                lengthChange: false,
            });
            // oncheck
            $('#select-all').on('click', function() {
                const rows = table.rows({search: 'applied'}).nodes();
                const isChecked = (this as HTMLInputElement).checked;
                $('input[type="checkbox"]', rows).prop('checked', isChecked);
            });
            // cleanup
            return () => {
                table.destroy();
                $('#select-all').off('click');
            };
        }
        // cleanup
        // return () => {
        //     if(tableRef.current) {
        //         $(tableRef.current).DataTable().destroy();
        //         $('#select-all').off('click');
        //     }
        // };
    }, [data, columns])

    return (
        <div className="datatable-wrapper">
            <table ref={tableRef} className="datatable-classes" style={{minWidth: '600px'}}></table>
        </div>
    )
}

export default AdminListTable