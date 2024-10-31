// useNotification.ts
import { notification } from 'antd';

export const useNotification = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = ({
        message,
        description,
        showProgress,
        pauseOnHover
    }: {
        message?: string;
        description?: string;
        showProgress?: boolean;
        pauseOnHover?: boolean;
    }) => {
        api.open({
            message,
            description,
            showProgress,
            pauseOnHover,
        });
    };

    return { openNotification, contextHolder };
};
