import React from "react";
import cn from "classnames";
import styles from "./Checkbox.module.sass";

const Checkbox = (props) => {
    /**
     * Unpack props
     */
    const {
        name,
        value,
        checked,
        className,
        classNameRow,
        onChange,
        content,
        note,
        error,
        disabled
    } = props;

    /**
     * Render HTML
     */
    return (
        <div className={cn(styles.form_row, classNameRow)}>
            <label className={cn(styles.checkbox, className)}>
                <input
                    type="checkbox"
                    name={name}
                    className={styles.input}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled ?? false}
                />
                <span className={styles.inner}>
                    <span className={styles.tick}></span>
                    <span className={styles.text} dangerouslySetInnerHTML={{ __html: content }}></span>
                    {note && <span className={styles.note}>{note}</span>}   
                </span>
            </label>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};

export default Checkbox;
