import React from 'react';
import classes from './select.module.css';

const MySelect = ({ options, defaultValue, value, onChange }) => {

    return (
        <div className={classes.select}>
            <select value={value} onChange={event => { onChange(event.target.value) }}>
                <option value="">{defaultValue}</option>
                {options.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
            </select>
        </div>
    );
}
export default MySelect;
