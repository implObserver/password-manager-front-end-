import { useSelector } from "react-redux";
import styles from './styles/PaginationShowcaseOfPasswords.module.css'
import {
    Password,
    PasswordContext,
    passwordsActions,
    selectCurrentPage,
    selectItemsPerPage,
    selectPaginatedPairs,
    selectPairs
} from "@/services/passKeeper/entities/password";
import { useAppDispatch } from "@/common/shared/lib";
import { AddPassword } from "@/services/passKeeper/features/addPassword";

export const PaginationShowcaseOfPasswords = () => {
    const dispatch = useAppDispatch();
    const pairs = useSelector(selectPairs);
    const paginatedPairs = useSelector(selectPaginatedPairs);
    const currentPage = useSelector(selectCurrentPage);
    const itemsPerPage = useSelector(selectItemsPerPage);
    const totalPages = Math.max(1, Math.ceil(pairs.length / itemsPerPage));
    console.log(pairs)
    const loadNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(passwordsActions.goToNextPage());
        }
    };

    const loadPreviousPage = () => {
        if (currentPage > 1) {
            dispatch(passwordsActions.goToPreviousPage());
        }
    };

    const fill = () => {
        return paginatedPairs.map((pair, index) => {
            return (
                <div className={styles.wrapper} key={index}>
                    <PasswordContext.Provider value={pair}>
                        <Password></Password>
                    </PasswordContext.Provider>
                </div>
            )
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                {fill()}
                <AddPassword></AddPassword>
            </div>
            <div className={styles.pagination}>
                <button className={currentPage === 1
                    ? styles.block
                    : styles.pagination_btn}
                    onClick={loadPreviousPage}>
                    назад
                </button>
                <span className={totalPages === 1
                    ? styles.block
                    : styles.total_pages}>
                    {currentPage} / {totalPages}
                </span>
                <button
                    className={totalPages === currentPage
                        ? styles.block
                        : styles.pagination_btn}
                    onClick={loadNextPage}>
                    вперед
                </button>
            </div>
        </div >
    )
};