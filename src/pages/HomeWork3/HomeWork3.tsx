import React, {MouseEventHandler, useCallback, useMemo, useState} from 'react';
import {SortableTable} from "./SortableTable/SortableTable";
import {user1, user2, user3, user4} from "./constants";

export interface IUser {
    id: number,
    userId: number,
    title: string
}

const HomeWork3 = () => {
    const [sortKey, setSortKey] = useState<keyof IUser>("id")
    const [isUpward, setIsUpward] = useState<boolean>(true)

    const sortFunction = useCallback(
        (firstUser: IUser, secondUser: IUser) =>
            isUpward
                ? String(firstUser[sortKey]).localeCompare(String(secondUser[sortKey]), undefined, { numeric: true })
                : String(secondUser[sortKey]).localeCompare(String(firstUser[sortKey]), undefined, { numeric: true }),
        [sortKey, isUpward]
    )

    const sortedRows = useMemo(
        () => [user1, user2, user3, user4].sort(sortFunction),
        [sortFunction]
    )

    const handleSortFieldChange = (key: keyof IUser) => {
        if (sortKey === key) {
            setIsUpward((prev) => !prev)
        } else {
            setSortKey(key)
        }
    }

    return (
        <div className="centered-container">
            <SortableTable
                rows={sortedRows}
                handleChange={handleSortFieldChange}
                isUpward={isUpward}
            />
        </div>
    );
};

export default HomeWork3;