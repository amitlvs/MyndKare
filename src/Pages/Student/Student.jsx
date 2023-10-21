import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Table } from '../../components/Table'
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { read, utils, writeFile } from 'xlsx';


export function Student() {
    const styles = {
        containerStudent: {
            padding: "20px 50px 50px 50px",
        },
    };

    const tableOptions = {
        height: "auto",
        width: "100%",
        initialState: {
            pagination: {
                paginationModel: {
                    pageSize: 10,
                },
            },
        },
        pageSizeOptions: [5, 10, 25],
        checkboxSelection: false,
        disableSelectionOnClick: true,
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", width: 170, editable: true },
        {
            field: "guardianName",
            headerName: "Guardian's Name",
            width: 170,
        },
        {
            field: "admissionNo",
            headerName: "Admission No",
            type: "number",
            width: 110,
        },
        {
            field: "school",
            headerName: "School",
            width: 220,
        },
        {
            field: "schoolClass",
            headerName: "School",
            width: 90,
        },

        {
            field: "section",
            headerName: "Section",
            width: 100,
        },
        {
            field: "examKey",
            headerName: "Exam Key",
            width: 120,
        },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <Box>
                        <Tooltip title="View details">
                            <IconButton onClick={() => { }}>
                                <Preview />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit details">
                            <IconButton onClick={(e) => {
                                console.log("edit--------")
                            }}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete details">
                            <IconButton
                                onClick={() => {
                                    console.log("delete--------")

                                }}
                            >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                );
            },
        },
    ];

    const students = [
        { id: 1, name: "Solaris Kumar", guardianName: "daniel people", admissionNo: "2013", school: "Oxford School", schoolClass: "X", section: "A", examKey: "alphaBeta" }
    ]

    const exportToExcel = async () => {
        const worksheet = utils.json_to_sheet(students);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
        writeFile(workbook, 'data.xlsx');
    }

    const uploadStudent = async () => {
        try {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.xlsx'; // Specify the accepted file type (Excel)
            fileInput.addEventListener('change', async (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        try {
                            const data = new Uint8Array(e.target.result);
                            const workbook = read(data, { type: 'array' });
                            const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
                            const sheet = workbook.Sheets[sheetName];
                            const jsonData = utils.sheet_to_json(sheet);
                            //   dispatch(createQuestion(jsonData));
                            students.push(jsonData);
                            console.log(jsonData, "yeh aya hai");
                            // setGridData(jsonData);
                        } catch (error) {
                            console.error('Error parsing Excel file:', error);
                        }
                    };
                    reader.readAsArrayBuffer(file);
                }
            });

            fileInput.click();
        } catch (error) {
            console.error('Error uploading question:', error);
        }
    };


    return (
        <>
            <div style={styles.containerStudent}>
                <Typography
                    className="text-sky-600 text-4xl pb-4"
                    variant="h4"
                    gutterBottom
                >
                    Students
                </Typography>

                <div className="pb-4">
                    <Button className="mx-2" variant="contained" >
                        Create Student
                    </Button>
                    <Button variant="contained" onClick={uploadStudent} >
                        <FileUploadRoundedIcon />
                    </Button>
                </div>

                <Table
                    height={tableOptions.height}
                    width={tableOptions.width}
                    rows={students}
                    columns={columns}
                    initialState={tableOptions.initialState}
                    pageSizeOptions={tableOptions.pageSizeOptions}
                    checkboxSelection={tableOptions.checkboxSelection}
                    disableSelectionOnClick={tableOptions.disableSelectionOnClick}
                />
                <div className="flex justify-end">
                    <Button className="my-2" onClick={exportToExcel} variant="contained">
                        Download <DownloadRoundedIcon />
                    </Button>
                </div>
            </div></>
    )
}

export default Student;