import React, {FC} from 'react';
import arrow from '../../../shared/assets/arrow.png'
import cls from './SortButton.module.css'

interface IProps {
    handleChange: () => void;
    isUpward: boolean;
}

const SortButton: FC<IProps> = ({ handleChange, isUpward }) => {
    return (
        <button
            className={cls.button}
            onClick={handleChange}
        >
            <img className={isUpward ? cls.upward : ''} src={arrow} alt="arrow"/>
        </button>
    );
};

export default SortButton;