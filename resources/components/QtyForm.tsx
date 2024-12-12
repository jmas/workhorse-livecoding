import React, { FormEvent, useCallback } from "react";
import styles from "../css/qty-form.module.css";

export default function QtyForm({
    id,
    value,
    onSubmit,
}: {
    id: number;
    value: number;
    onSubmit: (id: number, diff: number) => void;
}) {
    const handleSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const newValue = Number(event.currentTarget.elements["qty"].value);

            onSubmit(id, newValue - value);
        },
        [id, value],
    );

    const handleButton = useCallback((event: FormEvent<HTMLButtonElement>) => {
        onSubmit(id, event.currentTarget.textContent === "+" ? 1 : -1);
    }, []);

    return (
        <form className={styles.container} onBlur={handleSubmit}>
            <button type="button" onClick={handleButton}>
                –
            </button>

            <input type="number" name="qty" defaultValue={value} />

            <button type="button" onClick={handleButton}>
                +
            </button>
        </form>
    );
}
