import { Column, IntegratedFiltering, IntegratedPaging, IntegratedSelection, IntegratedSorting, PagingState, SearchState, SelectionState, Sorting, SortingState } from '@devexpress/dx-react-grid';
import { Grid, PagingPanel, SearchPanel, Table, TableHeaderRow, TableSelection, Toolbar, VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { Loading } from '../Loading/Loading';
import '../styles/styles.css';
import { ButtonAdd } from '../buttons/buttons';
import SearchDataTable from './components/search-datatablr';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
interface DataTableProps<T> {
    loading: boolean;
    titulo: string;
    columns: Column[];
    rows: T[],
    sorting: Sorting[];
    onSorting: (sort: Sorting[]) => void;
    tableColumnExtensions: VirtualTable.ColumnExtension[]
    onSelecion: (values: (number | string)[]) => void;
    selection: (number | string)[];
    onNuevo?: () => void;
    nuevoBtn?: boolean;
    children: JSX.Element[] | JSX.Element;
    exportExcelBtn?: boolean;
    onExportExcel?: () => void;
}
export function DataTable<T>({
    columns,
    loading,
    rows,
    titulo,
    sorting,
    onSorting,
    tableColumnExtensions,
    onSelecion,
    selection,
    children,
    nuevoBtn,
    onNuevo,
    exportExcelBtn,
    onExportExcel
}: DataTableProps<T>) {
    return (
        <Paper style={{ position: 'relative' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 0,
                }}
            >
                <Typography sx={{ flexGrow: 1 }} variant="subtitle1" style={{ fontWeight: 'bold' }}>
                    {titulo}
                </Typography>
                <>
                    {
                        exportExcelBtn == true ? <Button
                            sx={{ ml: 1 }}
                            color='primary'
                            size='small'
                            variant="outlined"
                            startIcon={<FileDownloadIcon />}
                            onClick={onExportExcel}
                        >
                            Export excel
                        </Button> : null
                    }
                    {
                        nuevoBtn ? <ButtonAdd
                            sx={{ ml: 1 }}
                            onclick={onNuevo}
                        /> : null
                    }
                </>
            </Box>
            <Divider />
            <Grid
                rows={rows}
                columns={columns}
            >
                <SelectionState
                    selection={selection}
                    onSelectionChange={onSelecion}
                />
                <IntegratedSelection />
                <VirtualTable
                    onTopRowChange={(rowId) => { console.log(rowId) }}
                />

                <SortingState
                    sorting={sorting}
                    onSortingChange={onSorting}
                />
                <IntegratedSorting />

                <SearchState />
                <IntegratedFiltering />
                <Toolbar />

                <PagingState
                    defaultCurrentPage={0}
                    pageSize={10}
                />
                <IntegratedPaging />

                <Table
                    messages={{
                        noData: 'No hay registros',
                    }}
                    columnExtensions={tableColumnExtensions}
                />
                <TableHeaderRow
                    showSortingControls
                    titleComponent={(props) => {
                        return (<TableHeaderRow.Title {...props} className='titulos' />);
                    }}
                    messages={{ sortingHint: `ordenar por` }}
                />
                <TableSelection
                    showSelectAll
                    highlightRow
                />
                <PagingPanel
                    messages={{ info: ({ count, from, to }) => `${from} - ${to} de ${count}`, rowsPerPage: 'Fila por pagina:' }}
                />
                <SearchPanel
                    inputComponent={({ onValueChange, value }) => { return SearchDataTable({ onValueChange, value, selectionCount: selection.length }) }}
                    messages={{ searchPlaceholder: 'Buscar' }}
                />
                {children}
            </Grid>
            {loading && <Loading />}
        </Paper>
    )
}
