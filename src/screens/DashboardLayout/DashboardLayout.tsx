import React, { FC } from "react"
import Header from "../../components/Layout/header/Header"
import SideBar from "../../components/Layout/sidebar/SideBar"
import styles from './dashboardLayout.module.scss';
import Footer from "../../components/Layout/footer/Footer";

interface ComponentProps {
    children?: React.ReactNode;
}

const DashboardLayout: FC<ComponentProps> = ({ children }) => {
    return (
        <section className={styles.container}>
            <section className={styles.header}>
                <Header />
            </section>
            <aside className={styles.sidebar}>
                <SideBar />
            </aside>
            <main className={styles.mainContent}>
                {children}
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </section>
    )
};

export default DashboardLayout;