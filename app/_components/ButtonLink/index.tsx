import styles from "./index.module.css";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtomLink({ href, children }: Props) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    );
}