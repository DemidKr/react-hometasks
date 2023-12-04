import {FC} from "react";
import {IUser} from "../HomeWork3";
import cls from './SortableTable.module.css'
import SortButton from "../SortButton/SortButton";

interface IProps {
    rows: Array<Record<string, string | number>>;
    handleChange: (key: keyof IUser) => void;
    isUpward: boolean;
}

export const SortableTable: FC<IProps> = ({ rows, handleChange, isUpward }) => {

    return <table className={cls.table}>
        <thead>
        <tr>
            <th>Id <SortButton isUpward={isUpward} handleChange={() => handleChange("id" as keyof IUser)}/></th>
            <th>UserId <SortButton isUpward={isUpward} handleChange={() => handleChange("userId" as keyof IUser)}/></th>
            <th>Title <SortButton isUpward={isUpward} handleChange={() => handleChange("title" as keyof IUser)}/></th>
        </tr>
        </thead>
       <tbody>
       {rows.map((row, index) => (
           <tr key={index}>
               <td>{row.id}</td>
               <td>{row.userId}</td>
               <td>{row.title}</td>
           </tr>
           ))
       }
       </tbody>
    </table>
};