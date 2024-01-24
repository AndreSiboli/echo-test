import styles from '@/styles/components/layout/Logo.module.scss';

import { BsCamera2 } from 'react-icons/bs';
import { GiFireflake } from 'react-icons/gi';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" className={styles.logo}>
            <h1>
                ECHO
                <span className={styles.logo_icon}>
                    <BsCamera2 className={styles.icon_camera}/>
                    <GiFireflake className={styles.icon_flash} />
                </span>
            </h1>
        </Link>
    );
}
