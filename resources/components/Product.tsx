import React, { useCallback } from "react";
import { Product } from "../types/product";
import styles from "../css/product.module.css";

export default function Product({
    data,
    onDeleteClick,
}: {
    data: Product;
    onDeleteClick: (id: number) => void;
}) {
    const handleDeleteClick = useCallback(() => {
        onDeleteClick(data.id);
    }, [data]);

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <label>Назва:</label> {data.name}
            </div>

            <div className={styles.row}>
                <label>SKU:</label> {data.sku}
            </div>

            <div className={styles.row}>
                <label>Кількість:</label> {data.qty}
            </div>

            <div className={styles.actions}>
                <button type="button" onClick={handleDeleteClick}>
                    Видалити
                </button>
            </div>
        </div>
    );
}
