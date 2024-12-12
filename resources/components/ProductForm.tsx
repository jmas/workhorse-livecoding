import React, { useState, useCallback, FormEvent } from "react";
import { ProductForm } from "../types/product";
import styles from "../css/products-form.module.css";

export default function ProductForm({
    errors,
    onSubmit,
}: {
    errors?: any;
    onSubmit: (data: ProductForm) => void;
}) {
    const [values, setValues] = useState<ProductForm>({
        name: "",
        sku: "",
        qty: 1,
    });

    const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        const key = String(e.currentTarget.getAttribute("name"));
        const value = e.currentTarget.getAttribute("value");

        setValues((values: ProductForm) => ({
            ...values,
            [key]: key === "qty" ? Number(value) : value,
        }));
    }, []);

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            onSubmit(values);
        },
        [values, onSubmit],
    );

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label>Назва</label>
                <input type="text" name="name" onChange={handleChange} />
                {errors?.name && <div>{errors.name}</div>}
            </div>

            <div className={styles.field}>
                <label>SKU</label>
                <input type="text" name="sku" onChange={handleChange} />
                {errors?.sku && <div>{errors.sku}</div>}
            </div>

            <div className={styles.field}>
                <label>Кількість</label>
                <input
                    type="number"
                    name="qty"
                    onChange={handleChange}
                    min="0"
                />
                {errors?.qty && <div>{errors.qty}</div>}
            </div>

            <div className={styles.buttons}>
                <button>Додати</button>
            </div>
        </form>
    );
}
