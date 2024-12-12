import { router } from "@inertiajs/react";
import React, { useCallback, useState } from "react";
import Layout from "../../components/Layout";
import ProductForm from "../../components/ProductForm";
import Product from "../../components/Product";
import QtyForm from "../../components/QtyForm";
import client from "../client";
import { Product as TProduct } from "../../types/product";
import styles from "../../css/products.module.css";

export default function Index({ data }: { data: TProduct[] }) {
    const [errors, setErrors] = useState<any>();

    const handleSubmit = useCallback(async (values: any) => {
        setErrors(null);

        try {
            const { data } = await client.post("/products", values);

            router.reload();
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }, []);

    const handleQtySubmit = useCallback(async (id: number, diff: number) => {
        try {
            const { data } = await client.put(`/products/${id}`, {
                _method: "put",
                diff,
            });

            router.reload();
        } catch (error) {
            alert(error.response.data.message);
        }
    }, []);

    const handleDelete = useCallback(async (id: number) => {
        if (!confirm("Ви впевнені?")) {
            return;
        }

        try {
            await client.delete(`/products/${id}`);

            router.reload();
        } catch (error) {
            alert(error.response.data.message);
        }
    }, []);

    return (
        <Layout>
            <ProductForm errors={errors} onSubmit={handleSubmit} />

            <ul className={styles.list}>
                {data.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <Product data={item} onDeleteClick={handleDelete} />

                        <QtyForm
                            key={`${item.id}_${item.qty}`}
                            id={item.id}
                            value={item.qty}
                            onSubmit={handleQtySubmit}
                        />
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
