import { FC, ReactNode, useEffect } from 'react'
import { loginReducer } from '../../../../features/AuthByUsername/model/slice/loginSlice'
import { useDispatch, useStore } from 'react-redux'
import { ReduxStoreWithManager, StateSchemaKey } from '../../../../app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children: ReactNode,
    reducers: ReducersList,
    removeAfterUnmount?: boolean
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props;

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    );
};
