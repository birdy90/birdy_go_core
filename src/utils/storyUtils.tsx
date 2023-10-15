import {ColumnDef, createColumnHelper} from "@tanstack/react-table";
import {randomString} from "./randomString";

const columnHelper = createColumnHelper();
const columnsGenerator = (len: number, size: number) => {
    return [...Array(len)].map((_, index) => {
        return columnHelper.accessor(`column${index}` as string, {
            id: `column${index}`,
            header: `Col ${index}`,
            size,
        }) as ColumnDef<unknown>;
    });
};

export const tableDataGenerator = (columnLen: number, len: number, stringLen = 7) => {
    const columns = columnsGenerator(columnLen, stringLen * 15);
    const data = [...Array(len)].map(() => {
        const rowData = {};
        columns.forEach((column) => {
            rowData[column.id as never] = randomString(stringLen) as never;
        });
        return rowData;
    });
    return {columns, data};
};