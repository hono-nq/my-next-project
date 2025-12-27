import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContactForm";

export default function Page() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                ご質問、ご相談は下記フォームよりお問い合わせください。
            <br />
                内容を確認の上、担当者より折り返しご連絡いたします。
            </p>
            <ContactForm />
        </div>
    );
}