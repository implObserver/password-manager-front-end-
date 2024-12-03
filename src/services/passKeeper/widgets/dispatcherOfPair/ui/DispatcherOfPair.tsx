import { useCustomState } from '@/common/shared/lib'
import { Password } from '../components/password'
import { Service } from '../components/service'
import styles from './styles/DispatcherOfPair.module.css'
import { PasswordContext } from '../components/password/lib/context/Context'
import { ServiceContext } from '../components/service/lib/context/Context'
import { Button } from '@/common/shared/ui/button'
import { AddPairContext } from '@/services/passKeeper/features/addPassword/lib/context/Context'
import { AddPassword } from '@/services/passKeeper/features/addPassword'

export const DispatcherOfPair = () => {
    const pair = useCustomState({
        service: '',
        password: '',
    })

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler} className={styles.password_form}>
            <div className={styles.form_group}>
                <ServiceContext.Provider value={pair}>
                    <Service />
                </ServiceContext.Provider>
                <PasswordContext.Provider value={pair}>
                    <Password />
                </PasswordContext.Provider>
            </div>
            <div className={styles.button}>
                <AddPairContext.Provider value={pair}>
                    <AddPassword></AddPassword>
                </AddPairContext.Provider>
            </div>
        </form>
    )
}